import axios from "axios";

const BASE_URL = "https://b-store-app.herokuapp.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
