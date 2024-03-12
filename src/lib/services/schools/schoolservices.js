import { api } from "@/lib/middleware/apiInceptor";
import { SCHOOLS } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/lib/helpers/handleErrors";
export const addSchool = async (payload) => {
  try {
    let res = await api.post(SCHOOLS, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};

export const getSchools = async () => {
  try {
    let res = await api.get(SCHOOLS);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
export const getSchoolDetails = async () => {
  try {
    let res = await api.get(`${SCHOOLS}/indore`);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
