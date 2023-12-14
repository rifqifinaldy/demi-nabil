import axios from "axios";

const AXIOS_INSTANCE = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export { AXIOS_INSTANCE };
