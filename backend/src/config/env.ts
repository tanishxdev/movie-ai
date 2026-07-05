import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("8000"),

  GOOGLE_API_KEY: z.string().min(1),

  // OPENAI_API_KEY: z.string().optional(),

  LLM_PROVIDER: z.enum([
    "google",
    "openai"
  ]).default("google"),

  GOOGLE_MODEL: z.string(),

  // OPENAI_MODEL: z.string()
});

export const env = envSchema.parse(process.env);