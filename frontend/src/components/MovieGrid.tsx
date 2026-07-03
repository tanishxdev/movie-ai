import { MovieCard } from "@/components/MovieCard";
import type { Movie } from "@/types/movie";

export function MovieGrid({ movies }: { movies: Movie[] }) {
  return (
    <div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-2"
      role="list"
      aria-label="Movie recommendations"
    >
      {movies.map((movie, index) => (
        <div role="listitem" key={`${movie.title}-${movie.year}`}>
          <MovieCard movie={movie} index={index} />
        </div>
      ))}
    </div>
  );
}
