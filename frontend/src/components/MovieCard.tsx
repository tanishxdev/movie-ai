import { motion } from "framer-motion";
import { CalendarDays, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { RatingBadge } from "@/components/ui/RatingBadge";
import type { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
  index: number;
}

export function MovieCard({ movie, index }: MovieCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="glass-panel group flex flex-col gap-4 rounded-card p-5 shadow-card transition-shadow duration-300 hover:shadow-glow-cyan sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold leading-snug text-text">
            {movie.title}
          </h3>
          <div className="mt-1.5 flex items-center gap-1.5 text-xs text-text-faint">
            <CalendarDays size={12} />
            <span>{movie.year}</span>
          </div>
        </div>
        <RatingBadge rating={movie.rating} />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {movie.genres.map((genre) => (
          <Badge key={genre} variant="accent">
            {genre}
          </Badge>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-text-muted">{movie.reason}</p>

      <div className="mt-auto flex items-start gap-2 border-t border-border pt-4">
        <Users size={14} className="mt-0.5 shrink-0 text-text-faint" />
        <p className="text-xs leading-relaxed text-text-faint">
          {movie.cast.join(", ")}
        </p>
      </div>
    </motion.article>
  );
}
