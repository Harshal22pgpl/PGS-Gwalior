// NewsCarousel.jsx
"use client";
import { getEvent } from "@/lib/services/events/eventSevices";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const NewsCarousel = ({ mixedData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 10;

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
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
              src={data.thumbNail} // Assuming image filenames start from 1
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

      <button className="p-2 bg-teal-500 absolute -bottom-64 left-96  lg:bottom-4 lg:left-4 rounded-md ">
        <Link href="/events">Events</Link>
      </button>
    </div>
  );
};

export default NewsCarousel;
