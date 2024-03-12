// components/ImageGallery.js
import React from "react";
import Image from "next/image";

const ImageGallery = () => {
  return (
    <>
      <div className="w-full flex lg:flex-row md:flex-row flex-col justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/2  p-1 pr-3">
          <Image
         src={`/Gwal_Img/1 (1).jpg`}
            width={900}
            height={300}
            className="rounded-lg"
            alt="image"
          />
        </div>
        <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center items-center flex-wrap">
          {[4, 5, 12, 23].map((index) => (
            <div className="w-1/2 lg:p-4 md:p-4 p-1">
              <img
                key={index}
                src={`/Gwal_Img/1 (${index}).jpg`}
               
                alt={`Image ${index}`}
                className="  rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
