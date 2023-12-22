import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
export const axiosSecure = axios.create({
    baseURL: "https://task-management-server-liart-phi.vercel.app"
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Access-token')
        console.log("token line number 16  ", token);
        if (token) {
            config.headers.authorization = token;
            return config;
        }

    }, function (error) {
        return Promise.reject(error);
    });


    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status;

        /// 401 and 403  status error user logout 
        if (status === 401 || status === 403) {
            logout();
            navigate("/")
        }
        console.log("error in the  interceptor ", status);
        return Promise.reject(error)
    })






    return axiosSecure;


};

export default useAxiosSecure;

