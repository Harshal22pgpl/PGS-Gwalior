
'use client'
// 'use client'
import React, { useState, useEffect } from 'react';
import { addNotice, updateNotice } from '@/lib/services/notices/index';
import Loader from '@/components/Loader/Loader';
import Notification from '@/components/Toast/Notification';
import { NOTICES } from '@/lib/constants/index';
import moment from 'moment';
import { uploadImg } from "@/lib/services/files/fileServices";

const fields = [
  { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter Title' },
  { name: 'file', label: 'File', type: 'file', placeholder: 'Enter Content' },
  { name: 'description', label: 'Description', type: 'text', placeholder: 'Upload Thumbnail' },
  { name: 'endDate', label: 'Published Date', type: 'datetime-local', placeholder: 'Select Date' },
];

const NewsForm = ({ selectedNewsId, onFormSubmit, noticeList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState({ msg: '', type: '' });
  // const [thumbnailFile, setThumbnailFile] = useState(null);
  const [notice, setNoticeData] = useState({
    ...NOTICES,
    publishedDate: moment().format('YYYY-MM-DD HH:mm:ss'), // Initialize with current date and time
  });

  useEffect(() => {
      // If selectedNewsId is provided, populate the form with existing news data
      if (selectedNewsId) {
          const selectedNews = noticeList.find((notice) => notice.uuid === selectedNewsId);
  
          if (selectedNews) {
              setNoticeData({
                  title: selectedNews.title,
                  file: selectedNews.file,
                  description: selectedNews.description,
                  endDate: moment(selectedNews.endDate).format('YYYY-MM-DD HH:mm:ss'), // Correct format
              });
          }
      }
  }, [selectedNewsId]);

  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "file") {
        setNoticeData((prev) => ({ ...prev, file: target.files[0] }));
    } else {
      setError({ msg: "", type: "" });
      // Handle special case for datetime-local input
      const isDateTimeLocal = target.type === "datetime-local";
      const rawValue = isDateTimeLocal ? moment(value).toISOString() : value;
      setNoticeData((prev) => ({ ...prev, [name]: rawValue }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let imgRes = await uploadImg({ img: notice.file, category: "news" });
    if (imgRes) {
      const formattedDate = moment(notice.endDate).toISOString();

     
      setNoticeData(NOTICES);
    } else {
      //TODO: handle failure
    }
    setError({ msg: "", type: "" });

    // Format the publishedDate field
    const formattedDate = moment(notice.publishedDate).toISOString();

    try {
      setIsLoading(true);

      // If selectedNewsId is provided, update existing news, else add new news
      const res = selectedNewsId
        ? await updateNotice({ ...notice, endDate: formattedDate, uuid: selectedNewsId })
        : await addNotice({  ...notice,
          file: imgRes,
          endDate: formattedDate });
          onFormSubmit()
      
      // if (res) {
      //   setNewsData({ ...NEWSINITAIL, publishedDate: moment().format('YYYY-MM-DDTHH:mm'), thumbNail: imgRes});
      //   setIsLoading(false);
      //   setError({ msg: ADD_NEWS, type: 'success' });
        
      //   // Notify the parent component that the form is submitted
     
      // }
    } catch (error) {
      setIsLoading(false);
      setError({ msg: error.message || 'An error occurred', type: 'error' });
    }finally{
     
      setIsLoading(false)
      setNoticeData({...NOTICES})
    }
  };

  return (
    <>
      <div className='flex flex-col w-full justify-center items-center bg-[url("/MessageSvg.svg")]'>
        <h1 className='text-center mx-auto w-full my-3 text-4xl font-bold text-tteal '>News Details Form</h1>
        <div className='w-11/12 rounded-lg flex flex-col justify-center items-center bg-bteal opacity-75 p-5' onSubmit={handleSubmit}>
          <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>
            {fields.map((field) => (
              <div key={field.name} className='w-full flex justify-center py-2 px-4'>
                <label htmlFor={field.name} className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}>{field.label}</label>
                <input
                  name={field.name}
                  className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                  id={field.name}
                  type={field.type}
                  value={
                    field.name === "file"
                      ? notice[field.name]?.File?.filename
                      : notice[field.name]
                  }
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="w-40 my-5 mx-auto p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white hover:bg-tteal">Submit
          </button>
        </div>
      </div>


      {/* Loading indicator */}
      {isLoading && <Loader />}

      {/* Error notification */}
      {hasError.msg && <Notification type={hasError.type} message={hasError.msg} />}

    </>
  );
};

export default NewsForm;
