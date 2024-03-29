import { Link, NavLink, useNavigate } from "react-router-dom"
import useAuth from "../../Hook/useAuth"

const Nav = () => {

    const {user, Logout} = useAuth()
    const naviget = useNavigate()

    const handleLogout = () =>{
        Logout()
        naviget('/')
    }

    const navItem = <>
        <li className="text-md ml-2"><Link to='/'>HOME</Link></li>
        <li className="text-md ml-2"><a href='#about'>ABOUT</a></li>
        <li className="text-md ml-2"><a href='#service'>SERVICE</a></li>
        <li className="text-md ml-2"><a href="#department">DEPARTMENT</a></li>
        <li className="text-md ml-2"><a href="#team">TEAM</a></li>
        <li className="text-md ml-2"><a href="#contact">CONTACT</a></li>
        {user? <><li className="text-md ml-2"><Link to='/dashbord/'>DASHBORD</Link></li>
        <li className="text-md ml-2" onClick={handleLogout}><Link>LOGOUT</Link></li></>:<li className="text-md ml-2"><Link to='/login/'>LOGIN</Link></li>}        
    </>

    return (
        <div className="bg-white flex items-center lg:flex-row flex-col lg:gap-24 px-6 lg:py-2 shadow-lg">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="text-primaryColor text-2xl font-bold">HEALTH CARE</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav