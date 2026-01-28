// Helper to get the correct base path for assets
export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
}

// Helper to prefix paths with basePath
export function withBasePath(path: string) {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path; // Don't modify external URLs
  }
  const basePath = getBasePath();
  return path.startsWith('/') ? `${basePath}${path}` : path;
}
