import React from "react";
import Image from "next/image";

export default function Kindergarten() {
  return (
    <>
      <div
        className="w-11/12 mx-auto h-80 flex justify-center items-center rounded-lg bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/02/40/04/23/240_F_240042313_ZHrMKnfY96CD454hyfsPighJ9ZehQgSp.jpg')",
        }}
      >
        <h1 className=" text-5xl text-teal-600 font-extrabold dark:text-white text-center p-5">
          Umang
          <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
            Phase
          </small>
        </h1>
      </div>
      <section className="w-11/12 mx-auto flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-center font-semibold mb-4">
            {" "}
            Welcome to Umang phase at Pratibha global school
          </h2>
          <h2 className="text-lg">About Our Umang Phase Program</h2>
          <p className="text-lg leading-relaxed">
            Overview: At Pratibha global school, we believe in providing a
            nurturing and stimulating environment for our youngest learners. Our
            kindergarten program is designed to foster holistic development,
            preparing children for a lifetime of curiosity and learning.
          </p>
        </div>
      </section>
      <ul className=" lg:w-3/4 md:3/4 mx-auto list-disc p-10 ">
        <li className="text-lg  p-4">
          <span className="font-bold  ">Play-Based Learning: </span>
          Kindergarten at Pratibha global school emphasizes play-based learning
          to encourage creativity and social interaction. Our activities are
          carefully crafted to be both educational and enjoyable, promoting a
          love for learning.{" "}
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold ">Socialization: </span>
          Our dedicated teachers focus on developing essential social skills.
          Children learn to collaborate, share, and build positive relationships
          with their peers, fostering a sense of community within the classroom.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold">Academic Foundations: </span>While
          prioritizing holistic growth, we introduce foundational academic
          concepts. Early literacy and numeracy activities lay the groundwork
          for future academic success.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold">Creativity and Expressive Arts: </span>
          Pratibha global school values creativity and self-expression. Our
          kindergarten program includes various art, music, and creative
          activities to inspire imagination and artistic exploration.{" "}
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold : ">Routine and Structure: </span>A
          well-balanced routine provides structure and predictability. Our daily
          schedule includes a mix of learning activities, playtime, snacks, and
          rest periods.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold : ">Physical Development:</span>Outdoor
          play and physical activities contribute to the development of gross
          and fine motor skills, coordination, and spatial awareness.
        </li>
        <li className="text-lg  p-4">
          <span className="font-bold : ">Individualized Learning: </span>We
          celebrate each child's uniqueness. Our teachers recognize and support
          diverse learning styles, ensuring that every child feels valued and
          engaged.
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
