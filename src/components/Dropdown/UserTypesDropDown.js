"use client";
import { SELECT_TYPE } from "@/lib/constants";
import React, { useEffect, useState } from "react";

const UserTypesDropDown = ({ state, roles = [], uuid = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(SELECT_TYPE);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (role) => {
    let roleUuid = role.uuid;
    state((prev) => ({ ...prev, type: role.userType, roles: [roleUuid] }));
    setSelectedOption(role.userType);
    setIsOpen(false);
  };
  useEffect(() => {
    if (uuid && Array.isArray(roles)) {
      const type = roles.find((role) => role?.uuid === uuid)?.name;
      setSelectedOption(type || SELECT_TYPE);
    }
  }, [roles, uuid]);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {selectedOption}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {roles?.map((role) => (
              <button
                key={role.uuid}
                className="text-gray-700 block px-4 py-2 text-sm w-full text-left"
                onClick={() => handleMenuItemClick(role)}
              >
                {role.userType}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTypesDropDown;
