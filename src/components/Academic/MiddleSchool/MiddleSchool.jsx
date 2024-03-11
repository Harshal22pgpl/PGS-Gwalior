import React from "react";
import Image from "next/image";

export default function MiddleSchool() {
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
          Pratibha Phase
          <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
            (Middle School)
          </small>
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center font-semibold mb-4 uppercase my-8">
          Middle School Pratibha
        </h2>
        <section className="w-3/4 mx-auto flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-left w-3/4 text-2xl my-2 font-semibold">
              Middle School (Pratibha Stage of Child development: class 6-8)
            </h3>

            <p className="text-md leading-relaxed">
              In the dynamic stage of child development spanning classes 6-8,
              often referred to as the "Pratibha Stage," children undergo a
              multifaceted transformation across various domains. Physically,
              this period witnesses the onset of puberty, introducing
              significant changes such as growth spurts and the development of
              secondary sexual characteristics. Concurrently, cognitive
              abilities blossom, enabling students to engage in abstract
              thinking, problem-solving, and critical reasoning. As academic
              demands intensify, middle schoolers embark on a journey of subject
              specialization, delving deeper into specific disciplines.
            </p>
          </div>
        </section>
        <ul className=" lg:w-3/4 md:3/4 mx-auto list-disc p-6 ">
          <li className="text-lg  p-4">
            <span className="font-bold  ">Physical Growth :</span>
            Introduction to puberty, growth spurts, and improved motor skills.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold ">Cognitive Advancement :</span>
            Development of abstract thinking, problem-solving, and critical
            reasoning skills.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold">Subject Specialization : </span>Exposure
            to specialized subjects for deeper academic exploration.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold">Social Skills: </span>Formation of peer
            relationships, enhanced communication, and conflict resolution
            skills.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold : ">Community Engagement : </span>
            Development of personal and social responsibility through community
            involvement.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold : ">Career Exploration : </span>{" "}
            Introduction to different career paths and extracurricular
            activities.
          </li>
          <li className="text-lg  p-4">
            <span className="font-bold : ">Technology Integration : </span>{" "}
            Cultivation of digital literacy skills for the modern,
            technology-driven world.
          </li>
        </ul>
      </div>
    </>
  );
}
