import React, { useState } from "react";

const useDropdown = (label, defaultState, options, ...rest) => {
  const [state, setState] = useState(defaultState);
  const Dropdownmaker = () => (
    <div className={rest?.className || "w-full flex justify-center py-2 px-4"}>
      <label
        htmlFor={label}
        className="w-32 md:w-40 lg:w-40 p-2 text-xl font-bold"
      >
        {label}
      </label>
      <select
        className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        {options.map(({ value, label }, index) => (
          <option key={label + index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
  return [state, Dropdownmaker, setState];
};

export default useDropdown;
