import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const docs = defineCollection({
  loader: glob({ pattern: "[^_]*.json", base: "./src/content/docs" }),
  schema: z.object({
    name: z.string(),
    html: z.string(),
    tsd: z.boolean(),
    snippets: z.array(
      z.object({
        name: z.string(),
      })
    ),
  }),
});

export const collections = { docs };
