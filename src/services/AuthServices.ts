import axios, { AxiosInstance } from "axios";
import ApiConfig from "@/config/ApiConfig";

const axiosInstance:AxiosInstance = axios.create(ApiConfig);

const AuthService = {
    login: (params= {}) => {
        return axiosInstance.post('/login', params);
    },
    
}

export default AuthService;