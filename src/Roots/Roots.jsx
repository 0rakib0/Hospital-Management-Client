import { Outlet } from "react-router-dom"
import Footer from "../Shared/Footer/Footer"
import Nav from "../Shared/NavBar/Nav"

const Root = () =>{
    return (
        <div className="">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root