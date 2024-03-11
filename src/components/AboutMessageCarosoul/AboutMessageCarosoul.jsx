"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutMessageCarosoul() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/AboutCarosoul/3.png",
    "/AboutCarosoul/8.jpg",
    "/AboutCarosoul/5.jpg",
    "/AboutCarosoul/7.jpg",
    "/AboutCarosoul/6.jpg",

    // Add more images as needed
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);
  return (
    <div className="w-full">
      <div className="w-11/12  h-96 relative m-auto">
        <Image
          className="duration-200"
          src={images[currentSlide]}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
