import { Outlet } from "react-router-dom"
import NavBar from "../Shared/NavBar/Navbar"
import Footer from "../Shared/Footer/Footer"

const Root = () =>{
    return (
        <div className="md:w-11/12 mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root