import React from "react";
import { useRouter } from "next/navigation";

export default function AdmissionCard({
  heading,
  paragraph,
  phase,
  classNAme,
  phasePara,
  btnText,
  link,
}) {
  const router = useRouter();
  return (
    <div className="w-72 mx-auto rounded-3xl  border flex flex-col justify-center px-4 py-10 hover:bg-gradient-to-r from-teal-500 to-emerald-100 group">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-600 font-bold group-hover:text-white">
          {heading}
        </h1>
        <h2 className="text-center text-xs my-2 group-hover:text-white">
          ({paragraph})
        </h2>
      </div>
      <div className="my-4 flex flex-col justify-center items-center">
        <h1 className="my-1 group-hover:text-white">{phase}</h1>
        <h1 className="my-1 group-hover:text-white">{phasePara}</h1>
        <h1 className="my-1 group-hover:text-white">{classNAme}</h1>
      </div>
      <button
        className="my-4 mx-auto rounded-2xl bg-gray-300 px-4 py-2 font-bold hover:bg-white hover:text-teal-500"
        onClick={() => {
          router.push(link);
        }}
      >
        {btnText}
      </button>
    </div>
  );
}
