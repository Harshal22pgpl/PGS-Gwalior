"use client";
import React, { useState, useEffect } from "react";
import { addNews, updateNews } from "@/lib/services/news/index";
import Loader from "@/components/Loader/Loader";
import Notification from "@/components/Toast/Notification";
import { ADMIN, NEWSINITAIL } from "@/lib/constants/index";
import moment from "moment";
import { uploadImg } from "@/lib/services/files/fileServices";
import useDropdown from "@/hooks/useDropDown";
import { first } from "lodash";

const fields = [
  { name: "title", label: "Title", type: "text", placeholder: "Enter Title" },
  {
    name: "content",
    label: "Content",
    type: "text",
    placeholder: "Enter Content",
  },
  {
    name: "thumbNail",
    label: "Thumbnail",
    type: "file",
    placeholder: "Upload Thumbnail",
  },
  {
    name: "publishedDate",
    label: "Published Date",
    type: "date-time",
    placeholder: "Select Date",
  },
  {
    name: "reDirectedLink",
    label: "Redirected Link",
    type: "text",
    placeholder: "Enter Redirected Link",
  },
];

const NewsForm = ({ selectedNewsId, onFormSubmit, newsList, ...others }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [newsData, setNewsData] = useState({
    ...NEWSINITAIL,
    publishedDate: moment().format("YYYY-MM-DDTHH:mm:ss"), // Initialize with current date and time
  });
  const { schools = [], schoolUuid = "", profile = {} } = others;
  const [organization, OrganizationDropDown, setOrganization] = useDropdown(
    "School",
    schoolUuid || first(schools).value,
    others?.schools || []
  );

  useEffect(() => {
    // If selectedNewsId is provided, populate the form with existing news data
    if (selectedNewsId) {
      const selectedNews = newsList.find(
        (news) => news.uuid === selectedNewsId
      );

      if (selectedNews) {
        setNewsData({
          title: selectedNews.title,
          content: selectedNews.content,
          thumbNail: selectedNews.thumbNail,
          publishedDate: moment(selectedNews.publishedDate).format(
            "YYYY-MM-DDTHH:mm:ss"
          ),
          reDirectedLink: selectedNews.reDirectedLink,
        });
      }
    }
  }, [selectedNewsId]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "thumbNail") {
      setNewsData((prev) => ({ ...prev, thumbNail: target.files[0] }));
    } else {
      setError({ msg: "", type: "" });
      // Handle special case for datetime-local input
      const isDateTimeLocal = target.type === "datetime-local";
      const rawValue = isDateTimeLocal ? moment(value).toISOString() : value;
      setNewsData((prev) => ({ ...prev, [name]: rawValue }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imgRes = await uploadImg({ img: newsData.thumbNail, category: "news" });
    if (imgRes) {
      const formattedDate = moment(newsData.publishedDate).toISOString();
      setNewsData(NEWSINITAIL);
    } else {
      //TODO: handle failure
    }
    setError({ msg: "", type: "" });

    // Format the publishedDate field
    const formattedDate = moment(newsData.publishedDate).toISOString();

    try {
      setIsLoading(true);

      // If selectedNewsId is provided, update existing news, else add new news
      const res = selectedNewsId
        ? await updateNews({
            ...newsData,
            publishedDate: formattedDate,
            uuid: selectedNewsId,
            organizationUuid: organization || schoolUuid,
          })
        : await addNews({
            ...newsData,
            thumbNail: imgRes,
            publishedDate: formattedDate,
            organizationUuid: organization || schoolUuid,
          });
      onFormSubmit();
    } catch (error) {
      setIsLoading(false);
      setError({ msg: error.message || "An error occurred", type: "error" });
    } finally {
      setIsLoading(false);
      setNewsData({ ...NEWSINITAIL });
    }
  };

  return (
    <>
      <div className='flex flex-col w-full justify-center items-center bg-[url("/MessageSvg.svg")]'>
        <h1 className="text-center mx-auto w-full my-3 text-4xl font-bold text-tteal ">
          News Details Form
        </h1>
        <div
          className="w-11/12 rounded-lg flex flex-col justify-center items-center bg-bteal opacity-75 p-5"
          onSubmit={handleSubmit}
        >
          <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
            {fields.map((field) => (
              <div
                key={field.name}
                className="w-full flex justify-center py-2 px-4"
              >
                <label
                  htmlFor={field.name}
                  className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}
                >
                  {field.label}
                </label>
                <input
                  name={field.name}
                  className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                  id={field.name}
                  type={field.type}
                  value={
                    field.name === "thumbNail"
                      ? newsData[field.name]?.File?.filename
                      : newsData[field.name]
                  }
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
            {profile.userType === ADMIN && <OrganizationDropDown />}
          </div>
          <button
            onClick={handleSubmit}
            className="w-40 my-5 mx-auto p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white hover:bg-tteal"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Loading indicator */}
      {isLoading && <Loader />}

      {/* Error notification */}
      {hasError.msg && (
        <Notification type={hasError.type} message={hasError.msg} />
      )}
    </>
  );
};

export default NewsForm;
