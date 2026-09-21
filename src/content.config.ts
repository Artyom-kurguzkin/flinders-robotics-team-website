import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const competitions = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/competitions' }),
	schema: z.object({
		title: z.string(),
		year: z.number(),
		location: z.string(),
		dates: z.string(),
		summary: z.string(),
	}),
});

export const collections = { competitions };
