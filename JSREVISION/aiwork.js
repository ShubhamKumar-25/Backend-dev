
const Groq = require('groq-sdk')

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const AIResponce = async function(messageArray){

    if(!messageArray || !Array.isArray(messageArray) || messageArray.length === 0){
        throw new Error("AI can not responds.....")
    }

    const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
            {
                role: "System",
                content: "You are helpful AI assistent and you are responsibal for provied meaningfull answer",
            },
            ...messageArray
        ],
        tempareture: 0.5,
        max_tokens: 500
    })
    return completion.choices[0]?.messages.content;
};

const ChatWithAI = async(req, res) => {
    try {
        const { messages } = req.body;
        if(!messages || !Array.isArray(messages) || messages.length === 0){
            return res.status(400).json({
                success: false,
                message: "ALL AI field is required..."
            })
        }
        const answer = await AIResponce(messages);
        return res.status(200).json({
            success: true,
            message: "Now You can chat with AI",
            data: answer
        })
    } catch (error) {
        console.error("AI can not response");
        return res.status(500).json({
            success: false,
            message: "Something went Wrong",
            error: error.message
        });
    };
};

module.exports = {
    ChatWithAI,
    AIResponce
}