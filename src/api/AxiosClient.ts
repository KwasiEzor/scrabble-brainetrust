import axios from "axios";

const AxiosClient = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    withCredentials:true
})

export default AxiosClient