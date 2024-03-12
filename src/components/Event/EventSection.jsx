"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Aos from "aos";
import "aos/dist/aos.css";

const EventSection = () => {
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
      image:  "/events/sac_race/_DSC0934.JPG",
      title: "Price destribution",
      description: "Description for Different Card 2",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-0 sm:gap-10 rounded-md">
        {cardDetails.map((card, i) => (
          <div
            data-aos={i % 2 !== 0 ? "fade-right" : "fade-up"}
            onClick={() => handleRoute(card.title)}
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex flex-col justify-center items-center max-w-sm mx-auto my-8 transition-transform transform-gpu hover:scale-105"
          >
            <div
              style={{ backgroundImage: `url(${card.image})` }}
              className="bg-gray-300 h-64 w-full rounded-md shadow-md bg-cover bg-center"
            ></div>
            <div className="w-[300px] md:w-[370px] bg-transparent -mt-10 shadow-lg rounded-md overflow-hidden">
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
    </>
  );
};

export default EventSection;
