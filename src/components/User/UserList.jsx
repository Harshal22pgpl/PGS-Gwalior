"use client";
import moment from "moment";
import React, { useState } from "react";

const Pagination = dynamic(() => import("@/components/Pagination/Pagination"));
import dynamic from "next/dynamic";
import { deleteUser, getUsers } from "@/lib/services/user/userServices";
import { useUserConext } from "@/features/context/UserContext";
import { scrollToTop } from "@/lib/helpers/scrollToTopOfContainer";
import ConfirmationModal from "../Modal/ConfirmationModal";

const UserList = ({ users = {} }) => {
  const [allUsers, setUsers] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const { userState, setUserState } = useUserConext();
  const [uuid, setUuid] = useState("");
  const handlePageChange = async (page) => {
    setCurrentPage(page);
    let res = await getUsers({ limit: 5, page });
    setUsers(res);
  };

  const handleEditUser = (user) => {
    scrollToTop();
    setUserState((prev) => ({ ...prev, user }));
  };

  const handleModalToggle = (id) => {
    setUuid(id);
    setShow(!show);
  };

  const handleDeleteConfirmation = async () => {
    await deleteUser(uuid);
    setShow(false);
    setUsers((prev) => {
      const updatedData = prev.data.filter((user) => user.uuid !== uuid);
      return { data: updatedData, count: prev.count - 1 };
    });
    setUuid("");
  };

  return (
    <>
      <ConfirmationModal
        show={show}
        handleModalToggle={handleModalToggle}
        handleDeleteConfirmation={handleDeleteConfirmation}
      />
      <div className="flex justify-start p-2">
        <p className="text-center text-lg ml-2 font-mono">
          {" "}
          Total {allUsers.count} Users
        </p>
      </div>
      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th class="px-4 py-3">Name</th>
                <th class="px-4 py-3">Phone</th>
                <th class="px-4 py-3">Active</th>
                <th class="px-4 py-3">Created</th>
                <th class="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {allUsers?.data?.map((user) => (
                <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                  <td class="px-4 py-3">
                    <div class="flex items-center text-sm">
                      <input
                        id="helper-checkbox"
                        aria-describedby="helper-checkbox-text"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          class="object-cover ml-2 w-full h-full rounded-full"
                          src={
                            user.profilePicture
                              ? user.profilePicture
                              : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                          }
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p class="font-semibold">
                          {user.firstName + " " + user.lastName}
                        </p>
                        <p class="text-xs text-gray-600 dark:text-gray-400">
                          {user.type}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-sm">{user.phone}</td>
                  <td class="px-4 py-3 text-xs">
                    <span
                      class={`px-2 py-1 font-semibold leading-tight   ${
                        user.isActive
                          ? "bg-teal-100 text-teal-700"
                          : "bg-red-700 text-white"
                      } rounded-full dark:${
                        user.isActive ? "bg-teal-700" : "bg-red-700"
                      } dark:text-teal-100`}
                    >
                      {user.isActive ? "Approved" : "Not -Approved"}{" "}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-sm">
                    {moment(user.createdAt).format("DD-MM-YYYY")}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="bg-teal-100 hover:bg-teal-700 hover:text-white px-3 py-1 font-semibold leading-tight text-teal-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleModalToggle(user.uuid)}
                      className="bg-red-700 hover:bg-red-900 p-2 px-2 py-1 font-semibold leading-tight text-white ml-2"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          totalItems={users.count}
          itemsPerPage={5}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default UserList;
