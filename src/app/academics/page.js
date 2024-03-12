"use client";
import React from "react";
import AcademicStudentCard from "@/components/Academic/AcademicStudentCard/AcademicStudentCard";
import AcademicRoomsCard from "@/components/Academic/AcademicRoomsCard/AcademicRoomCard";
import AcademicFeatureCard from "@/components/Academic/AcademicFeatureCard/AcademicFeatureCard";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function page() {
  const router = useRouter();
  return (
    <>
      <main className=" flex flex-col justify-center items-center mt-5">
        <div
          className="w-11/12 flex justify-center  p-5 rounded-3xl sm:border-2 sm:1/2 mt-8"
          style={{
            backgroundImage: "url('/bgteal.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full p-4 relative">
            <h1 className="text-4xl text-black font-bold  mb-10 text-shadow-md">
              Nurturing Young Minds For Success
            </h1>
            <h6 className="text-1xl text-black">
              Welcome to our Academics page, where we take pride in providing a
              comprehensive and stimulating educational experience for your
              child. Our kindergarten school's academic program is thoughtfully
              designed to foster a love for learning while building a strong
              foundation of essential skills and knowledge. From language arts
              and mathematics to science and social studies, our curriculum is
              carefully crafted to spark curiosity and encourage active
              exploration.
            </h6>

            <div className="flex space-x-4 mt-20">
              <button
                className="bg-white hover:bg-gray-300 text-teal-400 font-bold py-2 px-4 rounded "
                onClick={() => {
                  router.push("/admissions");
                }}
              >
                Admission Form
              </button>
              <button
                className="bg-white hover:bg-gray-300 text-teal-400  font-bold py-2 px-4 rounded "
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="min-h-100 p-10 flex justify-center items-center flex-col mt-12">
        <h1
          className=" text-white text-2xl font-solid flex justify-center   bg-teal-400 rounded-xl p-2
           "
        >
          Our Feature
        </h1>
        <h2
          className="md:text-5xl lg:text-5xl sm:text-5xl font-black flex justify-center p-15 pb-2
          mt-6 "
        >
          Our Special Feature
        </h2>
        <p className="md:w-3/4 lg:w-3/4  sm:w-full flex justify-center font-dancing-script text-center mt-3">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6 p-10">
          {[
            {
              svgLink: "/feature.svg",
              heading: "Thematic Learning",
              paragraph:
                "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant",
            },
            {
              svgLink: "/feature.svg",
              heading: "STEAM Education",
              paragraph:
                "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills",
            },
            {
              svgLink: "/feature.svg",
              heading: "Language Immersion",
              paragraph:
                "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness",
            },
            {
              svgLink: "/feature.svg",
              heading: "Art and Creativity",
              paragraph:
                "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms",
            },
            {
              svgLink: "/feature.svg",
              heading: "Outdoor Education",
              paragraph:
                "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking",
            },
            {
              svgLink: "/feature.svg",
              heading: " Play-Based Learning",
              paragraph:
                "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking",
            },
          ].map((val) => (
            <AcademicFeatureCard cardDetails={val} />
          ))}
        </div>
      </div>

      <div className="min-h-100 p-10 flex justify-center items-center flex-col ">
        <h1
          className=" text-white text-2xl font-solid flex justify-center   bg-teal-400 rounded-xl p-2
           "
        >
          Our Feature
        </h1>
        <h2
          className="md:text-5xl lg:text-5xl sm:text-5xl text-center   font-black flex justify-center p-15 pb-2
          mt-6 "
        >
          What Our Student Learn...
        </h2>
        <p className="md:w-3/4 lg:w-3/4  sm:w-full  flex justify-center font-dancing-script text-center mt-3">
          At Little Learners Academy, we strive to cultivate a love for learning
          and equip children with essential skills for their future success. Our
          academic programs cover a wide range of subjects, allowing students to
          develop a strong foundation and discover their interests. Some key
          areas of learning include
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6 lg:p-10 md:p-10 sm:p-10 p-2">
          {[
            {
              image: "/labsImages/math.jpg",
              headings: "Mathematics",
              paragraph:
                "Number sense, basic operations, problem-solving, and logic.",
            },
            {
              image: "/labsImages/science.JPG",
              headings: "Science",
              paragraph:
                "Exploring the natural world through hands-on experiments and investigations.",
            },
            {
              image: "/labsImages/physical.JPG",
              headings: "Physical Education",
              paragraph:
                "Promoting physical fitness, coordination, and teamwork.",
            },
            {
              image: "/Gwal_Img/1 (5).jpg",
              headings: "Art and Crafts",
              paragraph:
                "Encouraging creativity through various art forms and crafts.",
            },
            {
              image: "/Gwal_Img/1 (4).jpg",
              headings: "Language Art",
              paragraph:
                "Reading, writing, storytelling, and communication skills.",
            },
            {
              image: "/Gwal_Img/1 (1).jpg",
              headings: "Social Studeies",
              paragraph:
                "Cultivating an understanding of diverse cultures and communities.",
            },
          ].map((val) => (
            <AcademicStudentCard cardDetails={val} />
          ))}
        </div>
      </div>

      <div className="min-h-100 p-10 flex justify-center items-center flex-col mt-4">
        <h1
          className=" text-white text-2xl font-solid flex justify-center   bg-teal-400 rounded-xl p-2
           "
        >
          Our Feature
        </h1>
        <h2
          className="md:text-5xl lg:text-5xl sm:text-5xl font-black flex justify-center p-15 pb-2
          mt-4 "
        >
          Our Rooms Gallary
        </h2>
        <p className="md:w-3/4 lg:w-3/4  sm:w-full flex justify-center font-dancing-script text-center mt-3">
          Step into our Gallery and immerse yourself in a visual journey of
          cherished moments and unforgettable experiences at our kindergarten
          school.
        </p>

        <div className="flex flex-col w-11/12 justify-center items-center">
          {[
            {
              heading: "Classroom",
              paragraph:
                "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
              link1: "/classImages/class1.JPG",
              link2: "/classImages/class2.jpg",
              link3: "/classImages/class3.jpg",
              link4: "/classImages/class4.jpg",
            },
            {
              heading: "Science Lab",
              paragraph:
                "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
              link1: "/classImages/science1.jpg",
              link2: "/classImages/science2.jpg",
              link3: "/classImages/science3.jpg",
              link4: "/classImages/science1.jpg",
            },
            {
              heading: "Garden and Nature",
              paragraph:
                "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
              link1: "/classImages/garden.JPG",
              link2: "/classImages/garden1.JPG",
              link3: "/classImages/garden1.JPG",
              link4: "/classImages/garden1.JPG",
            },
          ].map((val) => (
            <AcademicRoomsCard cardDetails={val} />
          ))}
        </div>
      </div>
    </>
  );
}
