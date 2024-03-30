import { FaArrowRight } from "react-icons/fa"
import SectionTitle from "./SectionTitle"
import { useEffect } from "react";
import useAOS from "../../Hook/useAOS";
const AboutUs = () => {
    useAOS()
    return (
        <div data-aos="fade-up" className="md:mt-20 mt-10" id="about">
            <SectionTitle title1='ABOUT' title2='US'></SectionTitle>
            <div className="flex gap-6 flex-col lg:flex-row">
                <div data-aos="fade-right" className="lg:w-6/12">
                    <img src="https://aquinahealth.com/wp-content/uploads/2018/09/Pulse_91918.jpeg" alt="" />
                </div>
                <div data-aos="fade-left" className="lg:w-6/12 lg:mt-12">
                    <p className="font-semibold"><span className="text-primaryColor">ABOUT</span> US</p>
                    <h4 className="text-4xl py-2 font-semibold">Something about this hospital and about us</h4>
                    <p className="mb-4">Welcome to our healthcare management system designed for efficiency and patient care excellence. At Health Care, we're dedicated to revolutionizing healthcare administration through innovative technology. Our system streamlines operations, enhances patient care, and empowers healthcare providers to deliver exceptional service.</p>
                    <p>Our Vision
                        We envision a future where healthcare management is seamless, efficient, and patient-centered. Our goal is to provide cutting-edge solutions that optimize workflows and improve healthcare delivery.</p>
                    <button className="button py-2 px-4 flex items-center gap-2 hover:gap-4">Now More <FaArrowRight className="icon"></FaArrowRight></button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs