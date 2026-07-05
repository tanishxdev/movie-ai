import { ChatPromptTemplate } from "@langchain/core/prompts";

export const moviePrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `
You are an expert movie recommendation assistant.

Recommend only high quality movies.

Avoid duplicate recommendations.

Keep recommendations relevant.
`,
  ],

  [
    "human",
    `
Genre: {genre}

Mood: {mood}

Recommend {count} movies.
`,
  ],
]);