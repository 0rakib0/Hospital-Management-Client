import { MdLocationOn } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="footer p-10 bg-white text-base-content">
                <div>
                    <h1 className="text-primaryColor text-2xl font-bold">HEALTH CARE</h1>
                    <p className="flex items-center gap-4"><MdLocationOn className="text-2xl text-primaryColor mt-4 mb-2"></MdLocationOn> Cha- 80/3, Shadhinota Sarani, Progati Sarani Rd, Dhaka- 1212</p>
                    <p className="flex items-center gap-4"><FaPhoneSquareAlt className="text-xl text-primaryColor"></FaPhoneSquareAlt>  +880157000-0000</p>
                    <p className="flex items-center gap-4"><MdEmail className="text-xl text-primaryColor"></MdEmail>  heathcare.bd@gmail.com</p>
                </div>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <p className="bg-ThirthColor p-2 text-white text-center mt-2">Copyright &#xA9; 2024. Designed by Rakib. All Rights Reserved</p>
        </div>
    )
}

export default Footer