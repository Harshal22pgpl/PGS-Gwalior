import React from "react";
import Image from "next/image";

function Grid({ items }) {
  return (
    <div className="bg-rgba(146, 150, 255, .38) flex flex-wrap gap-6 mx-auto justify-center">
      {items.map((item, index) => (
        <figure
          key={index}
          className="relative flex-shrink-0 w-full max-w-sm cursor-pointer"
        >
          <a href="#">
            <Image
              className="w-full h-full rounded-lg"
              src={item.image}
              width={200}
              height={200}
              alt="image description"
            />
          </a>
          <figcaption className="absolute px-16 text-lg text-white bottom-6">
            <h1 className="text-4xl font-bold">{item.title}</h1>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Grid;
