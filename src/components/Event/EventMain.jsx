"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card/Card";
import Image from "next/image";
import HeadingText from "@/components/HeadingText/heading";
import CardSvgParagraph from "@/components/CardSvgParagraph/BenefitCard";
import EventSection from "./EventSection";
import CulturalEvent from "../CulturalEvent/CulturalEvent";

const EventMain = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/Gwal_Img/1 (6).jpg",
    "/Gwal_Img/1 (12).jpg",
    "/Gwal_Img/1 (1).jpg",
    "/Gwal_Img/1 (15).jpg",
    
    // Add more images as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  const cardDetails = [
    // ... your card details remain unchanged
    {
      id: 1,
      image: "/events/_DSC0077.JPG",
      title: "Different Card 1",
      description: "Description for Different Card 1",
    },
    {
      id: 2,
      image: "/events/_DSC0100.JPG",
      title: "Different Card 2",
      description: "Description for Different Card 2",
    },
    {
      id: 3,
      image: "/events/_DSC0444.JPG",
      title: "Different Card 2",
      description: "Description for Different Card 2",
    },
    {
      id: 4,
      image: "/events/_DSC0583.JPG",
      title: "Different Card 2",
      description: "Description for Different Card 2",
    },
    {
      id: 5,
      image: "/events/_DSC0752.JPG",
      title: "Different Card 2",
      description: "Description for Different Card 2",
    },
    {
      id: 6,
      image: "/events/_DSC1401.JPG",
      title: "Different Card 2",
      description: "Description for Different Card 2",
    },
  ];

  const ourStudent = [
    // ... your card details remain unchanged
    {
      id: 1,
      image: "/puzzle.png",
      title: "Counseling",
      description:
        "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    },
    {
      id: 2,
      image: "/puzzle.png",
      title: "Learning Support",
      description:
        "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    },
    {
      id: 3,
      image: "/puzzle.png",
      title: "Parent-Teacher Collaboration",
      description:
        "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child development.",
    },
  ];

  const activityCard = [
    {
      title: "STEM Education Program",
      description:
        "Our program emphasizes Science, Technology, Engineering, and Mathematics (STEM) education, fostering critical thinking and problem-solving skills.",
      bgColor: "bg-blue-400",
      textColor: "text-white",
    },
    {
      title: "Creative Arts Workshop",
      description:
        "Our workshop encourages exploration in various creative arts such as painting, sculpting, music, and drama, fostering self-expression and imagination.",
      bgColor: "bg-yellow-300",
      textColor: "text-black",
    },
    {
      title: "STEM Education Program",
      description:
        "Our program emphasizes Science, Technology, Engineering, and Mathematics (STEM) education, fostering critical thinking and problem-solving skills.",
      bgColor: "bg-blue-400",
      textColor: "text-white",
    },
    {
      title: "Creative Arts Workshop",
      description:
        "Our workshop encourages exploration in various creative arts such as painting, sculpting, music, and drama, fostering self-expression and imagination.",
      bgColor: "bg-yellow-300",
      textColor: "text-black",
    },
    {
      title: "STEM Education Program",
      description:
        "Our program emphasizes Science, Technology, Engineering, and Mathematics (STEM) education, fostering critical thinking and problem-solving skills.",
      bgColor: "bg-blue-400",
      textColor: "text-white",
    },
    {
      title: "Creative Arts Workshop",
      description:
        "Our workshop encourages exploration in various creative arts such as painting, sculpting, music, and drama, fostering self-expression and imagination.",
      bgColor: "bg-yellow-300",
      textColor: "text-black",
    },
    // Add more card details as needed
  ];

  return (
    <>
      <div
        className="w-full bg-white py-10 bg-cover "
        style={{ backgroundImage: "url('/Rect Light.svg')" }}
      >
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0 mx-auto">
          <div className="flex flex-col justify-start gap-4 text-center">
            <p className="py-2 text-2xl text-[#008080] font-medium">
              Enriching Student Life
            </p>
            <h1 className="md:leading-[72px] py-2 md:text-6xl text-4xl font-semibold">
              Learning <span className="text-[#008080]">with</span>{" "}
              <span className="text-[#008080]">Discovery and Joy </span>
            </h1>
            <p className="py-2 text-lg text-center text-gray-600">
              Welcome to our Student Life page, where the magic of childhood
              comes alive through the enriching experiences and adventures that
              our students embark on each day. At our kindergarten school, we
              believe that learning goes beyond textbooks, and we strive to
              create a holistic and engaging environment that nurtures every
              aspect of a child's development.
            </p>
          </div>
          <div className="relative pr-2">
            <img
              src={images[currentSlide]}
              className="md:order-last order-first rounded-full max-h-full"
            />
          </div>
        </div>
      </div>

      <section>
        <div className="p-8 md:p-12 lg:p-16 text-center ">
          {/* <h1 className='border-2 border-black rounded-lg p-2 text-center'>Our features</h1> */}
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
            Cultural Events
          </h1>
          <p className="text-lg md:text-xl lg:text-xl text-gray-600 mx-auto max-w-2xl">
          Cultural events at schools are an integral part of the educational experience, offering students opportunities to explore and celebrate diversity, creativity, and tradition. These events foster a sense of community, promote understanding of different cultures, and provide platforms for students to showcase their talents and interests. Here's some content about cultural events at school
          </p>
          
        </div>
        <CulturalEvent/>
        
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
      <EventSection />

      <HeadingText
        // title="Our Teachers With Expertise"
        subtitle="Our Team Members"
        content="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
      />

      <div className="md:w-full lg:w-11/12 am:w-full mt-8 grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-10 mx-auto">
        {[
          {
            svgLink: "/right-arrow.svg",
            heading: "Holistic Learning Approach",
            headingDescription:
              "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
          },
          {
            svgLink: "/right-arrow.svg",
            heading: "Experienced Educators",
            headingDescription:
              "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
          },
          {
            svgLink: "/right-arrow.svg",
            heading: "Nurturing Environment",
            headingDescription:
              "We prioritize safety and provide a warm and caring atmosphere for every child.",
          },
          {
            svgLink: "/right-arrow.svg",
            heading: "Play-Based Learning",
            headingDescription:
              "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
          },
          {
            svgLink: "/right-arrow.svg",
            heading: "Individualized Attention",
            headingDescription:
              "Our small class sizes enable personalized attention, catering to each child's unique needs.",
          },
          {
            svgLink: "/right-arrow.svg",
            heading: "Parent Involvement",
            headingDescription:
              "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
          },
        ].map((val) => (
          <CardSvgParagraph cardDetails={val} />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto my-5">
          {ourStudent.map((card, index) => (
            <div
              key={card.id}
              className="mx-auto shadow-[5px_5px_0px_0px_rgba(76,175,80)] rounded-lg "
            >
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

export default EventMain;
