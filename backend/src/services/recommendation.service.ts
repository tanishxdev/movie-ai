import { llm } from "../config/llm.js";
import { recommendationSchema } from "../schemas/movie.schema.js";
import { RecommendationInput } from "../types/recommendation.js";
import { moviePrompt } from "../prompts/movie.prompt.js";

// Configure LLM with structured output
const structuredLLM =
  llm.withStructuredOutput(recommendationSchema);

// Create LCEL chain
const recommendationChain =
  moviePrompt.pipe(structuredLLM);

// Generate movie recommendations
export async function getRecommendations(
  input: RecommendationInput
) {
  const response =
    await recommendationChain.invoke({
      genre: input.genre,
      mood: input.mood,
      count: input.count,
    });

  return response;
}