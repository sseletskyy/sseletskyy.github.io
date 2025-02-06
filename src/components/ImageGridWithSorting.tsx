import siteConfig from '../data/site-config';
import { useState } from 'preact/hooks';
import { cx, extractFileName } from '../utils/common-utils.ts';
interface Props {
  images: string[];
}

// const { images } = Astro.props;
// export const prerender = true;
const devMode = siteConfig.devMode;
export const ImageGridWithSorting = (props: Props) => {
  const { images } = props;
  const [operationCounter, setOperationCounter] = useState(0);
  const [imageArray, setImageArray] = useState([...images]);
  const [hideSet, setHideSet] = useState<Set<string>>(new Set());

  const incrementCounter = () => {
    setOperationCounter((prev) => prev + 1);
  };
  const resetCounter = () => {
    setOperationCounter(0);
  };

  const swapImages = (index1: number, index2: number) => (e: Event) => {
    e.stopPropagation();
    console.log(`@@ swapImages: ${index1} -> ${index2}`);
    if (index2 >= 0 && index2 < imageArray.length) {
      const newArray = [...imageArray];
      [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
      setImageArray(newArray);
      incrementCounter();
    }
  };

  const hideImage = (image: string) => (e: Event) => {
    e.stopPropagation();
    setHideSet((prev) => {
      prev.has(image) ? prev.delete(image) : prev.add(image);
      return new Set(prev);
    });
    incrementCounter();
  };

  const exportOrder = () => {
    const onlyFiles = imageArray.map(extractFileName);
    const split = imageArray[0].split('/');
    split.pop();
    const path = split.join('/');
    const hideImages = Array.from(hideSet).map(extractFileName);
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
    <div className={`relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mb-2`}>
      {imageArray.map((image, index) => (
        <div key={image} className="mx-auto flex flex-col relative group">
          <img
            className={cx('h-auto max-w-full rounded-md', hideSet.has(image) && 'brightness-50')}
            src={image}
            alt={`Portfolio image ${index + 1}`}
            data-class2="w-full h-full"
            loading="lazy"
          />
          {devMode && <div>{image.split('/').slice(-2).join('/')}</div>}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="grid grid-cols-2 gap-5">
              <button class="hover:scale-125" style={{ fontSize: 48 }} onClick={swapImages(index, index - 3)}>
                ⬆️
              </button>
              <button class="hover:scale-125" style={{ fontSize: 48 }} onClick={swapImages(index, index + 3)}>
                ⬇️
              </button>
              <button class="hover:scale-125" style={{ fontSize: 48 }} onClick={swapImages(index, index - 1)}>
                ⬅️
              </button>
              <button class="hover:scale-125" style={{ fontSize: 48 }} onClick={swapImages(index, index + 1)}>
                ➡️
              </button>
              <button
                class="bg-red-600 flex items-center justify-center text-center mt-10 hover:scale-125"
                style={{ fontSize: 48, width: 40, height: 40 }}
                onClick={hideImage(image)}
              >
                ␡
              </button>
            </div>
            {imageArray.length - 1 !== index && (
              <button onClick={exportOrder} className="mt-4 bg-amber-100 p-2 rounded bottom-10 right-1 absolute hover:scale-110">
                Save Order
              </button>
            )}
          </div>
        </div>
      ))}
      {operationCounter > 0 && (
        <>
          <div onClick={exportOrder} className="absolute top-0 right-0 z-10 w-fit ml-auto bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:scale-110">
            Save Order
          </div>
          <div onClick={exportOrder} className="absolute bottom-0 right-0 z-10 w-fit ml-auto bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:scale-110">
            Save Order
          </div>
        </>
      )}
    </div>
  );
};
