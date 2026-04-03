import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['conference', 'journal', 'workshop', 'preprint']).optional(),
    links: z.object({
      pdf: z.string().optional(),
      doi: z.string().optional(),
      arxiv: z.string().optional(),
      code: z.string().optional(),
    }).optional(),
    selected: z.boolean().default(false),
    highlight: z.boolean().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    area: z.string(),
    summary: z.string(),
    links: z.object({
      paper: z.string().optional(),
      code: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { publications, research };
