"use client";

import React, { useState } from "react";
import data from "@/components/Career/data.json";

export default function Career() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [careersPerPage] = useState(4); // Number of careers per page

  const filteredCareers = data.careers.filter((career) =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCareer = currentPage * careersPerPage;
  const indexOfFirstCareer = indexOfLastCareer - careersPerPage;
  const currentCareers = filteredCareers.slice(
    indexOfFirstCareer,
    indexOfLastCareer
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-cover h-96 bg-center bg-[url('/HomeBg.svg')]">
        <h1 className="font-extrabold text-5xl text-black text-center py-8">
          Careers
        </h1>
        <div className="flex justify-center">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 px-6 mb-4 border border-gray-300 rounded-md bg-white shadow-lg"
          />
        </div>
        <p className="font-bold text-4xl p-5 text-black text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-600 from-teal-400">
            Work Together&nbsp;
          </span>
          to Make Change ..!
        </p>
      </div>

      <div className="flex flex-col gap-10 rounded-md bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer">
        <h1 className="font-extrabold text-5xl text-black text-center py-8">
          Job Openings
        </h1>
        {currentCareers.map((career, index) => {
          return (
            <div className="flex flex-col justify-between border-solid border-2 border-orange-100 p-10 shadow-2xl ">
              <div className="flex justify-between items-center sm:flex justify-between items-center flex-wrap ">
                <div className="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
                  <svg
                    className="w-7 h-7 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <span>{career.title}</span>
                </div>
                <div className="flex gap-5 ">
                  <span className="bg-teal-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl max-w-full">
                    {" "}
                    Remote{" "}
                  </span>
                  <span className="bg-teal-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl ">
                    Full Time{" "}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500 flex space-x-1 items-center">
                <span className="flex my-5 flex-wrap">
                  {career.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-teal-400 uppercase text-white text-sm px-4 py-1 font-bold shadow-xl"
                    >
                      {skill}
                    </div>
                  ))}
                </span>
              </div>
              <div className="text-sm text-gray-500 flex space-x-1 items-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{career.description}</span>
              </div>
              <div>
                <div className="mt-5">
                  <button className="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {[
          ...Array(Math.ceil(filteredCareers.length / careersPerPage)).keys(),
        ].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`mx-2 px-3 py-1 border rounded-md ${
              currentPage === number + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
