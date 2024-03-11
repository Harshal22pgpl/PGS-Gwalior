"use client";
import React, { useEffect, useState } from "react";

const Carousel = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change slide every 3 seconds (adjust as needed)
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Carousel items */}
        {[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjMPpnnimMTmFwQV0wOSbV5rW7M3htFMgBQwEgI6Tt-2aRMd7e_7Ns8Rb6s2h9rzEiRk&usqp=CAU",
          "https://img.freepik.com/free-photo/back-school-concept-books-colored-pencils-clock_155003-3671.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIYPMVVBayACEKPKCpx2sW8h24dXozDPdWQ&usqp=CAU",
          "https://www.intel.com/content/dam/www/public/us/en/images/education/16x9/two-girls-smiling-with-laptop-rwd.jpg",
          5,
        ].map((item, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentSlide ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={item}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${item}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={goToPrevSlide}
      >
        {/* ... Previous button content ... */}
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNextSlide}
      >
        {/* ... Next button content ... */}
      </button>
    </div>
  );
};

export default Carousel;
