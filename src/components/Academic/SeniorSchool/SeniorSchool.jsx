import React from "react";
import Image from "next/image";

export default function SeniorSchool() {
  return (
    <>
      <div
        className="w-11/12 mx-auto h-80 flex justify-center items-center rounded-lg bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/03/16/21/62/360_F_316216251_JxfJQLl3z98zpGQTK7bsdUwhilPG3vjD.jpg')",
        }}
      >
        <h1 className=" text-5xl text-teal-600 font-extrabold dark:text-white text-center p-5">
          Tejas Phase
          <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
            (Senior School)
          </small>
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center font-semibold mb-4 uppercase my-8">
          Senior School Tejas
        </h2>
        <section className="w-3/4 mx-auto flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-left w-3/4 text-2xl my-2 font-semibold">
              Senior School (Tejas Stage of child development: Class 9-12)
            </h3>

            <p className="text-md leading-relaxed">
              Middle school (Pratibha stage) is pivotal for holistic child
              development, fostering cognitive, social, and emotional skills. It
              lays the foundation for future career exploration and academic
              success.
            </p>
          </div>
        </section>
        <ul className=" lg:w-3/4 md:3/4 mx-auto list-disc p-6 ">
          <li className="text-lg  p-4">
            <span className="font-bold  ">Physical Development:</span>
            Puberty onset, growth spurts, and improved motor skills.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold ">Identity Exploration :</span>
            Discovering personal identity and interests for boosted self-esteem.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold">Subject Specialization : </span>Exposure
            to specialized subjects for deeper academic exploration.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold">Academic Exploration : </span>{" "}
            Introduction to subject specialization for in-depth learning.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold : ">Responsibility Building : </span>
            Development of personal and social responsibility through community
            engagement.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold : ">Career Awareness : </span> Exposure
            to various career paths and extracurricular activities.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold : ">Tech Literacy : </span> Integration
            of essential digital skills for a tech-driven world.
          </li>
        </ul>
      </div>
    </>
  );
}
