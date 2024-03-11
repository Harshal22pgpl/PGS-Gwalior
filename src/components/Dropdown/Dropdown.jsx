"use client";

import { useState } from "react";

const Dropdown = ({ name, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDoubleDropdownOpen(false);
  };

  const toggleDoubleDropdown = () => {
    setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        id="mega-menu-full-dropdown-button"
        data-collapse-toggle="mega-menu-full-dropdown"
        className="flex items-center text-xs justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
      >
        {name}
        {/* ... (Icon for dropdown) */}
      </button>
      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="multi-dropdown"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="multiLevelDropdownButton"
          >
            {items.map((item) => (
              <li key={item.label}>
                {item.children || item ? (
                  <button
                    id="doubleDropdownButton"
                    onClick={toggleDoubleDropdown}
                    className="flex text-xs items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    type="button"
                  >
                    {item.label || item}
                    {/* ... (Icon for double dropdown) */}
                  </button>
                ) : (
                  <a
                    href={item.route}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {item.label}
                  </a>
                )}

                {/* Double Dropdown */}
                {isDoubleDropdownOpen && item.children && (
                  <div
                    id="doubleDropdown"
                    className="absolute z-20 top-10 mt-0 ml-44 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-xs text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.route}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
