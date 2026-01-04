import axiosInstance from "./axiosInstance";

export const getRequest = async (url) => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export const postRequest = async (url, data) => {
  const response = await axiosInstance.post(url, data);
  return response.data;
};