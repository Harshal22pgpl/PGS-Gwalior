import { useRouter } from "next/navigation";
import React from "react";
import Monuments from "../Monuments/Monuments";
import AboutManagementCard from "../AboutManagementCard/AboutManagementCard";

export default function AboutManagement() {
  const router = useRouter();
  return (
    <>
      <div className="w-full mt-9 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-bold mt-5">OUR MANAGEMENT</h1>
        <div className="w-full md:w-11/12 lg:w-10/12  mt-4 p-4">
          <div className="w-full grid lg:grid-cols-5 md:grid-cols-5 md:gap-5  lg:gap-5 grid-cols-1 ">
            <AboutManagementCard
              img="/Mgt/founder.png"
              name="Late Shri Suresh Kumar Chouksey"
              post="Founder SKC LNCT Group Of Colleges"
              link="/about/founders-message"
            />
            <AboutManagementCard
              img="/Mgt/chairperson.png"
              name="Mrs. Pratibha Chouksey"
              post="Co-Founder & Chairperson SKC LNCT Group Of Colleges"
              link="/about/chairmans-message"
            />
            <AboutManagementCard
              img="/Mgt/director.png"
              name="Mr. Suprabhat Chouksey"
              post="Managing Director of SKC LNCT Group Of Colleges "
              link="/about/directors-message"
            />
            <AboutManagementCard
              img="/Mgt/sl.png"
              name="Dr. Sandhya Chouksey"
              post="Director Curriculum of SKC LNCT Group Of Colleges"
              link="/about/about-leaders"
            />
            <AboutManagementCard
              img="/Mgt/principal.jpg"
              name=" Mr Vikas Gupta"
              post="Principal (Pratibha Global School, GWALIOR)"
              link="/about/principals-message"
            />
          </div>
        </div>
        <button
          className="bg-white border-2 border-tteal p-3 mt-5 rounded-md hover:bg-tteal"
          onClick={() => {
            router.push("/about/school-staff");
          }}
        >
          View Our Staff
        </button>

        <Monuments />
      </div>
    </>
  );
}
