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

export default function NewEventCard({ news }) {
  const router = useRouter();
  const { title, content, thumbNail, uuid } = news;
  return (
    <div className="w-full rounded-xl p-3 bg-teal-300 border-2 border-tteal hover:scale-105 transition-transform hover:bg-teal-500 hover:text-gray-200">
      <div className="w-full h-60 mx-auto rounded-xl relative overflow-hidden">
        <img
          src={news.thumbNail}
          alt={news.title}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="w-full  flex flex-col justify-center p-2">
        <h1 className="text-md font-semibold p-2">{news.title}</h1>
        {/* <h2 className='px-2 font-semibold text-lg'>Date -  {news.publishedDate}</h2> */}
        <h3 className="px-2 py-2 font-semibold text-sm overflow-hidden">
          Link : {news.reDirectLink}
        </h3>
        <button
          className="w-1/3 rounded-md p-2 bg-gray-200 text-sm outline-none text-black font-semibold duration-100 hover:text-white hover:bg-teal-800"
          onClick={() => {
            router.push(`/newsDetailSection/newsDetail/${uuid}`);
          }}
        >
          More Details
        </button>
      </div>
    </div>
  );
}
