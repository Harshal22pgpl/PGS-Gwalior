import React from "react";
import CulturalCard from "./CulturalCard";

export default function CulturalEvent() {
  return (
    <div className=" w-11/12 mx-auto p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {[
           2, 3, 4, 5, 6, 7, 8, 1,9, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ].map((index) => (
          <CulturalCard img={index} />
        ))}
      </div>
    </div>
  );
}
