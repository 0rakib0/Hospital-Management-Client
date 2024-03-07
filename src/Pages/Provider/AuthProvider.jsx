import { createContext } from "react";
import useAxious from "../../Hook/SecureAxious";

export const authContext = createContext()

const AuthProvider = ({children}) =>{
    const secureAxious = useAxious()


    const Login = (email, password) =>{
        secureAxious.post('auth/token/', {email, password})
        .then(res =>{
            console.log(res.data)
        })
    }


    const authInfo = {
        Login
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider