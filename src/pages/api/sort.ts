export const prerender = false;
import type { APIRoute } from 'astro';
import { writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

type Params = {
  path: string; // e.g. '/images/portfolio/newborn/a'
  sortedImages: string[]; // e.g. ['1.jpg','2.jpg']
};
export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  console.log(`@@ POST request`, { data });
  const { path, sortedImages } = data;
  if (typeof path !== 'string') {
    return new Response(
      JSON.stringify({
        message: 'path must be a string',
      }),
      { status: 400 }
    );
  }
  if (!Array.isArray(sortedImages) || typeof sortedImages[0] !== 'string') {
    return new Response(
      JSON.stringify({
        message: 'sortedImages must be an array of strings',
      }),
      { status: 400 }
    );
  }
  // update json file here
  try {
    const filePath = resolve(`public${path}/sort.json`); // Change the path as needed

    // Write or update the file (replacing its content)
    writeFileSync(filePath, JSON.stringify(sortedImages, null, 2), 'utf-8');

    return new Response(
      JSON.stringify({
        message: 'saved',
      }),
      { status: 200 }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: `error saving sort.json: ${(e as Error).message}`,
      }),
      { status: 400 }
    );
  }
};
