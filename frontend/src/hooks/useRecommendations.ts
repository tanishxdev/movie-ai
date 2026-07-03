import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import {
  fetchRecommendations,
  RecommendationServiceError,
} from "@/services/recommendation.service";
import type { Movie, RequestBody } from "@/types/movie";

type Status = "idle" | "loading" | "success" | "error";

interface UseRecommendationsState {
  movies: Movie[];
  status: Status;
  errorMessage: string | null;
  lastRequest: RequestBody | null;
}

export function useRecommendations() {
  const [state, setState] = useState<UseRecommendationsState>({
    movies: [],
    status: "idle",
    errorMessage: null,
    lastRequest: null,
  });

  const generate = useCallback(async (payload: RequestBody) => {
    setState((prev) => ({
      ...prev,
      status: "loading",
      errorMessage: null,
      lastRequest: payload,
    }));

    try {
      const response = await fetchRecommendations(payload);
      setState({
        movies: response.data.movies,
        status: "success",
        errorMessage: null,
        lastRequest: payload,
      });
      toast.success("Recommendations loaded successfully");
    } catch (error) {
      const message =
        error instanceof RecommendationServiceError
          ? error.message
          : "Something went wrong. Please try again.";

      setState((prev) => ({
        ...prev,
        status: "error",
        errorMessage: message,
      }));
      toast.error(message);
    }
  }, []);

  const retry = useCallback(() => {
    if (state.lastRequest) {
      generate(state.lastRequest);
    }
  }, [generate, state.lastRequest]);

  return {
    movies: state.movies,
    status: state.status,
    errorMessage: state.errorMessage,
    isLoading: state.status === "loading",
    generate,
    retry,
  };
}
