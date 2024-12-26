import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

// axios instance
const axiosInstance = axios.create({
  baseURL: "https://trackbook-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
    // useAuth
    const {logout} = useAuth();
    // useNavigate
    const navigate = useNavigate();

  // axios interceptor
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        
        // custom restrictions
        if(error.status === 401 || error.status === 403){
            logout()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.log(error))
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);

  return axiosInstance;
};

export default useAxios;
