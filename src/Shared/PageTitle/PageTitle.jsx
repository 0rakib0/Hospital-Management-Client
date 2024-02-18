import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const PageTitle = ({title, mainPage, page}) => {
    return (
        <div className="flex items-center justify-between bg-ThirthColor p-2 text-white">
            <h5 className="text-2xl">{title}</h5>
            <div className="flex items-center gap-2">
                <Link to=''><IoHomeOutline className="text-xl"></IoHomeOutline></Link> / <span>{mainPage}</span> / <span>{page}</span>
            </div>
        </div>
    )
}

export default PageTitle