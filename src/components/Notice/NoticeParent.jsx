
'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getAllNotice, deleteNotice } from '@/lib/services/notices/index';
import NoticeForm from '@/components/Notice/NoticeForm';
import NoticeTable from '@/components/Notice/NoticeTable';
import { getAuthToken } from '@/lib/middleware/apiInceptor';

const NewsPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [noticeList, setNoticeList] = useState([]);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const fetchNotice = async () => {
    try {
      setIsLoading(true);
      const newsData = await getAllNotice();
      setNoticeList(newsData);
      console.log(newsData)
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      setIsLoading(true);
      await deleteNotice(uuid);
      fetchNotice();
    } catch (error) {
      console.error('Error deleting notice:', error);
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
          router.push('/admin/login'); // Redirect to login page if token is not present
          return;
        }
        setIsLoading(true);
        await fetchNotice();
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="news-page">
      <NoticeForm selectedNewsId={selectedNewsId} onFormSubmit={fetchNotice} noticeList={noticeList} />
      <NoticeTable noticeList={noticeList} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default NewsPage;