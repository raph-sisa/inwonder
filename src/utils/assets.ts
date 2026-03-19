/** Prefix a public-folder path with the deploy base so it works on GitHub Pages. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
