import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: 'EXPO_PUBLIC_',
  isServer: true, // Bypass server-side checks
  client: {
    EXPO_PUBLIC_APP_NAME: z.string().min(1),
    EXPO_PUBLIC_STORYBOOK_ENABLED: z.union([
      z.literal('true'),
      z.literal('false'),
    ]),
  },
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnv: process.env,
});
