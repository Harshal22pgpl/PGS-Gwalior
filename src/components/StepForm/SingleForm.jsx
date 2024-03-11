// ReusableForm.jsx

import React from "react";

const ReusableForm = ({ step, formValues, onChange, states }) => {
  switch (step) {
    case 0:
      return (
        <div>
          {/* Render fields for the first step */}
          <form className="bg-white shadow-md h-96 px-24 pt-5 pb-10 mb-8 rounded-md">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Other Info</h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            value={formValues.address}
            onChange={onChange}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="State"
          >
            City
          </label>
          <select
            className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            name="city"
            onChange={onChange}
            value={formValues.city}
          >
            {states.map((state) => {
              return (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              );
            })}
          </select>
        </div>{" "}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Zip"
          >
            Zip
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
            name="zip"
            value={formValues.zip}
            onChange={onChange}
            placeholder="Zip"
          ></input>
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
          {/* Other fields for step 2 */}
        </div>
      );
    case 2:
      return (
        <div>
          {/* Render fields for the third step */}
          <form className="bg-white shadow-md h-96 rounded px-24 pt-5 pb-10 mb-8 rounded-md ">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Login Info</h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            onChange={onChange}
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            value={formValues.password}
            onChange={onChange}
            type="password"
            placeholder="******************"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            ConfirmPassword
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formValues.confirmPassword}
            onChange={onChange}
            placeholder="******************"
          ></input>
        </div>
        <div className="flex justify-items-center content-center items-center">
          <label
            className="block text-gray-700 px-2  text-sm font-bold mb-2"
            htmlFor="Terms"
          >
            Terms
          </label>
          <input
            name="terms"
            value={formValues.terms}
            onChange={onChange}
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          ></input>
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
          {/* Other fields for step 1 */}
        </div>
      );
    case 1:
      return (
        <div>
          {/* Render fields for the second step */}
          <form className="bg-white shadow-md h-96 px-24 pt-5 pb-10 mb-8 rounded-md">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Other Info</h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            value={formValues.address}
            onChange={onChange}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="State"
          >
            City
          </label>
          <select
            className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            name="city"
            onChange={onChange}
            value={formValues.city}
          >
            {states.map((state) => {
              return (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              );
            })}
          </select>
        </div>{" "}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Zip"
          >
            Zip
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
            name="zip"
            value={formValues.zip}
            onChange={onChange}
            placeholder="Zip"
          ></input>
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
          {/* Other fields for step 2 */}
        </div>
      );
    case 2:
      return (
        <div>
          {/* Render fields for the third step */}
          <form className="bg-white shadow-md h-96 rounded px-24 pt-5 pb-10 mb-8 rounded-md ">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Login Info</h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            onChange={onChange}
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            value={formValues.password}
            onChange={onChange}
            type="password"
            placeholder="******************"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            ConfirmPassword
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formValues.confirmPassword}
            onChange={onChange}
            placeholder="******************"
          ></input>
        </div>
        <div className="flex justify-items-center content-center items-center">
          <label
            className="block text-gray-700 px-2  text-sm font-bold mb-2"
            htmlFor="Terms"
          >
            Terms
          </label>
          <input
            name="terms"
            value={formValues.terms}
            onChange={onChange}
            className="shadow cursor-pointer border rounded"
            type="checkbox"
          ></input>
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
          {/* Other fields for step 3 */}
        </div>
      );
    default:
      return null;
  }
};

export default ReusableForm;
