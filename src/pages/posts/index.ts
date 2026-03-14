const markdownModules = import.meta.glob('../../posts/*/index.md', { query: '?raw', import: 'default' });
const imageModules = import.meta.glob('../../posts/*/**/*.{png,jpg,jpeg,gif,webp,avif,svg}', {
  query: '?url',
  import: 'default',
});

const slugMarkdownLoaders: Record<string, () => Promise<string>> = {};
const slugImageLoaders: Record<string, Record<string, () => Promise<string>>> = {};

for (const path of Object.keys(markdownModules)) {
  const match = path.match(/^\.\.\/\.\.\/posts\/([^/]+)\/index\.md$/);
  if (!match) {
    continue;
  }

  const [, slug] = match;
  slugMarkdownLoaders[slug] = markdownModules[path] as () => Promise<string>;
}

for (const path of Object.keys(imageModules)) {
  const match = path.match(/^\.\.\/\.\.\/posts\/([^/]+)\/(.+)$/);
  if (!match) {
    continue;
  }

  const [, slug, relativePath] = match;
  slugImageLoaders[slug] ??= {};
  slugImageLoaders[slug][relativePath] = imageModules[path] as () => Promise<string>;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function rewriteAssetLinks(markdown: string, assetUrlsByPath: Record<string, string>): string {
  let rewritten = markdown;

  for (const [relativePath, assetUrl] of Object.entries(assetUrlsByPath)) {
    const escapedPath = escapeRegExp(relativePath);
    const escapedDotPath = escapeRegExp(`./${relativePath}`);

    // Rewrites image and link URLs like:
    // ![caption](image.png) or ![caption](./images/coverage-map.png "title")
    const relativePattern = new RegExp(`(\\]\\()${escapedPath}(\\s*(?:\"[^\"]*\"|'[^']*')?\\))`, 'g');
    const dotRelativePattern = new RegExp(`(\\]\\()${escapedDotPath}(\\s*(?:\"[^\"]*\"|'[^']*')?\\))`, 'g');

    rewritten = rewritten.replace(relativePattern, `$1${assetUrl}$2`);
    rewritten = rewritten.replace(dotRelativePattern, `$1${assetUrl}$2`);
  }

  return rewritten;
}

export async function loadPost(slug: string): Promise<string | null> {
  const markdownLoader = slugMarkdownLoaders[slug];
  if (!markdownLoader) {
    return null;
  }

  const markdown = (await markdownLoader()) as string;
  const imageLoaderMap = slugImageLoaders[slug];

  if (!imageLoaderMap) {
    return markdown;
  }

  const imageEntries = await Promise.all(
    Object.entries(imageLoaderMap).map(async ([relativePath, loader]) => {
      const imageUrl = (await loader()) as string;
      return [relativePath, imageUrl] as const;
    }),
  );

  const assetUrlsByPath = Object.fromEntries(imageEntries);
  return rewriteAssetLinks(markdown, assetUrlsByPath);
}
