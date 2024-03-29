import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const PageTitle = ({title, mainPage, page}) => {
    return (
        <div className="flex items-center justify-between bg-primaryColor py-2 px-1 lg:px-6 text-white">
            <h5 className="text-2xl"><Link className="flex items-center gap-2" to='/dashbord/'><FaArrowLeft></FaArrowLeft>Back To Dashbord</Link></h5>
            <div className="flex items-center gap-2">
                <Link to=''><IoHomeOutline className="text-xl"></IoHomeOutline></Link> / <span>{mainPage}</span> / <span>{page}</span>
            </div>
        </div>
    )
}

export default PageTitle