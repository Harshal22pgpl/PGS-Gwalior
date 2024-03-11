"use client";
import React from "react";
import AdmissionCard from "../AdmissionCards/AdmissionCards";

import { useRouter } from "next/navigation";

export default function AdmissionEnquiry() {
  const router = useRouter();
  return (
    <>
      <div
        className="w-11/12 mx-auto h-96 flex flex-col justify-center items-center bg-black rounded-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/Cloudy.svg')" }}
      >
        <h1 className=" lg:text-6xl md:6xl sm:2xl text-[#010402]  text-center">
          WELCOME <br></br>TO <br></br>
          <bold className="">PRATIBHA GLOBAL SCHOOL</bold>
        </h1>
        <div className="flex space-x-4 mt-20">
          <button
            className="bg-[#03d368] hover:bg-[#2efa90] text-white font-bold py-2 px-4 rounded "
            onClick={() => {
              router.push("/admissions");
            }}
          >
            Admission Form
          </button>
          <button
            className="bg-[#03d368] hover:bg-[#2efa90] text-white font-bold py-2 px-4 rounded "
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            Contact
          </button>
        </div>
      </div>

      <div className="lg:w-11/12  w-full mx-auto mt-5  grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-10  ">
        <AdmissionCard
          heading="Pre Primary"
          paragraph="(Kindergarten – UMANG Stage of Child development :Pre to KG 2)"
          phase="Pre Nursery
            "
          classNAme="KG1 and KG2 program"
          phasePara="Nursery"
          btnText="Pre Nursery"
          link="/academics/kindergarten"
        />
        <AdmissionCard
          heading="Primary"
          paragraph="(TARANG Stage of Child development :CLASS 1-5)"
          phase="Primary"
          classNAme="Class 1 - 5"
          phasePara="Stage of child development"
          btnText="Primary"
          link="/academics/primary_school"
        />
        <AdmissionCard
          heading="Middle School"
          paragraph="(Pratibha Stage of Child development)"
          phase="Pratibha
          "
          classNAme="Class 6 - 8"
          phasePara="pratibha"
          btnText="Middle School"
          link="/academics/middle-school"
        />

        <AdmissionCard
          heading="Senior School"
          paragraph="(Tejas Stage of Child development)"
          phase="Tejas
          "
          classNAme="Class 9 - 12"
          phasePara="Tejas"
          btnText="Senior School"
          link="/academics/senior-school"
        />
      </div>
    </>
  );
}
