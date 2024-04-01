
import { FaArrowRight } from 'react-icons/fa'
import '../../Pages/Home/home.css'
import { Link } from 'react-router-dom'
const ErrorPage = () =>{
    return (
        <div className="w-3/4 py-12 mx-auto">
            <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" className="w-3/4" alt="image not found" />
            <div>
            <Link to='/'>
            <button className="button py-2 px-4 flex items-center gap-2 hover:gap-4 mt-4" onClick={() => document.getElementById('my_modal_5').showModal()}>Back To Home <FaArrowRight className="icon"></FaArrowRight></button></Link>
            </div>
        </div>
    )
}

export default ErrorPage