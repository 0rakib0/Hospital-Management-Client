import { FaArrowRight } from "react-icons/fa"
import SectionTitle from "./SectionTitle"

const AboutUs = () =>{
    return (
        <div className="md:mt-20 mt-10">
            <SectionTitle title1='ABOUT' title2='US'></SectionTitle>
            <div className="flex gap-6 flex-col lg:flex-row">
                <div className="lg:w-6/12">
                    <img src="https://aquinahealth.com/wp-content/uploads/2018/09/Pulse_91918.jpeg" alt="" />
                </div>
                <div className="lg:w-6/12 lg:mt-12">
                    <p className="font-semibold"><span className="text-primaryColor">ABOUT</span> US</p>
                    <h4 className="text-4xl py-2 font-semibold">Something about this hospital and about us</h4>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo modi nulla qui neque, adipisci laboriosam aspernatur. Debitis perferendis doloremque ad minus vero molestias optio aliquid in, non eum animi quo, dolorum facere sed earum? optio aliquid in, non eum animi quo, dolorum facere sed earum?optio aliquid in, non eum animi quo, dolorum facere sed earum?</p>
                    <button className="button py-2 px-4 flex items-center gap-2 hover:gap-4">Now More <FaArrowRight className="icon"></FaArrowRight></button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs