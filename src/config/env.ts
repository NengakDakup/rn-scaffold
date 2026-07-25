import { z } from 'zod';

const schema = z.object({
  EXPO_PUBLIC_API_URL: z.string().url().default('https://api.example.com'),
  EXPO_PUBLIC_SENTRY_DSN: z.string().optional(),
});

export const env = schema.parse({
  EXPO_PUBLIC_API_URL:
    process.env.EXPO_PUBLIC_API_URL || 'https://api.example.com',
  EXPO_PUBLIC_SENTRY_DSN: process.env.EXPO_PUBLIC_SENTRY_DSN,
});
