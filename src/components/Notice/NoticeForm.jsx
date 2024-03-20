"use client";
import React, { useState, useEffect, useRef } from "react";
import { addNotice, updateNotice } from "@/lib/services/notices/index";
import Loader from "@/components/Loader/Loader";
import Notification from "@/components/Toast/Notification";
import { NOTICES, ADMIN } from "@/lib/constants/index";
import moment from "moment";
import { first } from "lodash";
import useDropdown from "@/hooks/useDropDown";
import { uploadImg } from "@/lib/services/files/fileServices";

const fields = [
  { name: "title", label: "Title", type: "text", placeholder: "Enter Title" },
  { name: "description", label: "Description", type: "text", placeholder: "Enter Description" },
  { name: "endDate", label: "End Date", type: "datetime-local", placeholder: "Select End Date" },
  { name: "file", label: "File", type: "file", placeholder: "Upload File" },
];

const NoticeForm = ({ selectedNoticeId, setSelectedNoticeId, onFormSubmit, noticeList, ...others }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [validationErrors, setValidationErrors] = useState({});
  const fileInputRef = useRef(null);
  const [notice, setNoticeData] = useState({
    ...NOTICES,
    endDate: moment().format("YYYY-MM-DDTHH:mm:ss"),
  });
  const { schools = [], schoolUuid = "", profile = {} } = others;
  const [organization, OrganizationDropDown, setOrganization] = useDropdown(
    "School",
    schoolUuid || first(schools).value,
    others?.schools || []
  );
  const [isEditMode, setIsEditMode] = useState(false);
  const [prevImagePreview, setPrevImagePreview] = useState(null);
  const [prevImagePreviewText, setPrevImagePreviewText] = useState("Previously Used Image");

  useEffect(() => {
    if (selectedNoticeId) {
      const selectedNotice = noticeList.find((notice) => notice.uuid === selectedNoticeId);
  
      if (selectedNotice) {
        setNoticeData({
          title: selectedNotice.title,
          description: selectedNotice.description,
          file: selectedNotice.file,
          endDate: moment(selectedNotice.endDate).format("YYYY-MM-DDTHH:mm:ss"),
        });
        setIsEditMode(true);
        // Clear validation errors when entering edit mode
        setValidationErrors({});
        setPrevImagePreview(selectedNotice.file); // Set previous image preview
        setPrevImagePreviewText("Current Image"); // Update text for current image
      }
    } else {
      setNoticeData({
        ...NOTICES,
        endDate: moment().format("YYYY-MM-DDTHH:mm"),
      });
      setIsEditMode(false);
      // Clear validation errors when exiting edit mode
      setValidationErrors({});
      setPrevImagePreview(null); // Clear previous image preview
      setPrevImagePreviewText("Previously Used Image"); // Reset text for previous image
    }
  }, [selectedNoticeId, noticeList]);
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    
    if (name === "file") {
      setNoticeData((prev) => ({
        ...prev,
        file: target.files.length > 0 ? target.files[0] : null,
      }));
    } else {
      setError({ msg: "", type: "" });
      const isDateTimeLocal = target.type === "datetime-local";
  
      let rawValue = value;
  
      // Handle datetime-local input
      if (isDateTimeLocal) {
        // Construct the date and time string in the required format
        const dateValue = moment(value).format("YYYY-MM-DD");
        const timeValue = moment(value).format("HH:mm");
        rawValue = `${dateValue}T${timeValue}`;
      }
  
      setNoticeData((prev) => ({ ...prev, [name]: rawValue }));
  
      // Clear validation error for the current field
      setValidationErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };
  

  const handleCancelEdit = () => {
    setNoticeData({ ...NOTICES });
    setSelectedNoticeId(null);
    setIsEditMode(false);
    setPrevImagePreview(null);
    setPrevImagePreviewText("Previously Used Image");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ msg: "", type: "" });

    try {
      setIsLoading(true);

      if (!validateForm()) return;

      const formattedDate = moment(notice.endDate).toISOString();
      let imgRes = null;

      if (notice.file && notice.file !== prevImagePreview) {
        imgRes = await uploadImg({ img: notice.file, category: "notices" });
        setPrevImagePreview(notice.file); // Update previous image preview if a new image is uploaded
        setPrevImagePreviewText("Current Image"); // Update text for current image
      }

      if (isEditMode) {
        await updateNotice({
          ...notice,
          file: imgRes ? imgRes : notice.file,
          endDate: formattedDate,
          uuid: selectedNoticeId,
          organizationUuid: organization || schoolUuid,
        });
      } else {
        await addNotice({
          ...notice,
          file: imgRes,
          endDate: formattedDate,
          organizationUuid: organization || schoolUuid,
        });
        await addNotice({
          ...notice,
          file: imgRes,
          endDate: formattedDate,
          organizationUuid: organization || schoolUuid,
        });
      }

      onFormSubmit();
    } catch (error) {
      setError({ msg: error.message || "An error occurred", type: "error" });
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
      setNoticeData({
        ...NOTICES,
        endDate: moment().format("YYYY-MM-DDTHH:mm"),
      });
      const fileInput = document.getElementById("file");
      if (fileInput) {
        fileInput.value = ""; // Reset value to empty string
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    fields.forEach((field) => {
      if (field.type !== "file" && !notice[field.name].trim()) {
        errors[field.name] = "This field is required";
      }
    });
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center bg-[url('/MessageSvg.svg')]">
        <h1 className="text-center mx-auto w-full my-3 text-4xl font-bold text-tgreen">
          Notice Details Form
        </h1>
        <div
          className="w-11/12 rounded-lg flex flex-col justify-center items-center bg-bgreen opacity-75 p-5"
          onSubmit={handleSubmit}
        >
          <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div>
            {profile.userType === ADMIN && <OrganizationDropDown />}
            </div>
            {fields.map((field) => (
              <div key={field.name} className="w-full flex flex-col py-2 px-4">
                <label htmlFor={field.name} className="w-32 md:w-40 lg:w-40 p-2 text-xl font-bold">
                  {field.label}
                </label>
                {field.type === "file" ? (
                  <>
                    <input
                      ref={fileInputRef}
                      name={field.name}
                      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                      id={field.name}
                      type={field.type}
                      onChange={handleChange}
                      required
                    />
                    {prevImagePreview && (
                      <div>
                        <p className="font-medium text-lg mt-5">{prevImagePreviewText}</p>
                        <img
                          src={prevImagePreview}
                          alt={prevImagePreviewText}
                          style={{ maxWidth: "100px", marginTop: "10px" }}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <input
                    name={field.name}
                    className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black ${
                      validationErrors[field.name] ? "border-red-500" : ""
                    }`}
                    id={field.name}
                    type={field.type}
                    value={notice[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                  />
                )}
                {validationErrors[field.name] && (
                  <span className="text-red-500 text-sm mt-1">{validationErrors[field.name]}</span>
                )}
                
              </div>

              
            ))}
        
          </div>
          {isEditMode ? (
            <div className="flex">
              <button
                onClick={handleSubmit}
                className="w-20 my-5 mx-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white hover:bg-tgreen"
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
      {hasError.msg && <Notification type={hasError.type} message={hasError.msg} />}
    </>
  );
};

export default NoticeForm;