import SectionTitle from "./SectionTitle"
import { GiLoveMystery } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { FaBedPulse, FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { BiSolidDonateBlood } from "react-icons/bi";
import { TbMedicineSyrup } from "react-icons/tb";
import { GrDocumentConfig } from "react-icons/gr";
import useAOS from "../../Hook/useAOS";

const Service = () => {
    useAOS()
    return (
        <div data-aos="fade-up" className="md:mt-20 mt-10" id="service">
            <SectionTitle title1='OUR' title2='SERVICES'></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4">
                <div data-aos="fade-right" className="bg-white p-4 text-center flex flex-col items-center border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300">
                    <div className="text-6xl text-primaryColor mb-2">
                        <GiLoveMystery></GiLoveMystery>
                    </div>
                    <h4 className="text-2xl font-semibold">Emergency Care</h4>
                    <p>24/7 rapid response and advanced medical technologies for immediate treatment of emergencies. Dedicated team ensures prompt, effective care at Health Care.</p>
                </div>
                <div data-aos="fade-right" className="bg-white p-4 text-center flex flex-col items-center border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <HiClipboardDocumentList></HiClipboardDocumentList>
                    </div>
                    <h4 className="text-2xl font-semibold">Free Checkoup</h4>
                    <p>Experience complimentary checkups at Health Care for proactive health monitoring. Our team provides thorough assessments and personalized recommendations for your well-being.</p>
                </div>
                <div data-aos="fade-left" className="bg-white p-4 text-center flex flex-col items-center border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <FaBedPulse></FaBedPulse>
                    </div>
                    <h4 className="text-2xl font-semibold">Oparattion & Sergary</h4>
                    <p>Trust our skilled surgical team at Health Care for expert procedures. We prioritize safety and precision to ensure optimal patient outcomes.</p>
                </div>
                <div data-aos="fade-left" className="bg-white p-4 text-center flex flex-col items-center border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <FaUserDoctor></FaUserDoctor>
                    </div>
                    <h4 className="text-2xl font-semibold">Expart Doctor</h4>
                    <p>At Health Care, rely on our experienced doctors for personalized treatment and superior medical guidance. Trust us for your healthcare needs.</p>
                </div>
                <div data-aos="fade-right" className="bg-white p-4 text-center flex flex-col items-center border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <FaAmbulance></FaAmbulance>
                    </div>
                    <h4 className="text-2xl font-semibold">24/7 Ambulance</h4>
                    <p>Our round-the-clock ambulance service at Health Care ensures swift response and safe transportation, providing peace of mind during emergencies. Your well-being is our priority.</p>
                </div>
                <div data-aos="fade-right" className="bg-white p-4 text-center flex flex-col items-center border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <BiSolidDonateBlood></BiSolidDonateBlood>
                    </div>
                    <h4 className="text-2xl font-semibold">Free Blood Testiong</h4>
                    <p>Benefit from complimentary blood testing at Health Care, ensuring early detection and monitoring of health conditions. Your well-being matters to us.</p>
                </div>
                <div data-aos="fade-left" className="bg-white p-4 text-center flex flex-col items-center border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <TbMedicineSyrup></TbMedicineSyrup>
                    </div>
                    <h4 className="text-2xl font-semibold">Medicine & Phermacy</h4>
                    <p>Find all your medication needs conveniently at Health Care's pharmacy. Our wide selection ensures availability, quality, and expert guidance for optimal health management.</p>
                </div>
                <div data-aos="fade-left" className="bg-white p-4 text-center flex flex-col items-center border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <GrDocumentConfig></GrDocumentConfig>
                    </div>
                    <h4 className="text-2xl font-semibold">Quality Enssure</h4>
                    <p>At Health Care, we prioritize quality assurance in every aspect of care delivery, ensuring safety, effectiveness, and patient satisfaction. Your health is our commitment.</p>
                </div>
            </div>
        </div>
    )
}

export default Service