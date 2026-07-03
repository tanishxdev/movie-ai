import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Clapperboard, Heart, Loader2, ListOrdered, Wand2 } from "lucide-react";
import { Select } from "@/components/ui/Select";
import { GENRES, MOODS, MOVIE_COUNT_OPTIONS } from "@/constants/options";
import type { RequestBody } from "@/types/movie";

interface RecommendationFormProps {
  onSubmit: (payload: RequestBody) => void;
  isLoading: boolean;
}

export function RecommendationForm({ onSubmit, isLoading }: RecommendationFormProps) {
  const [genre, setGenre] = useState<string>(GENRES[0]);
  const [mood, setMood] = useState<string>(MOODS[2]);
  const [count, setCount] = useState<number>(3);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ genre, mood, count });
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      onSubmit={handleSubmit}
      className="glass-panel sticky top-24 flex flex-col gap-5 rounded-card p-6 shadow-card sm:p-7"
      aria-label="Movie recommendation preferences"
    >
      <div>
        <h2 className="font-display text-lg font-semibold text-text">Tell us your mood</h2>
        <p className="mt-1 text-sm text-text-muted">
          Set your preferences and we'll curate a shortlist instantly.
        </p>
      </div>

      <Select
        label="Genre"
        icon={<Clapperboard size={16} />}
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        {GENRES.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </Select>

      <Select
        label="Mood"
        icon={<Heart size={16} />}
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      >
        {MOODS.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </Select>

      <Select
        label="Number of movies"
        icon={<ListOrdered size={16} />}
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      >
        {MOVIE_COUNT_OPTIONS.map((n) => (
          <option key={n} value={n}>
            {n} {n === 1 ? "movie" : "movies"}
          </option>
        ))}
      </Select>

      <button
        type="submit"
        disabled={isLoading}
        className="btn-gradient mt-2 flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white shadow-glow-violet transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Generating recommendations…
          </>
        ) : (
          <>
            <Wand2 size={16} />
            Generate recommendations
          </>
        )}
      </button>
    </motion.form>
  );
}
