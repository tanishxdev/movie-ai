import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw } from "lucide-react";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      role="alert"
      className="glass-panel flex flex-col items-center gap-4 rounded-card border-danger/20 px-6 py-16 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-danger/10 text-danger">
        <AlertTriangle size={20} />
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-text">
          Couldn't generate recommendations
        </h3>
        <p className="mx-auto mt-1.5 max-w-sm text-sm text-text-muted">{message}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-border-strong hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-cyan-soft"
      >
        <RefreshCcw size={14} />
        Try again
      </button>
    </motion.div>
  );
}
