"use client";
import moment from "moment";
import Image from "next/image";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import React from "react";
import ImageGallery from "../ImageHomeGallary/ImageHomeGallary";
import EventFormParticular from "./EventFormProvider";
import Link from "next/link";
import Details from "@/components/Deatils-Card/Details";
import { addAdmissionQuery } from "@/lib/services/admission";
import Loader from "@/components/Loader/Loader";
import { validator } from "@/lib/helpers/validator";
import {
  ADMISSION_SUCCESS,
  ERR_MSG,
  FORM_INITIALS,
} from "@/lib/constants/admission";
import { toast } from "react-toastify";
import { getEvent } from "@/lib/services/events/eventSevices";

const EventDetail = ({ eventData, schoolUuid = ""  }) => {
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [formData, setFormData] = useState(FORM_INITIALS);

  const [evenData, setEvenData] = useState([]);

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

  const fetchEvents = async () => {
    const eventsDatas = await getEvent(schoolUuid, 5, 1);
  
    const eventsItemsWithType = eventsDatas.data?.map((news) => ({
      ...news,
      type: "news",
    }));
    setEvenData(eventsItemsWithType);
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts
  }, []);

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
      <Details title={title} />
      <div className="w-full ">
        <div className="flex justify-center   gap-10 max-h-[5000px]  mt-4 w-11/12 mx-auto pt-10 pb-10 ">
          <div className=" ">
            <main
              className="rounded-md w-[600px] h-[550px] flex flex-col justify-center  p-5  bg-cover bg-center"
              style={{ backgroundImage: `url(${thumbNail})` }}
            ></main>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-4  w-full md:w-full shadow-md flex flex-col border-indigo-200 rounded-xl "
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
          <div>
            <h1 className="font-bold p-1 border-2 rounded-md  font-fixed ">
              Here The Latest News
            </h1>
            <ul className="  w-96 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-6 max-h-[500px] overflow-scroll border-2 p-4 rounded-md">
              {evenData.map((item, index) => (
                // <ListItem key={index} item={item} />
                <>
                  {/* const { title, date, thumbNail, type, file, description } = item; */}
                  <div className="w-full flex gap-2 px-2 ">
                    <div className=" w-28  h-28 relative rounded-lg overflow-hidden">
                      <Image src={item.thumbNail} fill />
                    </div>
                    <div className="w-9/12 justify-center p-2 items-start flex flex-col">
                      <Link
                        href={
                          item.type === "news"
                            ? `/newsDetailSection/newsDetail/${item.uuid}`
                            : `/event/details/${item.uuid}`
                        }
                      >
                        <h1 className=" text-sm font-bold hover:text-gray-600">
                          {item.title}
                        </h1>
                      </Link>
                      <div className=" flex justify-start py-4 items-center text-sm font-semibold">
                        <h1 className="px-2 bg-gray-300 p-1 font-semibold rounded-lg capitalize">
                          {item.type}
                        </h1>
                        {item.type === "event" && (
                          <h1 className="px-4 text-blue-900">
                            {moment(item.startDate).format("MMMM DD, YYYY")}
                          </h1>
                        )}
                        {item.type === "notice" && (
                          <h1 className="px-4 text-blue-900">
                            {moment(item.publishedDate).format("MMMM DD, YYYY")}
                          </h1>
                        )}

                        {item.type === "news" && (
                          <h1 className="px-4 text-blue-900">
                            {moment(item.publishedDate).format("MMMM DD, YYYY")}
                          </h1>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </ul>
          </div>
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
