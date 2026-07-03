import { AxiosError } from "axios";
import { apiClient } from "./api";
import type {
  ApiErrorResponse,
  RecommendationResponse,
  RequestBody,
} from "@/types/movie";

export class RecommendationServiceError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "RecommendationServiceError";
    this.status = status;
  }
}

export async function fetchRecommendations(
  payload: RequestBody
): Promise<RecommendationResponse> {
  try {
    const { data } = await apiClient.post<RecommendationResponse>(
      "/api/recommend",
      payload
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const responseData = error.response?.data as ApiErrorResponse | undefined;
      const message =
        responseData?.message ||
        error.message ||
        "Something went wrong while fetching recommendations.";
      throw new RecommendationServiceError(message, error.response?.status);
    }
    throw new RecommendationServiceError(
      "Unable to reach the recommendation service."
    );
  }
}

export async function checkHealth(): Promise<boolean> {
  try {
    await apiClient.get("/health");
    return true;
  } catch {
    return false;
  }
}
