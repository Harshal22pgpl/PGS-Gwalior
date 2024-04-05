'use client'
import moment from "moment";
import Image from "next/image";
import Button from "../Button/Button";
import { useState } from "react";
import React from "react";
import ImageGallery from "../ImageHomeGallary/ImageHomeGallary";
import EventFormParticular from "./EventFormProvider";
import Link from "next/link";
import Details from '@/components/Deatils-Card/Details'
import { addAdmissionQuery } from "@/lib/services/admission";
import Loader from "@/components/Loader/Loader";
import { validator } from "@/lib/helpers/validator";
import {
  ADMISSION_SUCCESS,
  ERR_MSG,
  FORM_INITIALS,
} from "@/lib/constants/admission";
import { toast } from "react-toastify";

const EventDetail = ({ eventData }) => {
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [formData, setFormData] = useState(FORM_INITIALS);
  const {
    title,
    description,
    thumbNail,
    location,
    startDate,
    endDate,
    category,
    uuid,
    type,
    registrationRequired,
    capacity,
    registeredParticipants,
    OrganizationUuid,
    newStartDate,
    newEndDate,
  } = eventData;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setError({ msg: "", type: "" });
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleForceUpdate = () => setError({ msg: "", type: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ msg: "", type: "" });
    let isValid = validator(formData, ERR_MSG, ["otherQuery"]);
    if (isValid === true) {
      try {
        setIsLoading(true);
        let res = await addAdmissionQuery(formData);
        if (res) {
          setFormData(FORM_INITIALS);
          setIsLoading(false);
          setError({ msg: ADMISSION_SUCCESS, type: "success" });
        }
      } catch (error) {
        setIsLoading(false);
      }
    } else {
      toast.error(isValid);
    }
  };


  const formattedStartDate = moment(startDate).format("MMMM Do YYYY");
  const formattedEndDate = moment(endDate).format("MMMM Do YYYY");

  return (
    <>
    <Details title={title}/>
      <div className="max-w-5xl mx-auto px-4 py-8">
   
        <div className="w-full md:flex md:space-x-4">
          <div className="md:w-1/2">
            <img
              src={thumbNail}
              alt={title}
              className="rounded-lg w-[400px] h-[470px]" objectFit="cover"
            />
          </div>
          <div className="md:w-1/2">
          <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white p-6 w-full md:w-80 shadow-md flex flex-col border-indigo-200 rounded-xl "
              >
                <h1 className=" text-xl bg-clip-text bg-gradient-to-r to-yellow-600 from-pink-400">
                  Admisson Form
                </h1>
                <input
                  type="text"
                  name="applicantName"
                  placeholder="Parent Name*"
                  value={formData.applicantName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  type="text"
                  name="applicantPhone"
                  value={formData.applicantPhone}
                  placeholder="Mobile*"
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  type="email"
                  name="applicantEmail"
                  value={formData.applicantEmail}
                  placeholder="your@email.com"
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <select
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="Indore">Indore</option>
                  <option value="Bagli">Bagli</option>
                  <option value="Gwaliour">Gwaliour</option>
                  <option value="Nathdwara">Nathdwara</option>
                  {/* Add your cities here */}
                </select>
                <input
                  type="text"
                  name="admissionYear"
                  value={formData.admissionYear}
                  placeholder="2023-2024"
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Any query or message"
                  name="otherQuery"
                  value={formData.otherQuery}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  btnType="primary" // Adjust button type as needed
                  size="large" // Adjust button size as needed
                  className="text-white px-4 py-2 rounded-lg"
                  style={{ background: "#00a76f" }}
                >
                  Submit
                </Button>
              </form>

          </div>
        </div>
        <div className="published-date flex items-center my-4">
        <div className="flex-1 h-px bg-black"></div>
        <p className="text-black px-2">{formattedEndDate}</p>
        <div className="flex-1 h-px bg-black"></div>
      </div>
      <div >
        <p className="text-center">{description}</p>
      </div>
      </div>

      <div className="w-11/12 mx-auto mt-10">
        <ImageGallery />
      </div>

      <div className="flex justify-center my-8">
        <Link href="/newsCard">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            All Archives
          </button>
        </Link>
      </div>
    </>
  );
};

export default EventDetail;
