'use client'
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NewsCarousel = ({ mixedData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = mixedData.length; // Set totalItems dynamically
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    intervalRef.current = intervalId;

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [totalItems]);

  useEffect(() => {
    // Clear interval when component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      id="controls-carousel"
      className="relative w-full border-2"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="lg:min-h-[375px] lg:max-h-[375px] md:min-h-[375px]  md:max-h-[375px] p-2">
        {/* Render each carousel item */}
        {mixedData.map((data, index) => (
          <div
            key={index}
            className={`duration-700 ease-linear ${
              activeIndex === index ? "" : "opacity-0"
            }`}
            data-carousel-item={activeIndex === index ? "active" : undefined}
          >
            <img
              src={data.thumbNail}
              className="absolute block h-72 w-full lg:min-h-[310px] lg:max-h-[310px] md:min-h-auto md:max-h-auto -translate-x-1/2 left-1/2 "
              alt={`Slide ${index + 1}`}
            />
            <p className="absolute m-auto top-60 text-black lg:bottom-20 rounded-lg font-bold text-xs bg-gray-100 p-4 left-2 text-center">
              {data.title}
            </p>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="font-bold text-black text-2xl absolute lg:top-0 start-0 top-32  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        &lt; {/* Previous button content */}
      </button>

      <button
        type="button"
        className="absolute text-black font-bold text-2xl lg:top-0 end-0 top-32  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        &gt; {/* Next button content */}
      </button>
    </div>
  );
};

export default NewsCarousel;
