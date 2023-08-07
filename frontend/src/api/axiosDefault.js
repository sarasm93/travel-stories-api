import axios from "axios";

// axios.defaults.baseURL = "https://travel-stories-api-dfd870d3ac32.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();