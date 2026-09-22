// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Custom domain (public/CNAME) — root path, no repo-name base.
	site: 'https://www.flinders-robotics-team.org',
	base: '/',
});
