import { ChatGroq } from '@langchain/groq';
import { env } from './env.js';

export const llm = new ChatGroq({
  apiKey: env.GROQ_API_KEY,

  model: env.GROQ_MODEL,

  temperature: 0.3,
});
