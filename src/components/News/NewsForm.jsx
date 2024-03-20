"use client";
import React, { useState, useEffect, useRef } from "react";
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

const NewsForm = ({ selectedNewsId,setSelectedNewsId, onFormSubmit, newsList, ...others }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [validationErrors, setValidationErrors] = useState({});
  const fileInputRef = useRef(null);
  const [newsData, setNewsData] = useState({
    ...NEWSINITAIL,
    publishedDate: moment().format("YYYY-MM-DDTHH:mm:ss"),
  });
  const { schools = [], schoolUuid = "", profile = {} } = others;
  const [organization, OrganizationDropDown, setOrganization] = useDropdown(
    "School",
    schoolUuid || first(schools).value,
    others?.schools || []
  );
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Populate form fields with selected news item details when selectedNewsId changes
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
        setIsEditMode(true);
      }
    }
  }, [selectedNewsId]);

  const validateForm = () => {
    const errors = {};
    fields.forEach((field) => {
      if (!newsData[field.name] && field.name !== "thumbNail") {
        errors[field.name] = "This field is required";
      }
    });
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "thumbNail") {
      setNewsData((prev) => ({
        ...prev,
        thumbNail: target.files.length > 0 ? target.files[0] : null,
      }));
    } else {
      setError({ msg: "", type: "" });
      const isDateTimeLocal = target.type === "date-time";
      const rawValue = isDateTimeLocal ? moment(value).toISOString() : value;
      setNewsData((prev) => ({ ...prev, [name]: rawValue }));
    }
  };

  const handleCancelEdit = () => {
    setNewsData({ ...NEWSINITAIL });
    setSelectedNewsId(null);
    setIsEditMode(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // If form validation fails, don't submit

    let imgRes = await uploadImg({ img: newsData.thumbNail, category: "news" });
    if (imgRes) {
      const formattedDate = moment(newsData.publishedDate).toISOString();
      setNewsData(NEWSINITAIL);
    } else {
      //TODO: handle failure
    }
    setError({ msg: "", type: "" });

    const formattedDate = moment(newsData.publishedDate).toISOString();
    try {
      setIsLoading(true);
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
      setError({ msg: error.message || "An error occurred", type: "error" });
    } finally {
      setIsLoading(false);
      setNewsData({ ...NEWSINITAIL });
    }
    const fileInput = document.getElementById("thumbNail");
    if (fileInput) {
      fileInput.value = ""; // Reset value to empty string
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
                className="w-full flex justify-center py-2 px-4 flex-col"
              >
                <label
                  htmlFor={field.name}
                  className={`w-32 md:w-40 lg:w-40 p-2 text-lg font-bold`}
                >
                  {field.label}
                </label>
                <input
                  ref={fileInputRef}
                  name={field.name}
                  className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600 text-black"
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
                {validationErrors[field.name] &&
                  newsData[field.name].trim() === "" && (
                    <span className="text-red-500 text-sm mt-1">
                      {validationErrors[field.name]}
                    </span>
                  )}
              </div>
            ))}
            {profile.userType === ADMIN && <OrganizationDropDown />}
          </div>
          {isEditMode ? (
            <div className="flex">
              <button
                onClick={handleSubmit}
                className="w-20 my-5 mx-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white hover:bg-tteal"
              >
                Update
              </button>
              <button
                onClick={handleCancelEdit}
                className="w-20 my-5 mx-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-red-400 hover:bg-red-500 text-white"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="w-20 my-5 mx-auto font-bold p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-blue-400 text-white"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {isLoading && <Loader />}
      {hasError.msg && (
        <Notification type={hasError.type} message={hasError.msg} />
      )}
    </>
  );
};

export default NewsForm;
