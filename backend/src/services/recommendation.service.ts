import { llm } from '../config/llm.js';
import { moviePrompt } from '../prompts/movie.prompt.js';
import { RecommendationInput } from '../types/recommendation.js';
import { recommendationSchema } from '../schemas/movie.schema.js';

const structuredLLM = llm.withStructuredOutput(recommendationSchema);

const chain = moviePrompt.pipe(structuredLLM);

export async function getRecommendations(input: RecommendationInput) {
  const response = await chain.invoke(input);

  return response;
}
