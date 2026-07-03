import { z } from "zod";

// Validate and parse environment variables
const envSchema = z.object({
  // Server
  PORT: z.coerce.number().default(8000),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // Gemini
  GOOGLE_API_KEY: z.string().min(1, "GOOGLE_API_KEY is required"),
  GOOGLE_MODEL: z.string().default("gemini-2.5-flash"),

  // LLM
  LLM_PROVIDER: z.enum(["google"]).default("google"),

  // Rate Limiter
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(60 * 1000),
  RATE_LIMIT_MAX: z.coerce.number().default(10),
});

// Parse & validate process.env
export const env = envSchema.parse(process.env);

// Export inferred type
export type Env = z.infer<typeof envSchema>;