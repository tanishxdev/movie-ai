import { z } from "zod";

export const movieSchema = z.object({
  title: z.string().describe("Movie title"),

  year: z.number().describe("Release year"),

  genres: z.array(z.string()).describe("Movie genres"),

  cast: z.array(z.string()).describe("Main cast"),

  reason: z.string().describe(
    "Why this movie matches the user's mood"
  ),

  rating: z.number().describe(
    "IMDb rating out of 10"
  ),
});

export const recommendationSchema = z.object({
  movies: z.array(movieSchema).describe(
    "List of recommended movies"
  ),
});

export type Movie = z.infer<typeof movieSchema>;

export type Recommendation =
  z.infer<typeof recommendationSchema>;