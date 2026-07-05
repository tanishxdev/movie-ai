import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { env } from "./env.js";

export const llm = new ChatGoogleGenerativeAI({
  apiKey: env.GOOGLE_API_KEY,
  model: env.GOOGLE_MODEL,
  temperature: 0.3,
});