import axios from "axios"
import URL from "./Urls"

const axiosInstance = axios.create({
    baseURL: URL.ROOT()
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error)=> {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error)=> {
        if (error.response && error.response.status === 401) {
            console.log("wrapper message");
            
        }
    return Promise.reject(error)
    }
)

export default axiosInstance