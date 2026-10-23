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

