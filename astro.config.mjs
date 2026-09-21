// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages project site. Moving to a custom domain or a <owner>.github.io
	// repo means base: '/' and the new site URL.
	site: 'https://artyom-kurguzkin.github.io',
	base: '/flinders-robotics-team-website/',
});
