import { motion } from "framer-motion";
import { Film } from "lucide-react";

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-panel flex flex-col items-center justify-center gap-4 rounded-card px-6 py-20 text-center"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface-2">
        <div className="absolute inset-0 animate-reel-spin rounded-full border border-dashed border-border-strong" />
        <Film size={24} className="text-violet-soft" />
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-text">
          Your AI recommendations will appear here.
        </h3>
        <p className="mx-auto mt-1.5 max-w-xs text-sm text-text-muted">
          Choose a genre and mood on the left, then generate your personalized shortlist.
        </p>
      </div>
    </motion.div>
  );
}
