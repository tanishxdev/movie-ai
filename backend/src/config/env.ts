import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().default('8000'),

  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  GROQ_API_KEY: z.string().min(1),

  GROQ_MODEL: z.string(),

  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(900000),

  RATE_LIMIT_MAX: z.coerce.number().default(30),
});

export const env = envSchema.parse(process.env);
