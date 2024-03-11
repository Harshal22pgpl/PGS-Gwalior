import { api } from "@/lib/middleware/apiInceptor";
import { USERS } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/lib/helpers/handleErrors";
import { redirect } from "next/navigation";
export const addUser = async (payload) => {
  try {
    let res = await api.post(USERS, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const updateUser = async (payload) => {
  try {
    delete payload.Roles;
    const res = await api.put(`${USERS}/${payload.uuid}`, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const getUsers = async ({ limit = 5, page = 1 }) => {
  try {
    let res = await api.get(USERS, {
      params: {
        limit: limit,
        page: page,
      },
    });
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (uuid) => {
  try {
    const res = await api.delete(`${USERS}/${uuid}`);
    toast.success(res.data.message);
  } catch (error) {
    handleError(error);
  }
};

export const loadProfile = async( ) =>{
  try {
    const res = await api.get(`${USERS}/profile`)
    return res.data.payload
  } catch (error) {
    handleError(error)
  }
}