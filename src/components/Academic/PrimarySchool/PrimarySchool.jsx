import React from "react";
import Image from "next/image";

export default function PrimarySchool() {
  return (
    <>
      <div
        className="w-11/12 mx-auto h-80 flex justify-center items-center rounded-lg bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/04/58/06/81/240_F_458068134_n2xneCba5UGNgaVch1VVVPoS9g2KEjmy.jpg')",
        }}
      >
        <h1 className=" text-5xl text-teal-600 font-extrabold dark:text-white text-center p-5">
          Tarang
          <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
            Phase
          </small>
        </h1>
      </div>
      <section className="w-11/12 mx-auto flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-center font-semibold mb-4">
            {" "}
            Welcome to Tarang phase at Pratibha global school
          </h2>
          <h2 className="text-lg">About Our Tarang Phase Program :</h2>
          <p className="text-lg leading-relaxed">
            Overview: At Pratibha global school, we take pride in providing a
            vibrant and enriching educational experience for our students. Our
            Primary School program is designed to lay a solid foundation for
            academic excellence, personal development, and lifelong learning.
          </p>
        </div>
      </section>
      <ul className=" lg:w-3/4 md:3/4 mx-auto list-disc p-10 ">
        <li className="text-lg  p-4">
          <span className="font-bold  ">Comprehensive Curriculum: </span>
          Our primary school curriculum is carefully crafted to meet academic
          standards while fostering a love for learning. We provide a
          well-rounded education that includes core subjects, extracurricular
          activities, and character development.{" "}
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold ">Experienced and Dedicated Faculty:</span>
          Pratibha global school is home to a team of experienced and passionate
          educators who are committed to nurturing the intellectual, social, and
          emotional growth of every student. Our teachers create a supportive
          and inspiring learning environment.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold">Holistic Development: </span>Beyond
          academics, we prioritize the holistic development of our students. Our
          curriculum integrates activities that promote creativity, critical
          thinking, leadership skills, and a sense of responsibility.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold">Modern Facilities:</span>Pratibha global
          school is equipped with modern facilities to enhance the learning
          experience. Our classrooms are technologically advanced, and we
          provide spaces for sports, arts, and extracurricular activities.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold : ">Safe and Inclusive Environment: </span>
          The safety and well-being of our students are paramount. Pratibha
          global school fosters an inclusive and respectful atmosphere where
          diversity is celebrated, and every student feels valued and supported.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold : ">Parental Involvement:</span>We believe
          in the power of a strong partnership between school and parents.
          Regular communication, parent-teacher conferences, and involvement in
          school activities are encouraged to ensure the success and happiness
          of our students.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold : ">Enrichment Programs: </span>Pratibha
          global school offers a range of enrichment programs to cater to
          diverse interests. From science and technology to arts and sports, we
          provide opportunities for students to explore and develop their
          talents.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold : ">Parental Involvement: </span>Pratibha
          global school encourages active parental involvement. We believe in
          fostering a strong partnership between teachers and parents to support
          each child's educational journey.
        </li>
      </ul>
    </>
  );
}
