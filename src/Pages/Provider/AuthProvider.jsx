import { createContext, useEffect, useId, useState } from "react";
import useAxious from "../../Hook/SecureAxious";
import { Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';
export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const secureAxious = useAxious()
    const [loading, setLoading] = useState(false)
    const isTokenAvailable = localStorage.getItem('authToken')
    const isUser = (JSON.parse(isTokenAvailable)?.access)
    const [authToken, setAuthToken] = useState(isTokenAvailable ? JSON.parse(isTokenAvailable) : null)
    const [user, setUser] = useState(isTokenAvailable ? (jwtDecode(isUser).email) : null)
    const [userInfo, setUserinfo] = useState(null)

    

    const Login = (email, password) => {
        secureAxious.post('auth/token/', { email, password })
            .then(res => {
                console.log(res.data)
                if (res.status == 200) {
                    const token = res.data
                    const userInfo = jwtDecode(res.data.access).email
                    setAuthToken(token)
                    setUser(userInfo)
                    if (loading) {
                        setLoading(false)
                    }
                    localStorage.setItem('authToken', JSON.stringify(token))
                } else {
                    alert('Something Wrong!')
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "User Not Found!",
                    text: "No User Fount With This Cradential",
                    icon: "error"
                });
            })
    }


    const Logout = () => {
        setAuthToken(null)
        setUser(null)
        setUserinfo(null)
        localStorage.removeItem('authToken')
        setLoading(false)
    }


    useEffect(() => {
        if (user) {
            secureAxious.get(`/user-info/${user}`)
                .then(res => {
                    setUserinfo(res.data)
                })
        }
    }, [user])


    const authInfo = {
        user,
        userInfo,
        loading,
        Login,
        Logout
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider