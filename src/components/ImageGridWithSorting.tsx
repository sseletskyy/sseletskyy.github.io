import siteConfig from '../data/site-config';
import { useState } from 'preact/hooks';
interface Props {
  images: string[];
}

// const { images } = Astro.props;
// export const prerender = true;
const devMode = siteConfig.devMode;
let counter = 0;
export const ImageGridWithSorting = (props: Props) => {
  const { images } = props;
  const [imageArray, setImageArray] = useState([...images]);
  // console.log(`@@ render`, images[0]);

  const swapImages = (index1: number, index2: number) => (e: Event) => {
    e.stopPropagation();
    console.log(`@@ swapImages: ${index1} -> ${index2}`);
    if (index2 >= 0 && index2 < imageArray.length) {
      const newArray = [...imageArray];
      [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
      setImageArray(newArray);
    }
  };
  const exportOrder = () => {
    const onlyFiles = imageArray.map((image) => {
      const split = image.split('/');
      return split.pop();
    });
    const split = imageArray[0].split('/');
    split.pop();
    const path = split.join('/');
    console.log('Exported order:', onlyFiles);
    console.log('Exported path:', path);
    // return imageArray;
    fetch('/api/sort', {
      method: 'POST',
      body: JSON.stringify({ path, sortedImages: onlyFiles }),
    })
      .then((res) => res.json())
      .then(
        (data) => {
          alert('Saved');
        },
        (data) => {
          console.error(data);
        }
      );
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mb-2 ${counter++ % 2 === 0 ? ' bg-blue-100' : ''}`}>
      {imageArray.map((image, index) => (
        <div key={image} className="mx-auto flex flex-col relative group">
          <img className="h-auto max-w-full rounded-md" src={image} alt={`Portfolio image ${index + 1}`} data-class2="w-full h-full" loading="lazy" />
          {devMode && <div>{image.split('/').slice(-2).join('/')}</div>}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="grid grid-cols-2 gap-2">
              <button style={{ fontSize: 48 }} onClick={swapImages(index, index - 3)}>
                ⬆️
              </button>
              <button style={{ fontSize: 48 }} onClick={swapImages(index, index + 3)}>
                ⬇️
              </button>
              <button style={{ fontSize: 48 }} onClick={swapImages(index, index - 1)}>
                ⬅️
              </button>
              <button style={{ fontSize: 48 }} onClick={swapImages(index, index + 1)}>
                ➡️
              </button>
            </div>
            <button onClick={exportOrder} className="mt-4 bg-amber-100 p-2 rounded bottom-10 right-1 absolute">
              Save Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
