import React from "react";
import Image from "next/image";

export default function AcademicFeatureCard({ cardDetails }) {
  if (!cardDetails) {
    return <div> Error: Details not fetch</div>;
  }

  const { heading, paragraph, svgLink } = cardDetails;
  return (
    <>
      <div
        className="max-w-sm lg:h-64 p-4 bg-white border border-black rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: "url('/tealBg.svg')" }}
      >
        <Image
          className="inline p-3"
          src={svgLink}
          alt="image does not load"
          height={48}
          width={48}
        />
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black-900 dark:text-white">
            {heading}
          </h5>
        </a>
        <p className="w-full mb-2 font-normal text-gray-500 dark:text-gray-400">
          {paragraph}
        </p>
      </div>
    </>
  );
}
