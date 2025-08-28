import axios from "axios";
import axiosInstance from "../utils/axios";

export const registerQuery = async ({ name, email, mobile, message }) => {
  const { data } = await axiosInstance.post("/contact", {
    name,
    email,
    mobile,
    message,
  });
  return data;
};
