const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function sitePath(path: string) {
  if (/^https?:\/\//.test(path) || path.startsWith("mailto:")) {
    return path;
  }

  if (path.startsWith("#")) {
    return `${basePath}/${path}`;
  }

  if (path === "/") {
    return `${basePath}/`;
  }

  const hasFileExtension = /\.[a-z0-9]+($|#)/i.test(path);
  const normalized =
    !hasFileExtension && !path.endsWith("/") && !path.includes("#")
      ? `${path}/`
      : path;

  return `${basePath}${normalized}`;
}
