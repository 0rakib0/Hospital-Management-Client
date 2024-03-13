import Lottie from "lottie-react";
import BannerAnimation from '../../../public/Banner.json'
import './home.css'
import { FaArrowRight } from "react-icons/fa";
const Banner = () =>{
    return (
        <div className="flex flex-col lg:flex-row gap-4 p-6 items-center">
            <div>
                <Lottie animationData={BannerAnimation}></Lottie>
            </div>
            <div className="lg:w-3/4">
                <h5 className="text-4xl py-2 font-bold text-shadow">Stay Safe, Stay Healthy</h5>
                <p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam impedit sapiente accusamus rem quo libero nobis accusantium reprehenderit minus, qui debitis eligendi provident sint magnam! Rem aspernatur deserunt rerum.</p>
                <button className="button py-2 px-4 flex items-center gap-2 hover:gap-4">Book Bed <FaArrowRight className="icon"></FaArrowRight></button>
            </div>
        </div>
    )
}

export default Banner