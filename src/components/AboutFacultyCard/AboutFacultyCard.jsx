import React from "react";
import Image from "next/image";

export default function AboutFacultyCard({ img, name, post }) {
  return (
    <div className="w-full p-2 group mb-3">
      <div className="w-11/12 flex flex-col mx-auto  ">
        <div className="w-full overflow-hidden rounded-xl border-2 border-teal-600 shadow-[0_20px_20px_rgba(0,_130,_9,_0.7)]">
          <img
            src={img}
            alt="faculty"
            className="w-full group-hover:transform group-hover:rotate-6 group-hover:duration-300 group-hover:scale-110 "
          />
        </div>
        <div className="group ">
          <h2 className="text-center font-bold group-hover:font-extrabold group-hover:text-lg duration-300">
            {name}
          </h2>
          <h3 className="text-center font-semibold">{post}</h3>
        </div>
      </div>
    </div>
  );
}
