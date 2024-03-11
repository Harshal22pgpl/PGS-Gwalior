import Image from "next/image";
import React from "react";

export default function AboutMessageCard({
  img,
  heading,
  content,
  name,
  post,
  place,
}) {
  return (
    <div className="w-full lg:w-10/12  bg-white bg-opacity-60 flex flex-col lg:flex-row  justify-between items-center p-4 mt-5">
      <div className="lg:w-3/12  w-full flex justify-center items-center py-2 ">
        <div className="lg:w-9/12  w-11/12 flex justify-center items-center">
          <Image
            alt="message"
            src={img}
            width="400"
            height="550"
            className="rounded-xl shadow-[3px_3px_2px_2px_#D8D8D8] border-2 border-teal-600"
          />
        </div>
      </div>
      <div className="lg:w-9/12  w-full lg:pr-6 lg:pl-2 md:pl-2 p-0 flex flex-col items-start justify-start ">
        <h1 className="text-tteal text-lg font-semibold lg:py-2 lg:pr-5 p-2">
          {heading}
        </h1>
        <p className=" lg:pr-5 p-2">{content}</p>
        <span className="p-2 mt-2">
          <h1 className="font-bold">{name}</h1>
          <h2>{post}</h2>
          <h2>Pratibha Global School</h2>
          <h3>{place}</h3>
        </span>
      </div>
    </div>
  );
}
