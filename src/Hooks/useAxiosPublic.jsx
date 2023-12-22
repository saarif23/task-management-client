import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://task-management-server-liart-phi.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;