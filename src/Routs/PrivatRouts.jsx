import { Navigate } from "react-router-dom"
import useAuth from "../Hook/useAuth"

const PrivatRouts = ({children}) =>{
    const {user, loading} = useAuth()

    if (loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user){
        return children
    }
    return <Navigate to='/login/'></Navigate>

}

export default PrivatRouts