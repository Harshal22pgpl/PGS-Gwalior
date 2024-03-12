import React from "react";

export default function CulturalCard({ img }) {
  return <div className="w-full  border-2 border-gray-900 overflow-hidden rounded-2xl">
    <div className="h-72 overflow-hidden">

<img className="w-full h-full" src={`/Gwal_Img/1 (${img}).jpg`} alt={`${img}`} />
    </div>
  </div>;
}