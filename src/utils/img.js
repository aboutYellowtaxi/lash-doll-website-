// Utility to get correct image URL with Vite base path
// Needed for GitHub Pages deployment where base = '/lash-doll-website-/'
const BASE = import.meta.env.BASE_URL

export function img(path) {
  // path should be like 'images/valeria.png' (no leading slash)
  return BASE + path.replace(/^\//, '')
}
