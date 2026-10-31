require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const documents = [];

// 1. To divide text into chunks
function chunkText(text, size = 500, overlap = 100) {
  const chunks = [];
  for (let i = 0; i < text.length; i += size - overlap) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks.filter(chunk => chunk.trim());
}


// 2. Embedding generate 
async function getEmbedding(text) {
  const response = await fetch(
    "https://api.openai.com/v1/embeddings",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: text,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Embedding API failed: ${response.status}`);
  }
  const data = await response.json();
  return data.data[0].embedding;
}


// 3. calculate Cosine similarity
function cosineSimilarity(a, b) {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] ** 2;
    normB += b[i] ** 2;
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB) || 1);
}



// 4. ingrate Document
app.post("/ingest", async (req, res) => {
  try {
    const { text } = req.body;

    if (typeof text !== "string" || !text.trim()) {
      return res.status(400).json({ error: "Text is required" });
    }

    const chunks = chunkText(text);
    const newDocuments = [];

    for (const chunk of chunks) {
      const embedding = await getEmbedding(chunk);

      newDocuments.push({ text: chunk, embedding });
    }

    documents.push(...newDocuments);

    res.json({
      message: "Documents indexed successfully",
      chunks: newDocuments.length,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 5. Relevant chunks 
async function retrieveChunks(question, topK = 3) {
  const questionEmbedding = await getEmbedding(question);

  return documents
    .map(doc => ({
      text: doc.text,
      score: cosineSimilarity(questionEmbedding, doc.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}



// 6. Generate answer from LLM
async function generateAnswer(question, context) {
  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "Answer using only the provided context. " +
              "If the answer is not in the context, say you don't know.",
          },
          {
            role: "user",
            content: `Context:\n${context}\n\nQuestion: ${question}`,
          },
        ],
        temperature: 0.2,
      }),
    }
  );
  if (!response.ok) {
    throw new Error(`Groq API failed: ${response.status}`);
  }
  const data = await response.json();
  return data.choices[0].message.content;
}
