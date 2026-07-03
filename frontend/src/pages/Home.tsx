import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "@/components/layout/Hero";
import { RecommendationForm } from "@/components/RecommendationForm";
import { MovieGrid } from "@/components/MovieGrid";
import { EmptyState } from "@/components/EmptyState";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { ErrorState } from "@/components/ErrorState";
import { useRecommendations } from "@/hooks/useRecommendations";
import type { RequestBody } from "@/types/movie";

export function Home() {
  const { movies, status, errorMessage, isLoading, generate, retry } =
    useRecommendations();

  function handleSubmit(payload: RequestBody) {
    generate(payload);
  }

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr] lg:gap-8">
          <RecommendationForm onSubmit={handleSubmit} isLoading={isLoading} />

          <div>
            <AnimatePresence mode="wait">
              {status === "loading" && (
                <motion.div
                  key="loading"
                  exit={{ opacity: 0 }}
                >
                  <LoadingSkeleton />
                </motion.div>
              )}

              {status === "error" && errorMessage && (
                <motion.div key="error" exit={{ opacity: 0 }}>
                  <ErrorState message={errorMessage} onRetry={retry} />
                </motion.div>
              )}

              {status === "success" && movies.length > 0 && (
                <motion.div key="success" exit={{ opacity: 0 }}>
                  <MovieGrid movies={movies} />
                </motion.div>
              )}

              {status === "idle" && (
                <motion.div key="idle" exit={{ opacity: 0 }}>
                  <EmptyState />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
