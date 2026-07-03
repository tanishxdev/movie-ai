export const GENRES = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Animation",
] as const;

export const MOODS = [
  "Happy",
  "Sad",
  "Excited",
  "Relaxed",
  "Romantic",
  "Scared",
  "Motivated",
  "Thoughtful",
] as const;

export const MOVIE_COUNT_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1);

export const APP_NAME = "MovieMind AI";
export const APP_TAGLINE = "Discover your next favorite movie, powered by AI.";
