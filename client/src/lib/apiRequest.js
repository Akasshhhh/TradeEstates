import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL + "/api"

const apiRequest = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

export default apiRequest