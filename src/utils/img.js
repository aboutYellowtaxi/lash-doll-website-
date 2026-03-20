// Returns the correct public image URL regardless of deployment base
const BASE = import.meta.env.BASE_URL

export function img(path) {
  return BASE + path.replace(/^\//, '')
}
