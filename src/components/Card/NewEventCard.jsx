import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const dateConvertor = (startDate) => {
  const dateObject = new Date(startDate);

  // Use dateObject methods to get individual components
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Months are zero-based, so add 1
  const day = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  // Format the date components as a string
  const formattedDate = `${day < 10 ? "0" : ""}${day}-${
    month < 10 ? "0" : ""
  }${month}-${year} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
};

export default function NewEventCard({ event }) {
  const router = useRouter();
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
  } = event;

  // Convert both location and the comparison value to lowercase
  const lowerCaseLocation = location.toLowerCase();
  const searchTerm = "GWALIOR";

  // Check if the lowercase location contains the string 'GWALIOR'
  if (!lowerCaseLocation.includes(searchTerm)) {
    // If location does not contain 'GWALIOR', return null (render nothing)
    return null;
  }

  const newStartDate = dateConvertor(startDate);
  const newEndDate = dateConvertor(endDate);

  return (
    <div className="w-full rounded-xl p-3 bg-teal-300 border-2 border-tteal hover:scale-105 transition-transform hover:bg-teal-500 hover:text-gray-200">
      <div className="w-full h-60 mx-auto rounded-xl relative overflow-hidden">
        <img
          src={event.thumbNail}
          alt={title}
          className="object-cover w-full h-full rounded-xl shadow-lg"
        />
      </div>
      <div className="w-full  flex flex-col justify-center p-2">
        <h1 className="text-lg font-bold p-2">
          {title}&nbsp;({location})
        </h1>
        <h2 className="px-2 py-1  text-sm h-14 overflow-hidden">
          {description}
        </h2>
        {/* <h3 className="px-2 py-2  text-[15px] font-semibold">Location : </h3> */}
        <button
          className="w-1/3 rounded-md p-2 mt-3 bg-gray-200 text-sm outline-none text-black font-semibold duration-100 hover:text-white hover:bg-teal-800"
          onClick={() => {
            router.push(`/event/details/${uuid}`);
          }}
        >
          More Details
        </button>
      </div>
    </div>
  );
}
