import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const result = await model.generateContent("Hello");

console.log(result.response.text());