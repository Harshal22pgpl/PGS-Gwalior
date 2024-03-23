'use client'
import React, { useEffect, useRef, useState } from "react";
import NewsCarousel from "../Carousel/NewsCarousel";
import { getAllNews } from "@/lib/services/news/index";
import { getEvent } from "@/lib/services/events/eventSevices";
import { getAllNotice } from "@/lib/services/notices/index";
import Link from "next/link";

export default function LatestNews({ schoolUuid = "" }) {
  const [newsData, setNewsData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [notice, setNoticeData] = useState([]);

  const [mixedData, setMixedData] = useState([]);
  const listRef = useRef(null);

  const fetchNews = async () => {
    const newsDatas = await getAllNews(schoolUuid);
    const newsItemsWithType = newsDatas?.map((news) => ({
      ...news,
      type: "news",
    }));
    setNewsData(newsItemsWithType);
  };

  const fetchNotice = async () => {
    try {
      const notices = await getAllNotice("10193d2b-f7ef-4d54-b51d-488249f47fc2");
      console.log(notices, "get from db");

      // Assuming each notice object contains a 'file' property
      const noticeItemsWithType = notices.map((notice) => ({
        ...notice,
        type: "notice",
        thumbNail: notice.file, // Include the file property as thumbNail
      }));

      setNoticeData(noticeItemsWithType);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  const fetchEvents = async (page) => {
    const eventData = await getEvent({ schoolUuid, limit: 6, page });
    const eventItemsWithType = eventData?.data.map((event) => ({
      ...event,
      type: "event",
    }));
    setEventData(eventItemsWithType);
  };

  useEffect(() => {
    const listElement = listRef.current;
    const autoScroll = () => {
      listElement.scrollTop += 1;
      if (
        listElement.scrollTop + listElement.clientHeight >=
        listElement.scrollHeight - 1
      ) {
        listElement.scrollTop = 0; // Reset to the top
      }
    };
    let scrollInterval = setInterval(autoScroll, 50);
    listElement.addEventListener("mouseover", () => {
      clearInterval(scrollInterval);
    });
    listElement.addEventListener("mouseout", () => {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, 50);
    });

    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    fetchNews();
    fetchNotice();
    fetchEvents(1); // Fetch events when the component mounts
  }, []);

  useEffect(() => {
    // Mix news, event, and notice data only once
    const mixedArray = [...newsData, ...eventData, ...notice];
    setMixedData(shuffleArray(mixedArray));
  }, [newsData, eventData, notice]);

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col mt-10">
        <h2 className="text-black text-2xl font-bold">News & Notices</h2>
        <h6 className="text-2xl text-black font-bold">
          _________________________
        </h6>
        <h5 className="text-black text-2xl font-bold">
          BE UPDATED ALL THE TIME
        </h5>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row w-full mt-10">
        <div className="w-full sm:w-1/2 p-1 h-[350px]">
          <h2 className="text-2xl bg-teal-400 p-2 text-center">
            Latest Update 2023-24
          </h2>
          <div className="w-full bg-slate-300 mx-auto">
            <NewsCarousel mixedData={mixedData} length={mixedData.length} />
          </div>
        </div>
        <div className="gap-4 p-1 h-[430px] w-full bg-bteal">
          <div className="w-full h-full bg-bteal">
            <h2 className="text-2xl bg-teal-400 p-2 text-center">
              Latest News ,Events & Notices
            </h2>
            <div className="bg-bteal  w-full mx-auto">
              <div className="flex mx-auto w-full h-full items-center justify-center">
                <ul
                  ref={listRef}
                  className="bg-bteal w-full overflow-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 p-1 max-h-[376px]"
                >
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
  const { title, date, thumbNail, type, file, description } = item;

  // Determine the route based on the item type
  let route = '';
  switch (type) {
    case 'news':
      route = '/newsCard';
      break;
    case 'event':
      route = '/events';
      break;
    case 'notice':
      route = '/';
      break;
    default:
      route = '/';
  }

  return (
    <li className="border-gray-400 flex flex-col">
      <Link href={`${route}`}>
        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-start p-3 ">
          {thumbNail ? (
            <div className="w-36">
              <img
                src={thumbNail}
                className="flex flex-col h-[70px] rounded-md w-32 text-2xl bg-gray-300 text-black justify-center items-center mr-4"
                alt={type === "news" ? "News Image" : "Event Image"}
              />
            </div>
          ) : file ? (
            <div className="w-36">
              <img
                src="/notice.png"
                className="flex flex-col h-[70px] rounded-md w-32 text-2xl bg-gray-300 text-black justify-center items-center mr-4"
                alt="Default Image"
              />
            </div>
          ) : (
            <div className="w-36">
              <div className="flex flex-col max-h-[70px] rounded-md max-w-32 text-2xl bg-gray-300 text-black justify-center items-center mr-4">
                No Image Available
              </div>
            </div>
          )}
          <div className="flex flex-col items-start mr-2">
            <div className="font-semibold text-xs line-clamp-3">{title}</div>
            <div className="text-gray-600 text-sm">{date}</div>
          </div>
          {type === "news" && (
            <div className="bg-blue-200 text-xs rounded-md p-1">News</div>
          )}
          {type === "event" && (
            <div className="bg-teal-200 text-xs rounded-md p-1">Event</div>
          )}
          {type === "notice" && (
            <div className="bg-teal-200 text-xs rounded-md p-1">Notice</div>
          )}
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
