import { z } from "zod";

// Validate incoming request body
export const recommendationRequestSchema = z.object({
  genre: z
    .string()
    .trim()
    .min(2, "Genre is required"),

  mood: z
    .string()
    .trim()
    .min(2, "Mood is required"),

  count: z
    .number()
    .int()
    .min(1)
    .max(10),
});

// Request type
export type RecommendationRequest = z.infer<
  typeof recommendationRequestSchema
>;