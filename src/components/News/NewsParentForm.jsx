"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAllNews, deleteNews } from "@/lib/services/news/index";
import NewsForm from "@/components/News/NewsForm";
import NewsTable from "@/components/News/NewsTable";
import { getAuthToken } from "@/lib/middleware/apiInceptor";

const NewsPage = ({ clientProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const {
    schools = [],
    schoolUuid = "",
    profie = {},
    newsList = [],
  } = clientProps;
  const [news, setNewsList] = useState(clientProps.newsList);
  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const newsData = await getAllNews(schoolUuid);
      setNewsList(newsData);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const updatedNewsList = await getAllNews(schoolUuid);
      setNewsList(updatedNewsList);
      setSelectedNewsId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      setIsLoading(true);
      await deleteNews(uuid);
      fetchNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (uuid) => {
    setSelectedNewsId(uuid);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken(); // Get authentication token from cookies
        if (!token) {
          router.push("/admin/login"); // Redirect to login page if token is not present
          return;
        }
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="news-page">
      <NewsForm
        schools={schools}
        schoolUuid={schoolUuid}
        profile={profie}
        selectedNewsId={selectedNewsId}
        onFormSubmit={handleFormSubmit}
        newsList={news}
        setSelectedNewsId={setSelectedNewsId}
      />
      <NewsTable newsList={news} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default NewsPage;
