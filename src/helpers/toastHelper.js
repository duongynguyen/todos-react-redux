import { toast } from "react-toastify";

const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export const toastError = error => {
  let message = null;
  if (typeof error === "object" && error.message) {
    message = error.message;
  }
  if (message !== null && typeof message !== "undefined" && message !== "") {
    toast.error(message, options);
  }
};
