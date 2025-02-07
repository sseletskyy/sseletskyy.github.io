export function slugify(input?: string) {
  if (!input) return '';

  // make lower case and trim
  var slug = input.toLowerCase().trim();

  // remove accents from charaters
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, '-');

  return slug;
}

export function cx(...args: unknown[]) {
  return args
    .flat()
    .filter((x: unknown) => typeof x === 'string')
    .join(' ')
    .trim();
}

// /images/portfolio/pregnancy/b1/1234.jpg -> 1234.jpg
export const extractFileName = (filePath: string): string => {
  const split = filePath.split('/');
  return split.pop() as string;
};
