'use client'
import React, { useEffect, useRef, useState } from "react";
import NewsCarousel from "../Carousel/NewsCarousel";
import { getAllNews } from "@/lib/services/news/index";
import { getEvent } from "@/lib/services/events/eventSevices";
import { getAllNotice } from "@/lib/services/notices/index";
import Link from "next/link";
import moment from "moment";
import Loader from "../Loader/Loader";
export default function LatestNews({ schoolUuid = "" }) {
  const [newsData, setNewsData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [notice, setNoticeData] = useState([]);
  const [mixedData, setMixedData] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage error state
  const listRef = useRef(null);
  const fetchNews = async () => {
    try {
      const newsDatas = await getAllNews(schoolUuid);
      const newsItemsWithType = newsDatas?.map((news) => ({
        ...news,
        type: "news",
      }));
      setNewsData(newsItemsWithType);
    } catch (error) {
      console.error("Error fetching news:", error);
      // setError(error.message);
    }
  };
  const fetchNotice = async () => {
    try {
      const notices = await getAllNotice(schoolUuid);
      const noticeItemsWithType = notices.map((notice) => ({
        ...notice,
        type: "notice",
        thumbNail: notice.file,
      }));
      setNoticeData(noticeItemsWithType);
    } catch (error) {
      console.error("Error fetching notices:", error);
      // setError(error.message);
    }
  };
  const fetchEvents = async (page) => {
    try {
      const eventData = await getEvent({ schoolUuid, limit: 6, page });
      const eventItemsWithType = eventData?.data.map((event) => ({
        ...event,
        type: "event",
      }));
      setEventData(eventItemsWithType);
    } catch (error) {
      console.error("Error fetching events:", error);
      // setError(error.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchNews(), fetchNotice(), fetchEvents(1)]);
      setLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      const autoScroll = () => {
        listElement.scrollTop += 1;
        if (listElement.scrollTop + listElement.clientHeight >= listElement.scrollHeight - 1) {
          listElement.scrollTop = 0; // Reset to the top
        }
      };
      let scrollInterval = setInterval(autoScroll, 50);
      const handleMouseOver = () => clearInterval(scrollInterval);
      const handleMouseOut = () => {
        clearInterval(scrollInterval);
        scrollInterval = setInterval(autoScroll, 50);
      };
      listElement.addEventListener("mouseover", handleMouseOver);
      listElement.addEventListener("mouseout", handleMouseOut);
      return () => {
        clearInterval(scrollInterval);
        listElement.removeEventListener("mouseover", handleMouseOver);
        listElement.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [listRef.current]);
  useEffect(() => {
    if (Array.isArray(newsData) && Array.isArray(eventData) && Array.isArray(notice)) {
      const mixedArray = [...newsData, ...eventData, ...notice];
      setMixedData(shuffleArray(mixedArray));
    }
  }, [newsData, eventData, notice]);
  if (loading) return <div><Loader/></div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col mt-10">
        <h2 className="text-black text-2xl font-bold">News & Notices</h2>
        <h6 className="text-2xl text-black font-bold">_________________________</h6>
        <h5 className="text-black text-2xl font-bold">BE UPDATED ALL THE TIME</h5>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row w-full mt-10 p-2">
        <div className="w-full sm:w-1/2  h-[550px]">
          <div className="w-full  mx-auto">
            <NewsCarousel mixedData={mixedData} length={mixedData.length} />
          </div>
        </div>
        <div className="gap-4 h-[550px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2">
          <div className="w-full h-full ">
            <div className="  w-full mx-auto px-2">
              <div className="flex mx-auto w-full h-full items-center justify-center">
                <ul ref={listRef} className=" w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 max-h-[540px] overflow-scroll">
                  {mixedData.map((item, index) => (
                    <ListItem key={index} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const ListItem = ({ item }) => {
  const { title, thumbNail, publishedDate, type, file, uuid } = item;
  let route = "";
  switch (type) {
    case "news":
      route = `/newsDetailSection/newsDetail/${uuid}`;
      break;
    case "event":
      route = "/events";
      break;
    case "notice":
      route = `/notice/${uuid}`;
      break;
    default:
      route = "/";
  }
  return (
    <li className="border-gray-400 flex flex-col">
      <Link href={route}>
        <div className="w-full flex gap-2 px-2 ">
          <div className=" w-28 h-28 relative rounded-lg overflow-hidden">
            {thumbNail ? (
              <img src={thumbNail} className="flex flex-col h-[75px] rounded-md w-32 text-2xl bg-gray-300 text-black justify-center items-center mr-4" alt={type === "news" ? "News Image" : "Event Image"} />
            ) : file ? (
              <img src="/notice.png" className="flex flex-col h-[70px] rounded-md w-32 text-2xl bg-gray-300 text-black justify-center items-center mr-4" alt="Default Image" />
            ) : (
              <div className="flex flex-col max-h-[70px] rounded-md max-w-32 text-2xl bg-gray-300 text-black justify-center items-center mr-4">No Image Available</div>
            )}
          </div>
          <div className="w-9/12 justify-center p-2 items-start flex flex-col">
            <h1 className=" text-sm font-bold hover:text-gray-600">{title}</h1>
            <div className=" flex justify-start py-4 items-center text-sm font-semibold">
              <h1 className="px-2  p-1 font-semibold rounded-lg capitalize bg-blue-200">{type}</h1>
              <h1 className="px-4 text-blue-900">{moment(publishedDate).format("MMMM DD, YYYY")}</h1>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
// Function to shuffle array items
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}