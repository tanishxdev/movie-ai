import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { APP_TAGLINE } from "@/constants/options";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
      {/* Ambient gradient blobs — cinema projector light */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute -left-32 top-[-120px] h-96 w-96 rounded-full bg-violet/30 blur-[110px]" />
        <div
          className="animate-blob absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-cyan/20 blur-[120px]"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="animate-blob absolute bottom-[-140px] left-1/3 h-80 w-80 rounded-full bg-gold/10 blur-[100px]"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-text-muted"
        >
          <Sparkles size={13} className="text-cyan-soft" />
          Powered by generative AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl"
        >
          AI movie recommendations,
          <br />
          <span className="text-gradient">tuned to your mood.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-text-muted sm:text-lg"
        >
          {APP_TAGLINE} Pick a genre, tell us how you feel, and let the model do the rest.
        </motion.p>
      </div>
    </section>
  );
}
