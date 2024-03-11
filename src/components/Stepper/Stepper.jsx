import React, { useState } from "react";
import SingleForm from "@/components/StepForm/SingleForm"; // Import your single form component

const ParentComponent = () => {
  const formLength = 3; // Total number of form steps

  const [page, setPage] = useState(0);
  const [values, setValues] = useState({
    ContactPersonName: "",
    Mobile: "",
    password: "",
    confirmPassword: "",
    username: "",
    city: "1",
    address: "",
    zip: "",
    terms: "",
  });

  const states = [
    { id: "0", name: "Paris" },
    { id: "1", name: "London" },
    { id: "2", name: "Berlin" },
    { id: "3", name: "Warsaw" },
  ];

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };

  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setTimeout(() => {
    }, 2000);
    return response;
  };

  const setForm = (step) => {
    setPage(step);
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="grid gap-4 place-content-center pt-16 items-center flex justify-center h-1/3 place-items-center">
      <ul className="flex justify-between w-full">
        {["Person Info", "Other Info", "Login Info"].map((label, index) => (
          <li
            key={index}
            onClick={() => setForm(index)}
            className={page === index ? "bg-blue-300 p-1 w-2/6 rounded-lg" : "bg: transparent"}
          >
            <div className="flex items-center">
              <span className="stepper-head-icon">
                {" "}
                {/* Your SVG icon */}
              </span>
              <span
                className={
                  page === index
                    ? "ml-2 text-white font-medium"
                    : "ml-2 text-blue-300 cursor-pointer"
                }
              >
                {label}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex-1">
        {/* Render a single form component passing appropriate props */}
        <SingleForm
          step={page}
          formValues={values}
          onChange={onChange}
          states={states}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 place-content-center items-center">
        <button
          onClick={handlePrev}
          className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 "
          disabled={page === 0}
        >
          Prev
        </button>
        {page === formLength - 1 ? (
          <button
            onClick={handleSubmit}
            className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
