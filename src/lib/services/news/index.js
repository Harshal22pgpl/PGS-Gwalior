import { api } from "@/lib/middleware/apiInceptor";
import { ADD_NEWS } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/lib/helpers/handleErrors";
import { isEmpty } from "lodash";

export const addNews = async (payload) => {
  const res = await api.post(ADD_NEWS, payload);
  if (res) {
    return res;
  }
};

export const getAllNews = async (schoolUuid = "") => {
  let res;
  try {
    if (!schoolUuid) {
      res = await api.get(ADD_NEWS);
    } else {
      res = await api.get(`${ADD_NEWS}/all/${schoolUuid}`);
    }
    return res.data.payload.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateNews = async (payload) => {
  try {
    delete payload.Roles;
    const res = await api.put(`${ADD_NEWS}/${payload.uuid}`, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (err) {
    console.log("error");
  }
};

export const deleteNews = async (uuid) => {
  try {
    const res = await api.delete(`${ADD_NEWS}/${uuid}`);
    toast.success(res.data.message);
  } catch (err) {
    // handleError(error);
    console.log("error");
  }
};

export const getNewsDetails = async (uuid) => {
  try {
    const res = await api.get(`${ADD_NEWS}/${uuid}`);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
