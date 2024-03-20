"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAllNotice, deleteNotice } from "@/lib/services/notices/index";
import NoticeForm from "@/components/Notice/NoticeForm";
import NoticeTable from "@/components/Notice/NoticeTable";
import { getAuthToken } from "@/lib/middleware/apiInceptor";

const NewsPage = ({ clientProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    schools = [],
    schoolUuid = "",
    profie = {},
    noticeList = [],
  } = clientProps;
  const [notice, setNoticeList] = useState(clientProps.noticeList);
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);

  const fetchNotice = async () => {
    try {
      setIsLoading(true);
      const noticeData = await getAllNotice();
      setNoticeList(noticeData);
      console.log(noticeList);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const updatedNewsList = await getAllNotice(schoolUuid);
      setNoticeList(updatedNewsList);
      setSelectedNoticeId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      setIsLoading(true);
      await deleteNotice(uuid);
      fetchNotice();
    } catch (error) {
      console.error("Error deleting notice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (uuid) => {
    setSelectedNoticeId(uuid);
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
        await fetchNotice();
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
      <NoticeForm
        selectedNoticeId={selectedNoticeId}
        onFormSubmit={handleFormSubmit}
        setSelectedNoticeId={setSelectedNoticeId}
        noticeList={notice}
        schools={schools}
        schoolUuid={schoolUuid}
        profile={profie}
      />
      <NoticeTable
        noticeList={notice}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default NewsPage;
