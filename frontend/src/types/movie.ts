export interface Movie {
  title: string;
  year: number;
  genres: string[];
  cast: string[];
  reason: string;
  rating: number;
}

export interface RecommendationData {
  movies: Movie[];
}

export interface RecommendationResponse {
  success: boolean;
  message: string;
  data: RecommendationData;
}

export interface RequestBody {
  genre: string;
  mood: string;
  count: number;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors: unknown;
}
