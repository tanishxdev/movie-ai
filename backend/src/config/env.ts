import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("8000"),

  GOOGLE_API_KEY: z.string().min(1),

  LLM_PROVIDER: z.enum(["google", "openai"]).default("google"),

  GOOGLE_MODEL: z.string(),

  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  RATE_LIMIT_WINDOW_MS: z.coerce
    .number()
    .default(15 * 60 * 1000),

  RATE_LIMIT_MAX: z.coerce
    .number()
    .default(30),
});

export const env = envSchema.parse(process.env);