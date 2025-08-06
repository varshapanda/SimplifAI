require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(
  cors({
  origin:[process.env.FRONTEND_URL, "http://localhost:5173"]
}));

app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/explain", async (req, res) => {
  try {
    const { question } = req.body;
    const prompt = `Explain this like I'm 5 years old using simple words and short sentences: ${question}`;
    const result = await model.generateContent(prompt);
    const answer = result.response.text();
    return res.status(200).json({ answer });
  } catch (err) {
    console.error("Gemini Error:", err);
    return res
      .status(500)
      .json({ message: "Sorry, I had trouble in understanding that question" });
  }
});

app.get("/", (req, res) => {
  return res.status(200).json("Welcome to SimplifAI");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
});
