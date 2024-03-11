"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Aos from "aos";
import "aos/dist/aos.css";

const EventSectionpart = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const router = useRouter();
  const handleRoute = (category) => {
    router.push(`/event/${category}`);
  };

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  const cardDetails = [
    // ... your card details remain unchanged
    {
      id: 1,
      image: "/events/cricket/_DSC0025.JPG",
      title: "Cricket",
      description: "Description for Different Card 1",
    },
    {
      id: 2,
      image: "/events/kabbadi/_DSC0857.JPG",
      title: "Kabbadi",
      description: "Description for Different Card 2",
    },
    {
      id: 3,
      image: "/events/chair_race/_DSC0941.JPG",
      title: "Chair race",
      description: "Description for Different Card 2",
    },
    {
      id: 4,
      image: "/events/match_post/_DSC0599.JPG",
      title: "March past",
      description: "Description for Different Card 2",
    },
    {
      id: 5,
      image: "/events/sac_race/_DSC0934.JPG",
      title: "Sac race",
      description: "Description for Different Card 2",
    },
    {
      id: 6,
      image: "/events/price_distrubution/_DSC1386.JPG",
      title: "Price destribution",
      description: "Description for Different Card 2",
    },
  ];

  const ourStudent = [
    // ... your card details remain unchanged
    {
      id: 1,
      image: "",
      title: "Counseling",
      description:
        "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    },
    {
      id: 2,
      image: "",
      title: "Learning Support",
      description:
        "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    },
    {
      id: 3,
      image: "",
      title: "Parent-Teacher Collaboration",
      description:
        "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child development.",
    },
  ];

  return (
    <>
      <section className="">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-20 bg-white rounded-xl shadow flex flex-col md:flex-row justify-evenly md:justify-evenly items-center md:items-center gap-6 md:gap-12 relative ">
          <div className="absolute top-0 left-0">
            <Image
              alt="image"
              src={"/Abstract Design.svg"}
              width={100}
              height={200}
            />
          </div>

          <div className="items-center md:items-start text-center md:text-left">
            <div className="w-64">
              <div className="text-zinc-800 px-4 py-2 bg-white rounded-lg border-2 border-neutral-800 text-lg max-w-7 font-medium">
                Enriching Student Life
              </div>
            </div>

            <div className="text-4xl lg:text-5xl font-bold mt-4 md:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500 bg-clip-text">
              Embracing Learning with Discovery and Joy
            </div>
          </div>

          <div className="text-gray-800 lg:text-lg font-medium max-w-xl mt-6 md:mt-0">
            Welcome to our Student Life page, where the magic of childhood comes
            alive through the enriching experiences and adventures that our
            students embark on each day. At our kindergarten school, we believe
            that learning goes beyond textbooks, and we strive to create a
            holistic and engaging environment that nurtures every aspect of a
            child's development.
          </div>
        </div>
      </section>

      <section>
        <div className="p-8 md:p-12 lg:p-16 text-center ">
          {/* <h1 className='border-2 border-black rounded-lg p-2 text-center'>Our features</h1> */}
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
            Events and Celebration
          </h1>
          <p className="text-lg md:text-xl lg:text-xl text-gray-600 mx-auto max-w-2xl">
            At Little Learners Academy, we celebrate every milestone and create
            cherished memories for our students. Throughout the year, we host a
            variety of events and celebrations that bring the entire school
            community together. Some of our memorable events include
          </p>
        </div>
      </section>

      <div className="flex flex-wrap justify-center items-center gap-0 sm:gap-10">
        {cardDetails.map((card, i) => (
          <div
            data-aos={i % 2 !== 0 ? "fade-right" : "fade-up"}
            onClick={() => handleRoute(card.title)}
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex flex-col justify-center items-center max-w-sm mx-auto my-8 transition-transform transform-gpu hover:scale-105"
          >
            <div
              style={{ backgroundImage: `url(${card.image})` }}
              className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            ></div>
            <div className="w-[300px] md:w-[370px] bg-transparent -mt-10 shadow-lg rounded-lg overflow-hidden">
              {/* <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-950">{card.title}</div> */}
              <div
                className="flex items-center justify-between py-2 px-3"
                style={{ backgroundColor: "rgb(211, 252, 210)" }}
              >
                <h1 className="text-teal-700  ">{card.title}</h1>
                <button
                  className="bg-gray-900 text-xs text-white px-2 py-1 font-semibold rounded-md uppercase hover:bg-gray-700"
                  onClick={() => handleRoute(card.title)}
                >
                  View more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section>
        <div className="p-8 md:p-12 lg:p-16 text-center ">
          {/* <h1 className='border-2 border-black rounded-lg p-2 text-center'>Our features</h1> */}
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
            Student Support
          </h1>
          <p className="text-lg md:text-xl lg:text-xl text-gray-600">
            At Little Learners Academy, we are committed to providing a
            supportive and nurturing environment that meets the unique needs of
            each student. Our student support services include
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 my-5">
          {ourStudent.map((card, index) => (
            <div key={card.id}>
              <Card
                // imageUrl={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EventSectionpart;
