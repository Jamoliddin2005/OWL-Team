import {toast} from "react-toastify";

export function HandleResponse(response) {
  if (response.success) {
    toast.success(response.message);
    return true;
  } else if (!response.success) {
    toast.error(response.message);
    return false;
  }
}