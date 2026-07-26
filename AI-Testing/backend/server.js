// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Groq = require('groq-sdk'); // 1. Groq import karo

const app = express();

app.use(cors());
app.use(express.json());

// 2. Groq Client Initialize karo
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post('/api/explain', async (req, res) => {
  try {
    const { codeSnippet } = req.body;

    if (!codeSnippet) {
      return res.status(400).json({ error: 'Bhai, pehle thoda code toh bhejo!' });
    }

    const prompt = `You are a helpful coding tutor. Explain the following JavaScript code in simple Hinglish in 3 short bullet points:\n\n${codeSnippet}`;

    // 3. Groq API Call (OpenAI-compatible format)
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      // llama-3.3-70b-versatile ya llama-3.1-8b-instant sabse popular & fast hain
      model: 'llama-3.3-70b-versatile',
    });

    // 4. Output Extracted Text
    const explanationText = completion.choices[0]?.message?.content || 'No response received.';

    res.json({ 
      explanation: explanationText 
    });

  } catch (error) {
    console.error('--- GROQ API ERROR ---', error);
    res.status(500).json({ 
      error: `Backend Error: ${error.message || 'Groq call failed'}` 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});