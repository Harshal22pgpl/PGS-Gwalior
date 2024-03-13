"use client";

import React, { useState, useEffect } from "react";
import moment from "moment";
import { getAllNews } from "@/lib/services/news/index";
import NewNewsCard from "@/components/Card/NewNewsCard";
import Pagination from "@/components/Pagination/Pagination";
import { getSchoolDetails } from "@/lib/services/schools/schoolservices";

const NewsList = ({ newsList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set your desired items per page

  useEffect(() => {
    setCurrentPage(1); // Reset current page when news list changes
  }, [newsList]);

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const paginatedNewsList = newsList.slice(indexOfFirstNews, indexOfLastNews);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className="w-full bg-white mb-5 bg-cover "
        style={{ backgroundImage: "url('/Rect Light.svg')" }}
      >
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0 mx-auto">
          <div className="flex flex-col  justify-center gap-4 text-center">
            <p className="py-2 text-2xl text-[#008080] font-medium">
              News Section
            </p>
            <h1 className="md:leading-[72px] py-2 md:text-6xl text-4xl font-semibold">
              Our School <span className="text-[#008080]">in The News </span>
            </h1>
            {/* <p className='py-2 text-lg text-center text-gray-600'>At Pratibha Global School, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school.
                            </p> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-auto">
        {paginatedNewsList.map((news) => (
          <NewNewsCard key={news.id} news={news} />
        ))}
      </div>
      <Pagination
        totalItems={newsList.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const school = await getSchoolDetails();
        const schoolUuid = school?.uuid;
        const newsData = await getAllNews(schoolUuid);
        setNewsList(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []); // Run the effect only once on component mount

  return (
    <div className="news-page">
      <div className="w-full bg-white bg-cover ">
        {/* Your header content */}
      </div>
      <div className="p-12">
        <NewsList newsList={newsList} />
      </div>
    </div>
  );
};

export default NewsPage;
