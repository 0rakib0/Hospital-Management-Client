import { Outlet } from "react-router-dom"
import NavBar from "../Shared/NavBar/Navbar"

const Root = () =>{
    return (
        <div className="w-11/12 mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}

export default Root