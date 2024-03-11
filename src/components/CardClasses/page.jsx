import React from "react";

export default function page() {
  return (
    <>
      <div className="relative flex flex-col mt-10 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-90">
        <div className="relative h-50 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src="https://img.freepik.com/free-photo/row-multiethnic-elementary-students-reading-book-classroom-vintage-effect-style-pictures_1253-1132.jpg"
            alt="card-image"
          />
        </div>
        <div className="p-4">
          <h5 className="block mb-1 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Claas
          </h5>
          <h5 className="block mb-1 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            math || English || Hindi
          </h5>
        </div>
        <div className="p-4 pt-0">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Download Syllabus
          </button>
        </div>
      </div>
    </>
  );
}
