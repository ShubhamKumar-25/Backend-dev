require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const documents = [];

// 1. Text ko chunks mein divide karna
function chunkText(text, size = 500, overlap = 100) {
  const chunks = [];
  for (let i = 0; i < text.length; i += size - overlap) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks.filter(chunk => chunk.trim());
}


// 2. Embedding generate karna
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



// 3. Cosine similarity calculate karna
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