import React, { useState,useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import carslide1 from './img/carslide1.png'
import carslide2 from './img/carslide2.png'
import carslide3 from './img/carslide3.png'

function Slide_Img() {
  const slides = [
    {
      url: carslide1 ,
    },
    {
      url:carslide2 ,
    },
    {
      url: carslide3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);



  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide_Img;