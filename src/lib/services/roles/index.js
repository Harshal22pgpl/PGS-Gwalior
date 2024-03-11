import { handleError } from "@/lib/helpers/handleErrors";
import { ROLES } from "..";
import { toast } from "react-toastify";
import { api } from "@/lib/middleware/apiInceptor";

export const addRole = async (payload) => {
  try {
    let res = await api.post(ROLES, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const getAllRoles = async () => {
  try {
    let res = await api.get(ROLES);
    return res.data.payload.data;
  } catch (error) {
    handleError(error);
  }
};
