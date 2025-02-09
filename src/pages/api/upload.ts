import { parseAstroForm } from '@astro-utils/formidable';
import fs from 'fs';
import path from 'path';

import type { ProcessedFile } from '../../types.ts';

export const config = {
  bodyParser: false,
};

const FILE_SIZE_LIMIT = 1_500_000;
export async function POST({ request }: { request: Request }) {
  const formData = await parseAstroForm(request);

  const files = formData.getAllFiles('images[]');
  const dirPath = formData.getText('path');

  if (!dirPath) {
    return new Response(
      JSON.stringify({
        message: `Path is missing`,
      }),
      { status: 400 }
    );
  }

  // console.log(`@@@ UPLOAD dirPath: ${dirPath}`);

  const uploadDir = path.join(process.cwd(), `public${dirPath}`);
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const processedFiles: ProcessedFile[] = files.map((file): ProcessedFile => {
    // console.log(`@@ ${index}`, file);
    if (file.mimetype !== 'image/jpeg') {
      return {
        name: file.originalFilename,
        success: false,
        message: 'File is not a jpeg format.',
      };
    }
    if (file.size > FILE_SIZE_LIMIT) {
      return {
        name: file.originalFilename,
        success: false,
        message: 'File size is too large.',
      };
    }
    try {
      const { name, ext } = path.parse(file.originalFilename);
      let counter = 1;
      let newFileName = `${name}${ext}`;
      let filePath = path.join(uploadDir, newFileName);
      while (fs.existsSync(filePath)) {
        newFileName = `${name}-${counter++}${ext}`;
        filePath = path.join(uploadDir, newFileName);
      }
      fs.renameSync(file.filepath, filePath);
      return {
        name: file.originalFilename,
        success: true,
      };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        name: file.originalFilename,
        success: false,
        message: message as string,
      };
    }
  });

  return new Response(
    JSON.stringify({
      success: true,
      processedFiles,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
