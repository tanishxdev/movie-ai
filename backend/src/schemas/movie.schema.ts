import { z } from "zod";

// Individual movie schema
export const movieSchema = z.object({
  title: z.string().describe("Movie title"),

  year: z.number().describe("Movie release year"),

  genres: z
    .array(z.string())
    .describe("List of movie genres"),

  cast: z
    .array(z.string())
    .describe("Main cast members"),

  reason: z
    .string()
    .describe("Reason this movie matches the user's mood"),

  rating: z
    .number()
    .min(0)
    .max(10)
    .describe("IMDb rating out of 10"),
});

// Recommendation response schema
export const recommendationSchema = z.object({
  movies: z
    .array(movieSchema)
    .describe("List of recommended movies"),
});

// Types
export type Movie = z.infer<typeof movieSchema>;

export type Recommendation = z.infer<
  typeof recommendationSchema
>;