import React from "react";

export default function AcademicStudentCard({ cardDetails }) {
  if (!cardDetails) {
    return <div> Error: Details not fetch</div>;
  }
  const { headings, paragraph, image } = cardDetails;

  return (
    <>
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl border-teal-400 border-2 bg-clip-border bg-white text-gray-700 ">
        <div className="relative lg:mx-4 mt-4 mx-2 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img src={image} alt="Student learning" />
        </div>

        <div className=" p-6 mb-3 flex flex-col">
          <h5 className="text-2xl font-bold text-black border-b-2 mb-2">
            {headings}
          </h5>
          <p className="text-black">{paragraph}</p>
        </div>
      </div>
    </>
  );
}
