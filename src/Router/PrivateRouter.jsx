/* eslint-disable react/prop-types */
import useAuth from "../Auth/Hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    // contextAPI
    const { users, loading} = useAuth();
    // useLocation
    const location = useLocation();
    if(loading){
        return <div className="flex justify-center py-8"><span className="loading loading-ring loading-lg"></span></div>
    }

    if(users?.email){
        return children;
    }
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default PrivateRouter;