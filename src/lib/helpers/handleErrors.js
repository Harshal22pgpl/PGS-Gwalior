import { toast } from "react-toastify";

export const handleError = (error) => {
  try {
    if (error?.response?.data?.message) {
      let errMsg = error.response.data.message
      toast.error(error.response.data.message, {
        toastId: errMsg
      });
    } else if (error?.response?.data?.payload) {
      toast.error('Validation error some of field are not filled !');
    }
    else if (error?.request) {
      // Handle network errors
      toast.error("Network error. Please try again.");
    } else {
      // Handle other errors
      toast.error("Something went wrong. please try again.");
    }
  } catch (error) {

  }

};