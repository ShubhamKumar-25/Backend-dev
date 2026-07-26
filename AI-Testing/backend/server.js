const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenAI } = require('@google/genai')
const app = express();


// Middleware
app.use(cors);
app.use(express.json());

// initilisze gemini AI
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// real routing 
app.post('/api/explain', async (req , res) => {
    try {
        

        const { codeSnippet } = req.body;

        if(!codeSnippet){
            return res.status(400).json({
                message: "Something went wrong",
                error: "Bro give me some code"
            })
        }

        // to Give a AI instruction
        const prompt = `You are a helpful coding tutor. Explain the following JavaScript code in very simple Hinglish (Hindi + English) in 3-4 short bullet points:\n\n${codeSnippet}`;

        // gemini API call
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt
        });

        // for the response
        res.json({
            explanation: response.text
        })

    } catch (error) {
        console.error('error in AI Route', error);
        res.status(500).json({
            error: 'something went wrong when AI is answering'
        });
    };
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is runnig on localhost: ${PORT}`);
    
})