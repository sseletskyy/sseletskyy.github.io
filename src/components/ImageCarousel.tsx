import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Install: npm install react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles

export const ImageCarousel: React.FC = () => {
  const images = [
    { src: '/images/home/first-picture.jpg', alt: 'Image 0' },
    { src: '/images/home-slider/01.jpg', alt: 'Image 1' },
    { src: '/images/home-slider/02.jpg', alt: 'Image 2' },
    { src: '/images/home-slider/03.jpg', alt: 'Image 3' },
    { src: '/images/home-slider/04.jpg', alt: 'Image 4' },
    { src: '/images/home-slider/05.jpg', alt: 'Image 5' },
    { src: '/images/home-slider/06.jpg', alt: 'Image 6' },
    { src: '/images/home-slider/07.jpg', alt: 'Image 7' },
    { src: '/images/home-slider/08.jpg', alt: 'Image 8' },
    // ... more images
  ];

  return (
    <Carousel
      className="h-screen"
      showArrows={false}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}
      showThumbs={false}
    >
      {images.map((image, index) => (
        <div className="" key={image.src}>
          <img src={image.src} alt={image.alt} className="object-cover w-full h-dvh" />
        </div>
      ))}
    </Carousel>
  );
};
