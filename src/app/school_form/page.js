"use client";
import { handleError } from "@/lib/helpers/handleErrors";
import { uploadImg } from "@/lib/services/files/fileServices";
import { addSchool } from "@/lib/services/schools/schoolservices";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const [schoolData, setSchoolData] = useState({
    name: "",
    address: "",
    city: "",
    pinCode: "",
    phone: "",
    whatsappNo: "",
    establishedDate: "",
    state: "",
    category: "",
    timing: "",
    feeStructure: "",
    image: "",
    principalUuid: "11adb2ba-4b00-4774-8a3a-9cf16d20e44d",
    createdBy: "0f7b051d-5470-442e-b066-243950f1881c",
    updatedBy: "0f7b051d-5470-442e-b066-243950f1881c",
  });

  const eventChange = (e) => {
    const { name, value } = e.target;
    if(name==="image"){
        setSchoolData((prev)=>({...prev,image:e.target.files[0]}))
    }else{
        setSchoolData((prevschoolData) => ({
            ...prevschoolData,
            [name]: value,
          }));
    }

  }; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    let imgRes = await uploadImg({ img: schoolData.image, category: "schools" });
    if (imgRes) {
    const res = await addSchool(schoolData);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white p-16">
        <div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={schoolData.name}
              onChange={eventChange}
              placeholder="Enter School name"
            />
          </div>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="address"
                value={schoolData.address}
                onChange={eventChange}
                placeholder="Enter address"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="city"
                value={schoolData.city}
                onChange={eventChange}
                placeholder="Enter address"
              />
            </div>
            <div>
              <label
                htmlFor="pinCode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Pin code
              </label>
              <input
                type="zip"
                id="pincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="pinCode"
                value={schoolData.pinCode}
                onChange={eventChange}
                placeholder="######"
                pattern="[0-5]"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="phone"
                value={schoolData.phone}
                onChange={eventChange}
                placeholder="+91"
                pattern="{0-9}"

              />
            </div>
            <div>
              <label
                htmlFor=" whatsappNo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Whatsapp No.
              </label>
              <input
                type="tel"
                id=" whatsappNo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="whatsappNo"
                value={schoolData.whatsappNo}
                onChange={eventChange}
                placeholder="+91"
                pattern=""
              />
            </div>
            <div>
              <label
                htmlFor="establishedDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Established Date
              </label>
              <input
                type="datetime-local"
                id="establishedDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="establishedDate"
                value={schoolData.establishedDate}
                onChange={eventChange}
                placeholder="+"
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="state"
                value={schoolData.state}
                onChange={eventChange}
                placeholder="State"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="category"
                value={schoolData.category}
                onChange={eventChange}
                placeholder="Primary"
              />
            </div>
            <div>
              <label
                htmlFor="timing"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Timing
              </label>
              <input
                type="tell"
                id="timing"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="timing"
                value={schoolData.timing}
                onChange={eventChange}
                placeholder="Am/Pm"
              />
            </div>
            <div>
              <label
                htmlFor="feeStructure"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Fee Structure (per month)
              </label>
              <input
                type="tell"
                id="feeStructure"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="feeStructure"
                value={schoolData.feeStructure}
                onChange={eventChange}
                placeholder="rupees"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="image"
                accept="image\*"
                value={schoolData.image?.File?.name}
                onChange={eventChange}
                placeholder="Image url"
              />
            </div>
            <div>
              <label
                htmlFor="principalUuid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                principalUuid
              </label>
              <input
                type="text"
                id="principalUuid"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="principalUuid"
                value={schoolData.principalUuid}
                onChange={eventChange}
                placeholder="Enter uid"
              />
            </div>
            <div>
              <label
                htmlFor="createdBy"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                createdBy
              </label>
              <input
                type="text"
                id="createdBy"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="createdBy"
                value={schoolData.createdBy}
                onChange={eventChange}
                placeholder="Enter name"
              />
            </div>
            <div>
              <label
                htmlFor="updatedBy"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Updated By
              </label>
              <input
                type="text"
                id="updatedBy"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="updatedBy"
                value={schoolData.updatedBy}
                onChange={eventChange}
                placeholder="Enter updatedBy"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
