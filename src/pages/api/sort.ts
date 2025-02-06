// should be false only in dev mode
// should be true for prod mode
// is managed by defineConfig({... output: IS_DEV ? 'server' : 'static'})
// so for dev mode: prerender==false, for prod: ==true (not used actually)
// export const prerender = false;

import type { APIRoute } from 'astro';
import { renameSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// type Params = {
//   path: string; // e.g. '/images/portfolio/newborn/a'
//   sortedImages: string[]; // e.g. ['1.jpg','2.jpg']
//   hideImages: string[]; // e.g. ['1.jpg','2.jpg']
// };
export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  // console.log(`@@ POST request`, { data });
  const { path, sortedImages, hideImages } = data;
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
  // if hideImages exists, then check it's an array
  if (!!hideImages && !Array.isArray(hideImages)) {
    return new Response(
      JSON.stringify({
        message: 'hideImages must be an array of strings',
      }),
      { status: 400 }
    );
  }
  try {
    // update json file here
    const filePath = resolve(`public${path}/sort.json`); // Change the path as needed

    // Write or update the file (replacing its content)
    writeFileSync(filePath, JSON.stringify(sortedImages, null, 2), 'utf-8');

    if (Array.isArray(hideImages) && hideImages?.length) {
      try {
        (hideImages as string[]).forEach((fileName) => {
          const oldFile = `public${path}/${fileName}`;
          const [name, ext] = fileName.split('.');
          const newFile = `public${path}/${name}.-${ext}`;
          renameSync(oldFile, newFile);
          console.log(`File renamed from ${oldFile} -> ${newFile}`);
        });
      } catch (err) {
        console.error('Error renaming file:', err);
      }
    }

    const hideMsg = hideImages?.length ? ` and deleted ${hideImages.length} image(s)` : '';
    return new Response(
      JSON.stringify({
        message: `Saved${hideMsg}`,
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
