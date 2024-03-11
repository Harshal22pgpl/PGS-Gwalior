"use client";
import FaqAccordion from "@/components/FAQ/According";
import { useState, useEffect } from "react";
import CardSvgParagraph from "@/components/CardSvgParagraph/BenefitCard";
import Image from "next/image";
import CardTestimonials from "@/components/CardTestimonials/TestimonialCard";
import CardNavigatePage from "@/components/CardNavigatePage/NavigateCard";
import Counter from "@/components/Counter/page";
import ImageGallery from "@/components/ImageHomeGallary/ImageHomeGallary";
import LatestNews from "@/components/News/NewsSection";
import ModalHome from "@/components/ModalHome/ModalHome";

export default function Home({school}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/homeGallary/HeroSectionImage2.png",
    "/homeGallary/HeroSectionImage3.png",
    "/homeGallary/HeroSectionImage4.png",
    "/homeGallary/HeroSectionImage.png",
    // Add more images as needed
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  useEffect(()=>{
   if(school){
    window?.localStorage?.setItem('id', school?.uuid)
   }
  },[])

  const videoUrl = "https://www.youtube.com/watch?v=SswUBzdyT9E";

  // Extract the video ID from the URL
  const videoId = new URL(videoUrl).searchParams.get("v");

  return (
    <>
      <div className="duration-1000">
        <ModalHome />
      </div>
      <main className="min-h-full flex flex-col p-5  bg-white justify-center items-center dark:bg-dpurple">
        <div
          className="md:flex md:flex-col lg:flex-row  md:p-4 lg:p-4 sm:p-4 sm:flex-col mt-2  border border-gray-200 rounded-lg  shadow-none lg:shadow-[7px_8px_4px_2px_#006666] dark:bg-dpurple"
          style={{
            backgroundImage: "url('/HomeBg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="md:w-full lg:w-1/2 sm:w-full w-full">
            <Image
              className="duration-200"
              src={images[currentSlide]}
              alt="Hero Image"
              width={700}
              height={650}
            />
          </div>
          <div className="md:w-full lg:w-1/2 sm:w-full p-8  flex flex-col justify-center ">
            <h3 className="text-black text-sm border-b-2 border-black  font-bold sm:mt-4">
              Welcome to Pratibha Global School
            </h3>
            <h1 className="text-3xl font-semibold text-black my-2 md:text-start lg:text-start sm:text-center">
              Where Young Minds Blossom and{" "}
              <span className="text-tteal dark:text-orange">
                Dreams Take Flight
              </span>{" "}
            </h1>
            <p className="text-sm text-black mt-4">
              Our kinder garden school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </p>

            <div className="w-full mt-10 rounded-md border-2 sm:p-4  md:p-4 lg:p-5 p-4 shadow-none lg:shadow-[7px_8px_4px_2px_#006666] border-black grid md:grid-cols-1 lg:grid-cols-3   sm:grid-cols-1 gap-5  justify-center items-center bg-[url('/tealBg.svg')]  dark:bg-dpurple">
              <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                <Counter
                  initialValue={0}
                  targetValue={2000}
                  speed={0.001}
                  textColor="text-blue-600"
                  title="First Counter"
                />
                <div className="self-stretch text-black  font-medium text-xs">
                  Students Passed Out
                </div>
              </div>
              <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                <Counter
                  initialValue={20}
                  targetValue={100}
                  speed={100}
                  textColor="text-teal-700"
                  title="Second Counter"
                />
                <div className="self-stretch text-black  font-medium text-xs">
                  Award & Recognitions
                </div>
              </div>
              <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 lg:w-full ">
                <Counter
                  initialValue={5}
                  targetValue={15}
                  speed={200}
                  textColor="text-red-600"
                  title="Third Counter"
                />
                <div className="self-stretch text-black  font-medium text-xs">
                  Experience Educators
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefit Section  */}
        <div className="flex flex-col w-11/12  p-4 items-center mt-20">
          <h3 className=" bg-white border-2 border-black text-black md:w-1/5 lg:w-1/5 sm:w-full text-center text-sm p-4  md:py-2 lg:py-2 sm:py-4 rounded-lg">
            Childern Deseve Bright Future
          </h3>
          <h1 className="text-center text-black text-4xl font-bold mt-5">
            Our Benefits
          </h1>
          <p className="text-sm text-black mt-4 text-center md:w-3/4 lg:w-3/4 sm:w-full">
            {" "}
            With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child's future.
          </p>
          <div className="md:w-full lg:w-11/12 am:w-full mt-8 grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-9 ">
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
        </div>

        {/* Video Section  */}
        <div className="lg:w-11/12 w-full  flex flex-col md:flex-col lg:flex-row lg:p-10 md:p-10 lg:mt-20 mt-10 md:mt-20 rounded-xl lg:bg-[url('/Cloudy.svg')]">
          <div className="  lg:w-1/2 md:full sm:w-full w-full lg:p-4 p-4 ">
            <h2 className="text-3xl font-semibold text-black my-2 md:text-start lg:text-start sm:text-center">
              Welcome To Our{" "}
              <span className="text-tteal text-4xl">
                Pratibha Global School
              </span>
            </h2>
            <p className="text-md mt-5">
              As we know that education is a lifelong process in our present
              scenario, no one can imagine education without the digital skills.
              Development in artificial intelligence, robotics and genetic
              engineering is making the current workforce redundant and only
              those who are able to learn and train themselves with these
              technologies will be able to continue forward. At Pratibha Global
              GWALIOR School we ensure that all children at our campus inculcate
              a rapid learning aptitude and a competitive spirit from the very
              beginning. Pratibha Global GWALIOR School aims to provide a
              holistic education and conducive atmosphere to every child for
              their emotional, spiritual, physical and intellectual growth along
              with the ability to conquer future challenges.
            </p>
          </div>
          <div className=" lg:w-1/2 md:full sm:w-full w-full flex justify-center items-center">
            <div className="w-11/12  overflow-hidden lg:p-2 md:p-2">
              <iframe
                className="w-full rounded-xl"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
                title="YouTube Video"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <LatestNews schoolUuid={school?.uuid} />

        {/* testmonials section  */}
        <div className="flex flex-col w-11/12  p-4 items-center mt-20">
          <h3 className=" bg-white border-2 border-black text-black md:w-1/5 lg:w-1/5 sm:w-full text-center text-sm p-4  md:py-2 lg:py-2 sm:py-4 rounded-lg">
            Their Happy Words
          </h3>
          <h1 className="text-center text-black text-4xl font-bold mt-5">
            Our Testimonials
          </h1>
          <p className="text-sm text-black mt-4 text-center lg:w-4/6 md:w-4/6 sm:w-full">
            Our testimonials are heartfelt reflections of the nurturing
            environment we provide, where children flourish both academically
            and emotionally.{" "}
          </p>

          <div className="w-full mt-2 flex flex-wrap gap-20 justify-center items-center">
            {[
              {
                img: "/Testimonials/one.jfif",
                Name: "Mahesh Kumar",
                Description:
                  "Pratibha Global Shool has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
              },
              {
                img: "/Testimonials/two.jpg",
                Name: "Anita Solanki",
                Description:
                  "Choosing Pratibha Global Shool for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
              },
              {
                img: "/Testimonials/three.jpg",
                Name: "Santosh Khanna",
                Description:
                  "My daughter's social and academic growth has been remarkable since joining Pratibha Global School. I am grateful for the supportive and dedicated teachers.",
              },
            ].map((val) => (
              <CardTestimonials cardDetails={val} />
            ))}
          </div>
        </div>

        {/* Image Gallary */}
        <div className="lg:w-11/12 md:w-11/12 w-full container mx-auto lg:mt-20 md:mt-20 mt-10">
          <h1 className="lg:text-4xl md:text-4xl text-xl font-bold text-black text-center md:text-start lg:text-start md:mx-2 md:my-3 lg:mx-2 lg:my-3">
            Students Joy with Learning
          </h1>
          <ImageGallery />
        </div>

        {/* FAQ section  */}

        <div className="flex flex-col w-full  p-4 items-center mt-20 ">
          <h3 className=" bg-white border-2 border-black text-black md:w-1/5 lg:w-1/5 sm:w-full text-center text-sm p-4  md:py-2 lg:py-2 sm:py-4 rounded-lg">
            Solutions for the doubts
          </h3>
          <h1 className="text-center text-black text-4xl font-bold mt-5">
            Frequenty Asked Questions
          </h1>
          <p className="text-sm text-black mt-4 text-center lg:w-4/6 md:w-4/6 sm:w-full">
            Find all the essential information you need in our FAQ section,
            designed to address the most frequently asked questions and help you
            make informed decisions for your child's education.
          </p>

          <FaqAccordion />
        </div>

        {/* Navigate pages  */}
        <div className="flex flex-col w-full  p-4 items-center mt-20 ">
          <h3 className=" bg-white border-2 border-black text-black md:w-1/5 lg:w-1/5 p-4 sm:w-full text-center text-sm  md:py-2 lg:py-2 sm:py-4 rounded-lg">
            Explore More
          </h3>
          <h1 className="text-center text-black text-4xl font-bold mt-5">
            Navigate through our Pages{" "}
          </h1>
          <p className="text-sm text-black mt-4 text-center lg:w-4/6 md:w-4/6 sm:w-full">
            Your gateway to discovering a wealth of valuable information about
            our kindergarten school, Feel free to explore and learn more about
            the enriching experiences that await your child at our kindergarten
            school
          </p>

          <div className="w-full mt-8 grid md:grid-cols-2 lg:flex lg:flex-wrap sm:grid-cols-1 gap-20  justify-center items-center">
            {[
              {
                destination: "/about",
                pageName: "About Us",
                Description:
                  "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
              },
              {
                destination: "/academics",
                pageName: "Academics",
                Description:
                  "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
              },
              {
                destination: "/studentLife",
                pageName: "Student Life",
                Description:
                  "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
              },
              {
                destination: "/news",
                pageName: "News",
                Description:
                  "Our News featuring a curated blend of academic accomplishments, extracurricular highlights, and important announcements, this section fosters a sense of community engagement, providing a central hub for staying connected with the vibrant happenings within the school environment.",
              },
            ].map((val) => (
              <CardNavigatePage cardDetails={val} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
