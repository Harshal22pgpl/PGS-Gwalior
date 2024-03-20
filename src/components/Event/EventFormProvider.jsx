"use client";
import { useState } from "react";

const EventFormParticular = () => {
  const [inputs, setInputs] = useState({
    floating_email: "",
    floating_password: "",
    floating_repeat_password: "",
    floating_first_name: "",
    floating_last_name: "",
    floating_phone: "",
    floating_company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  // Array of input field data
  const fields = [
    { name: "floating_email", label: "Email address", type: "email" },
    { name: "floating_password", label: "Password", type: "password" },
    {
      name: "floating_repeat_password",
      label: "Confirm password",
      type: "password",
    },
    { name: "floating_first_name", label: "First name", type: "text" },
    { name: "floating_last_name", label: "Last name", type: "text" },
    {
      name: "floating_phone",
      label: "Phone number (123-456-7890)",
      type: "tel",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    },
    { name: "floating_company", label: "Company (Ex. Google)", type: "text" },
  ];

  return (
    <form className="max-w-md mx-auto  p-5" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="relative z-0 w-full mb-5 group">
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={inputs[field.name]}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
            pattern={field.pattern ? field.pattern : null}
          />
          <label
            htmlFor={field.name}
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {field.label}
          </label>
        </div>
      ))}
      <button
        type="submit"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Submit
      </button>
    </form>
  );
};

export default EventFormParticular;
