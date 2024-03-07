import { useContext } from "react"
import { authContext } from "../Pages/Provider/AuthProvider"


const useAuth = () =>{
    const auth = useContext(authContext)

    return auth
}

export default useAuth