import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The whole write-up lives in each markdown body; frontmatter only names the tab
// and orders it.
const competitions = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/competitions' }),
	schema: z.object({
		title: z.string(),
		order: z.number(),
	}),
});

export const collections = { competitions };
