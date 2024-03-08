import { createContext, useState } from "react";
import useAxious from "../../Hook/SecureAxious";
import { Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const authContext = createContext()

const AuthProvider = ({children}) =>{
    const secureAxious = useAxious()
    const [loading, setLoading] = useState(false)
    const isTokenAvailable = localStorage.getItem('authToken')
    const isUser = (JSON.parse(isTokenAvailable)?.access)
    const [authToken, setAuthToken] = useState(isTokenAvailable ? JSON.parse(isTokenAvailable):null)
    const [user, setUser] = useState(isTokenAvailable? (jwtDecode(isUser).email):null)
    

    const Login = (email, password) =>{
        secureAxious.post('auth/token/', {email, password})
        .then(res =>{
            if(res.status == 200){
                const token = res.data
                const userInfo = jwtDecode(res.data.access).email
                setAuthToken(token)
                setUser(userInfo)
                if (loading){
                    setLoading(false)
                }
                localStorage.setItem('authToken', JSON.stringify(token))
            }else{
                alert('Something Wrong!')
            }
        })
    }


    const authInfo = {
        user,
        loading,
        Login
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider