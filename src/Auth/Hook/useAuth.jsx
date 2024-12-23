import { useContext } from "react";
import ContextAPI from "../Context/ContextAPI";


const useAuth = () => {
    const context = useContext(ContextAPI)
    return context
};
export default useAuth;