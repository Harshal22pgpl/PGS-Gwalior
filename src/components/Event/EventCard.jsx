"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EventView from "./EventView";
const eventDetails = {
  date: "08",
  month: "January",
  year: "2024",
  location: "LNCT College, GWALIOR",
  startTime: "2.30 pm",
  endTime: "5.30pm",
  heading: "Inter School Dance Competition",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ipsa porro perferendis cum voluptatem ad sapiente? Cupiditate vero aliquid ipsam nisi eum sequi, quas tempora similique dicta reprehenderit laudantium. Accusamus in illum similique hic. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, quaerat.",
};
const EventCard = ({ eventDetails }) => {
  const router = useRouter();
  if (!eventDetails) {
    // Handle the case where clientDetails is not provided
    return <div>Error: Details not provided</div>;
  }
  const { date, month, year, location, startTime, endTime, heading } =
    eventDetails;
  return (
    <>
      <div className="group w-full md:h-52 lg:h-52 sm:h-48 h-44 border-2 border-gray-300 rounded-2xl flex justify-around items-center p-2 md:p-4 sm:p-2 lg:p-4 hover:bg-teal-500 hover:text-white">
        <div className="border-2 border-gray-300 lg:w-[130px] lg:h-[130px] md:w-[130px] md:h-[130px] w-[120px] h-[120px] rounded-3xl flex flex-col p-2 ">
          <h1 className="md:text-5xl lg:text-5xl sm:text-4xl text-4xl text-center py-3 font-extrabold ">
            {date}
          </h1>
          <h2 className="text-center md:text-md lg:text-md text-sm font-semibold text-gray-500 group-hover:text-white">
            {month},{year}
          </h2>
        </div>
        <div className="w-2/3   p-3 flex flex-col">
          <div className="flex lg:gap-10 md:gap-10 sm:gap-10 flex-col lg:flex-row md:flex-row sm:flex-row text-gray-500">
            <h2>
              <Image
                className="inline "
                src="/location.svg"
                alt="Hero Image"
                width={18}
                height={18}
              />
              <span className="md:text-sm lg:text-sm text-xs sm:text-sm pl-2 group-hover:text-white">
                {location}
              </span>
            </h2>
            <h2>
              <Image
                className="inline"
                src="/hours.svg"
                alt="Hero Image"
                width={20}
                height={20}
              />
              <span className="md:text-sm lg:text-sm text-xs sm:text-sm pl-2 group-hover:text-white">
                {startTime}-{endTime}
              </span>
            </h2>
          </div>
          <Link
            className="text-lg md:text-2xl lg:text-2xl font-bold mt-5 hover:text-yellow-200 text-start"
            href={{ pathname: "/event/particularEvent" }}
          >
            {heading}
          </Link>
          {/* <button
                        onClick={() => {
                            router.push({
                            });
                        }}
                        className='text-lg md:text-2xl lg:text-2xl font-bold mt-5 hover:text-yellow-200 text-start'>{heading}
                    </button> */}
        </div>
      </div>
      <EventView eventDetails={eventDetails} />
    </>
  );
};
export default EventCard;
