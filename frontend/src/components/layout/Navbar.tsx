import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { BrandMark } from "@/components/ui/BrandMark";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { APP_NAME } from "@/constants/options";

const GITHUB_URL = "https://github.com/tanishxdev/movie-ai";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-cyan-soft rounded-lg">
          <BrandMark size={30} />
          <span className="font-display text-[17px] font-semibold tracking-tight text-text">
            {APP_NAME}
          </span>
        </a>

        <nav className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-9 items-center gap-2 rounded-full border border-border bg-surface px-3.5 text-sm font-medium text-text-muted transition-colors hover:border-border-strong hover:text-text focus-visible:outline-2 focus-visible:outline-cyan-soft"
          >
            <FiGithub size={15} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
}
