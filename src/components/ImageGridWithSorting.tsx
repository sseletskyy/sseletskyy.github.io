import React, { useState, type MouseEvent } from 'react';

import { SortableItem } from './SortableItem';
import { cx, extractFileName } from '../utils/common-utils.ts';
import { DeleteButton } from './DeleteButton.tsx';
import type { ProcessedFile } from '../types.ts';
import { IconCheckCircle } from './IconCheckCircle.tsx';
import { IconCrossCircle } from './IconCrossCircle.tsx';

interface Props {
  images: string[];
}

interface FileWithPreview {
  file: File;
  preview: string;
}

// const { images } = Astro.props;
// export const prerender = true;
export const ImageGridWithSorting = (props: Props) => {
  const { images } = props;
  const [operationCounter, setOperationCounter] = useState(0);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [processedFiles, setProcessedFiles] = useState<Record<string, ProcessedFile>>({});
  const [imageArray, setImageArray] = useState([...images]);
  const [hideSet, setHideSet] = useState<Set<string>>(new Set());

  // converts [] to {}
  const updateProcessedFiles = (processedArray: ProcessedFile[]) => {
    const obj = processedArray.reduce((acc: Record<string, ProcessedFile>, next) => {
      acc[next.name as string] = next;
      return acc;
    }, {});
    setProcessedFiles(obj);
  };

  const getPathFromImageArray = (): string | undefined => {
    const split = (imageArray[0] || '').split('/');
    split.pop();
    return split.join('/') || undefined;
  };

  const path = getPathFromImageArray();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Essential to allow drop
  };

  const handleFilesDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const droppedFiles = Array.from(event.dataTransfer.files)
      .filter((file) => file.type.startsWith('image/jpeg'))
      .map((file) => ({ file, preview: URL.createObjectURL(file) }));

    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    console.log('Uploading files:', { path, files });

    if (!path) {
      alert('Path is required');
      return;
    }

    if (!files || files.length === 0) {
      alert('No files added');
      return;
    }

    setProcessedFiles({});
    const formData = new FormData();
    files.forEach(({ file }) => formData.append('images[]', file)); // Use file property
    formData.append('path', path);

    fetch('/api/upload', {
      // Replace with your endpoint
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Upload Success'); // TODO added number of files uploaded
        updateProcessedFiles(data.processedFiles || []);
      })
      .catch((error) => {
        console.error('@@ Upload Error:', error);
        alert(String(error?.message));
      });
  };
  const incrementCounter = () => {
    setOperationCounter((prev) => prev + 1);
  };
  const resetCounter = () => {
    setOperationCounter(0);
  };

  const swapImages = (index1: number, index2: number) => (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (index2 >= 0 && index2 < imageArray.length) {
      const newArray = [...imageArray];
      [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
      setImageArray(newArray);
      incrementCounter();
    }
  };

  const hideImage = (image: string) => (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setHideSet((prev) => {
      prev.has(image) ? prev.delete(image) : prev.add(image);
      return new Set(prev);
    });
    incrementCounter();
  };

  const exportOrder = () => {
    const onlyFiles = imageArray.map(extractFileName);
    const hideImages = Array.from(hideSet).map(extractFileName);
    if (!path) {
      alert(`Path is undefined`);
      return;
    }
    if (!onlyFiles || !onlyFiles.length) {
      alert(`No images found`);
      return;
    }
    // console.log('Sort order:', onlyFiles);
    // console.log('Folder path:', path);
    // console.log('Images to hide:', hideImages);
    // return imageArray;
    fetch('/api/sort', {
      method: 'POST',
      body: JSON.stringify({ path, sortedImages: onlyFiles, hideImages }),
    })
      .then((res) => res.json())
      .then(
        (data) => {
          resetCounter();
          alert(data.message);
        },
        (data) => {
          console.error(data);
        }
      );
  };

  return (
    <div className="flex flex-col">
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleFilesDrop}>
        <p>Drag and drop JPG images here</p>

        <div className={`relative mb-2 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-3`}>
          {files.map((fileObj, index) => (
            <SortableItem key={fileObj.file.name} className="group relative mx-auto flex flex-col" id={fileObj.file.name} index={index}>
              <img src={fileObj.preview} alt={fileObj.file.name} className="preview-image" />
              <div>{fileObj.file.name}</div>
              <div className="absolute bottom-12 flex w-full items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <DeleteButton onClick={() => handleRemoveFile(index)} />
              </div>
              {processedFiles[fileObj.file.name] && (
                <div className="absolute top-12 flex w-full items-center justify-start bg-white p-2 opacity-100 transition-opacity">
                  {processedFiles[fileObj.file.name].success && (
                    <div>
                      <IconCheckCircle /> SUCCESS
                    </div>
                  )}
                  {!processedFiles[fileObj.file.name].success && (
                    <div>
                      <IconCrossCircle /> {processedFiles[fileObj.file.name].message}
                    </div>
                  )}
                </div>
              )}
            </SortableItem>
          ))}
        </div>

        {files.length > 0 && (
          <div className="flex flex-row items-center justify-center gap-2">
            <div>Path: {path}</div>
            <button className="rounded-md border bg-amber-200 p-2 text-xl hover:scale-110" onClick={handleUpload}>
              Upload Selected Images
            </button>
          </div>
        )}
      </div>
      <div className={`relative mb-2 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-3`}>
        {imageArray.map((image, index) => (
          <div key={image} className="group relative mx-auto flex flex-col">
            <img
              className={cx('h-auto max-w-full rounded-md', hideSet.has(image) && 'brightness-50')}
              src={image}
              alt={`Portfolio image ${index + 1}`}
              data-class2="w-full h-full"
              loading="lazy"
            />
            <div>{image.split('/').slice(-2).join('/')}</div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-5">
                <button className="hover:scale-125" style={{ fontSize: 48 }} onClick={swapImages(index, index - 3)}>
                  ⬆️
                </button>
                <button className="hover:scale-125" style={{ fontSize: 48 }} onClick={swapImages(index, index + 3)}>
                  ⬇️
                </button>
                <button className="hover:scale-125" style={{ fontSize: 48 }} onClick={swapImages(index, index - 1)}>
                  ⬅️
                </button>
                <button className="hover:scale-125" style={{ fontSize: 48 }} onClick={swapImages(index, index + 1)}>
                  ➡️
                </button>
                <button
                  className="mt-10 flex items-center justify-center text-center bg-blend-color hover:scale-125"
                  style={{ fontSize: 48, width: 40, height: 40 }}
                  onClick={hideImage(image)}
                >
                  ✖️
                </button>
              </div>
              {imageArray.length - 1 !== index && (
                <button onClick={exportOrder} className="absolute bottom-10 right-1 mt-4 rounded bg-amber-100 p-2 hover:scale-110">
                  Save Order
                </button>
              )}
            </div>
          </div>
        ))}
        {operationCounter > 0 && (
          <>
            <div onClick={exportOrder} className="absolute right-0 top-0 z-10 ml-auto w-fit rounded-lg bg-blue-500 p-4 text-white shadow-lg hover:scale-110">
              Save Order
            </div>
            <div onClick={exportOrder} className="absolute bottom-0 right-0 z-10 ml-auto w-fit rounded-lg bg-blue-500 p-4 text-white shadow-lg hover:scale-110">
              Save Order
            </div>
          </>
        )}
      </div>
    </div>
  );
};
