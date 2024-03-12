"use client";
import BackgroundLayer from "@/components/Backgroud/BackgroudLayer"; // Import necessary components
import Grid from "@/components/Grid/page";
import { useState, useEffect } from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import HeadingText from "@/components/HeadingText/heading";
import Link from "next/link";
import ImgSlider from "@/components/ImgSlider/page";
import AboutManagement from "../AboutManagement/AboutManagement";

// Define the About component
const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/Gwal_Img/1 (15).jpg",
    "/Gwal_Img/1 (13).jpg",
    "/Gwal_Img/1 (10).jpg",
    "/Gwal_Img/1 (16).jpg",
    "/Gwal_Img/1 (2).jpg",
    "/Gwal_Img/1 (11).jpg",

    // Add more images as needed
  ];

  const items = [
    { image: "/students/_DSC1038.JPG", title: "COMPUTER" },
    { image: "/students/_DSC1121.JPG", title: "CHEMISTRY" },
    { image: "/students/_DSC1063.JPG", title: "ELECTRICLES" },
    { image: "/students/_DSC1127.JPG", title: "BIO LAB" },
    { image: "/students/_DSC1132.JPG", title: "HORTICULTURE" },
    { image: "/students/_DSC1138.JPG", title: "PHYSICS" },
    // Add more items as needed
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

  const [cards, setCards] = useState([
    {
      name: "Ms.Sapna Jain",
      image: "/imagep.png",
      qualification: "Bachelor's Degree in Early Childhood Education",
      description:
        "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable.",
    },
    {
      name: "Ms. Saloni Bhadoriya",
      image: "/Testimonials/jpeg-optimizer_image (4)-min.png",
      qualification: "Bachelor's Degree in Early Childhood Education",
      description:
        "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable.",
    },
    {
      name: "Ms. Jayshree Pathak ",
      image: "/Testimonials/jpeg-optimizer_image (3)-min.png",
      qualification: "Bachelor's Degree in Early Childhood Education",
      description:
        "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable.",
    },
    {
      name: "Ms. Madhu Shriwas",
      image: "/Testimonials/jpeg-optimizer_image (2)-min.png",
      qualification: "Bachelor's Degree in Early Childhood Education",
      description:
        "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable.",
    },
    {
      name: "Ms. Heena Billore",
      image: "/Testimonials/jpeg-optimizer_image (1)-min.png",
      qualification: "Bachelor's Degree in Early Childhood Education",
      description:
        "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable.",
    },
    {
      name: "Mr. Aditya Ranjan ",
      image: "/Testimonials/jpeg-optimizer_aditya ranjan-min.jpg",
      qualification: "Bachelor's Degree in Early Childhood Education",
      description:
        "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable.",
    },
  ]);

  const sliderImage = [
    {
      id: 1,
      url: "/Gwal_Img/1 (15).jpg",
    },
    {
      id: 2,
      url: "/Gwal_Img/1 (1).jpg",
    },
    {
      id: 3,
      url: "/Gwal_Img/1 (4).jpg",
    },
    {
      id: 4,
      url: "/Gwal_Img/1 (6).jpg",
    },
    {
      id: 5,
      url: "/Gwal_Img/1 (12).jpg",
    },
    {
      id: 6,
      url: "/Gwal_Img/1 (31).jpg",
    },
  ];

  return (
    <div className="  w-full h-full bg-contain bg-center bg-none">
      {" "}
      {/* Main container */}
      <div
        className="w-full bg-white py-10 bg-cover "
        style={{ backgroundImage: "url('/Cloudy.svg')" }}
      >
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0 mx-auto">
          <div className="flex flex-col justify-start gap-4 text-center">
            <p className="py-2 text-2xl text-[#008080] font-medium">
              START TO SUCCESS
            </p>
            <h1 className=" py-2 md:text-6xl text-4xl font-semibold">
              Welcome to <span className="text-[#008080]">PGS</span>{" "}
              <span className="text-[#008080]">Learners</span> Academy
            </h1>
            <p className="py-2 text-lg text-center text-gray-600">
              At Pratibha Global School dedicated to providing a nurturing and
              stimulating environment for young learners. With a commitment to
              excellence in early education, we believe in shaping curious minds
              and building a strong foundation for a lifelong love of learning.
              Our holistic approach fosters intellectual, social, emotional, and
              physical development, ensuring that each child reaches their full
              potential.
            </p>
          </div>
          <div className=" relative pr-2 ">
            <img
              src={images[currentSlide]}
              className="md:order-last order-first rounded-full max-h-full"
            ></img>
          </div>
        </div>
      </div>
      {/* <BackgroundLayer/> */}
      <div className="">
        <div className="pt-6 md:p-8 text-center md:text-middle space-y-4 mb-5">
          <blockquote>
            {/* Quote */}
            <p className="text-4xl pt-2 font-bold bg-clip-text text-gradient-to-r from-purple-400 to-pink-600">
              “Every kid blooms differently.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            {/* Description */}
            <div className="text-sky-500 dark:text-sky-400 pb-5">
              Our Children Blossom with Vibrant Hues of Interest in 5+ branches
              across India
            </div>
            {/* Buttons */}
            <div>
              <Button className="bg-teal-500 p-3 rounded mr-6">
                <Link href="/admissions">Enquire Now</Link>
              </Button>

              <Button className="bg-white text-black border-current p-3 rounded">
                <Link href="/studentLife">Explore</Link>
              </Button>
            </div>
          </figcaption>
        </div>

        {/* Section: Grid */}
        <Grid items={items} />

        {/* About MAnagement  */}
        <AboutManagement />

        {/* Section: Vision and Mission */}
        <div>
          {/* Example usage of CenteredContent */}
          <HeadingText
            title="Mission & Visions"
            subtitle="Our Mission & Visions"
            content="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-5 lg:px-10 md:px-2">
          {/* Vision */}
          <div
            href="#"
            className="text-center block max-w-xl p-5 bg-white border border-gray-200 shadow-[5px_5px_0px_0px_rgba(76,175,80)] rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            style={{ backgroundImage: "url('/Moon.svg')" }}
          >
            <Image src="/vision.png" width={100} height={100} alt="Vision" />
            <h5 className="mb-2 text-2xl py-6 font-bold tracking-tight text-gray-900 dark:text-white">
              VISION
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400  sm:h-auto">
              Our vision at Pratibha Global is to shine as a beacon of
              educational excellence, inspiring children to embark on a journey
              of exploration, discovery, and expression of their unique talents.
              We aspire to cultivate a generation of lifelong learners, armed
              with critical thinking skills, empathy, and a profound
              appreciation for diversity.
            </p>
          </div>
          {/* Mission */}
          <div
            href="#"
            className="text-center block max-w-xl p-5 bg-white border shadow-[5px_5px_0px_0px_rgba(76,175,80)] border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            style={{ backgroundImage: "url('/Moon.svg')" }}
          >
            <Image src="/mission.png" width={100} height={100} alt="Mission" />
            <h5 className="mb-2 text-2xl py-6 font-bold tracking-tight text-black dark:text-white">
              MISSION
            </h5>
            <p className="font-normal text-black dark:text-gray-400 sm:h-auto">
              At Pratibha Global, our mission is to ignite a love for learning
              and empower young minds to evolve into confident, compassionate,
              and creative individuals. We are dedicated to establishing a
              secure and inclusive environment where children flourish
              academically, socially, and emotionally, laying the foundation for
              a triumphant educational voyage.
            </p>
          </div>
        </div>

        {/* Section: Petals of Purpose */}
        <ImgSlider images={sliderImage} />

        {/* Section: Philosophy */}
        <div className="my-10 " style={{ background: "#006666" }}>
          {/* Image */}
          <img
            src="https://www.orchidsinternationalschool.com/_next/static/media/philosophy.6c2fe11d.svg"
            className="m-auto "
            alt="Image"
          ></img>
        </div>

        <section>
          <HeadingText
            title="Our Teachers With Expertise"
            subtitle="Our Team Members"
            content="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mx-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className="p-[20px] bg-white rounded-xl shadow-teal-600 border-gray-200 rounded-lg shadow flex-col justify-start items-start gap-[30px] inline-flex"
              >
                <div className="self-stretch justify-start items-center gap-5 inline-flex">
                  <div className="grow shrink basis-0  justify-start items-center gap-4 flex">
                    <img
                      className=" rounded-xl shadow-lg h-24 w-24"
                      src={card.image}
                      alt={`Image ${index}`}
                    />
                    <div className="grow shrink basis-0 text-zinc-800 text-lg font-extrabold ">
                      {card.name}
                    </div>
                  </div>
                </div>
                <div className="self-stretch p-[20px] bg-teal-100 rounded-xl shadow-lg flex-col justify-start items-start gap-5 flex">
                  <div className="self-stretch text-zinc-800 text-lg font-semibold ">
                    Qualification: {card.qualification}
                  </div>
                  <div className="self-stretch text-zinc-800 text-sm font-medium ">
                    {card.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
