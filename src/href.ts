/** Prefix a path with Astro's configured `base`. Collapses the double slash you get when base is '/'. */
export const href = (path: string) =>
	`${import.meta.env.BASE_URL}${path}`.replace(/\/{2,}/g, '/');
