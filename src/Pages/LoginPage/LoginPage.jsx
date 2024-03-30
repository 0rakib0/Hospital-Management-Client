import { Navigate, useNavigate } from "react-router-dom"
import useAuth from "../../Hook/useAuth"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

const LoginPage = () => {

    const {Login, user} = useAuth()
    const navigat = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password = form.password.value
        Login(email, password)
    }


    useEffect(() =>{
        if (user){
            navigat('/dashbord/')
        }
    }, [user])
   

    return (
        <div className="flex gap-4 py-6 px-4 rounded-lg my-6 bg-white">
            <Helmet>
                <title>Health Care | login</title>
            </Helmet>
            <div className="w-6/12">
                <div>
                    <img src="https://www.teleklinics.com/assets/img/login-banner.png" alt="image not found" />
                </div>
            </div>
            <div className="w-6/12 mt-12">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-4xl text-center font-bold">PLEASE LOGIN</h1>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Enter Email</span>
                        </div>
                        <input type="email" name="email" placeholder="Enter Email" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type="password" name="password" placeholder="Enter Password" className="input input-bordered w-full" />
                    </label>
                    <input type="submit" value='Login'className="input input-bordered w-full mt-4 bg-primaryColor text-white hover:bg-secondaryColor duration-200" />
                </form>
            </div>
        </div>
    )
}

export default LoginPage