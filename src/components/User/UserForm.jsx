"use client";
import { USER_INITIAL, userTypes } from "@/lib/constants";
import React, { useEffect, useState } from "react";
import UserTypesDropDown from "../Dropdown/UserTypesDropDown";
import { addUser, updateUser } from "@/lib/services/user/userServices";
import ProfileUploader from "../UploadFile/DpUploader";
import { useUserConext } from "@/features/context/UserContext";
import { first, isEmpty } from "lodash";
import { uploadImg } from "@/lib/services/files/fileServices";
import { redirect } from "next/navigation";

const UserForm = ({ roles = [] }) => {
  const [user, setUser] = useState(USER_INITIAL);
  const [image, setImage] = useState(null);
  const { userState, setUserState } = useUserConext();
  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setUser((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleUser = async () => {
    let imgRes = await uploadImg({ img: image, category: "profile" });
    if (imgRes) {
      await addUser({ ...user, profilePicture: imgRes });
      setUser(USER_INITIAL);
    } else {
      //TODO: handle failure
    }
  };
  const handleCancel = () => {
    setUserState((prev) => ({ ...prev, user: {} }));
    setUser(USER_INITIAL);
  };

  const handleUpdate = async () => {
    if (user.profilePicture !== image) {
      let imgRes = await uploadImg({ img: image, category: "profile" });
      if (imgRes) {
        let res = await updateUser({ ...user, profilePicture: imgRes });
        setUser(USER_INITIAL);
      } else {
        //TODO: hanlde error
      }
    } else {
      let res = await updateUser(user);
      setUser(USER_INITIAL);
    }
  };
  useEffect(() => {
    let userRoles = first(userState?.user?.Roles);
    setImage(userState.user.profilePicture);
    setUser({ ...userState.user, roles: [userRoles?.uuid] });
  }, [userState.user]);

  return (
    <div class="p-2 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
                <p className="font-medium text-lg mt-5">
                  Upload Profile Pciture
                </p>
                <ProfileUploader image={image} setImage={setImage} />
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-2">
                    <label for="address">First Name</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="firstName"
                      value={user.firstName}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="lastName">Last Name</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="lastName"
                      value={user.lastName}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="email"
                      value={user.email}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="email@domain.com"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label for="Phone">Phone</label>
                    <input
                      type="tel"
                      onChange={handleChange}
                      name="phone"
                      value={user.phone}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="address">Address </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="address"
                      value={user.address}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="city">City</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="city"
                      value={user.city}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="password">Password</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        autoComplete="off"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={user.password}
                        placeholder="password"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>
                  <div class="md:col-span-1">
                    <label for="state">State</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        onChange={handleChange}
                        value={user.state}
                        placeholder="State"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>

                  <div class="md:col-span-1">
                    <label for="pinCode">Pin code</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="pinCode"
                      value={user.pinCode}
                      class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-5">
                    <div class="inline-flex items-center gap-2">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="isActive"
                          checked={user.isActive}
                          value={user.isActive}
                          onChange={handleChange}
                          class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Mark as Active
                        </span>
                      </label>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="isSuspicious"
                          checked={user.isSuspicious}
                          value={user.isSuspicious}
                          onChange={handleChange}
                          class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Mark as Suspicious
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <UserTypesDropDown
                      roles={roles}
                      uuid={user?.roles[0]}
                      state={setUser}
                    />
                  </div>
                  <div class="md:col-span-5 text-center">
                    <div class="inline-flex items-end gap-2">
                      {isEmpty(userState.user) ? (
                        <button
                          onClick={handleUser}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={handleUpdate}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Update
                        </button>
                      )}
                      {!isEmpty(userState.user) && (
                        <button
                          onClick={handleCancel}
                          class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
