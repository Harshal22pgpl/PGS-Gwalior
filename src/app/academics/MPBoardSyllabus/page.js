import React from "react";

import CardClasses from "@/components/CardClasses/page";

import Image from "next/image";

export default function page() {
  return (
    <>
      <main
        className=" w-full
              flex justify-center p-5 bg-white"
      >
        <div
          className="w-11/12 bg-black rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('/CardClass.svg')" }}
        >
          <h1 className="text-4xl border-2  mt-20 mb-4 font-bold bg-gradient-to-r from-sky-300 to-blue-600 bg-clip-text text-transparent text-center text-white pt-5">
            MP Board Syllabus 2024-25
          </h1>

          <div className="grid grid-cols-3 gap-6 p-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => (
              <CardClasses />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
