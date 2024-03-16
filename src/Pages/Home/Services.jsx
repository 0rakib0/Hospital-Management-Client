import SectionTitle from "./SectionTitle"
import { GiLoveMystery } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { FaBedPulse, FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { BiSolidDonateBlood } from "react-icons/bi";
import { TbMedicineSyrup } from "react-icons/tb";
import { GrDocumentConfig } from "react-icons/gr";

const Service = () => {
    return (
        <div className="md:mt-20 mt-10">
            <SectionTitle title1='OUR' title2='SERVICES'></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4">
                <div className="bg-white p-4 text-center flex flex-col items-center hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <GiLoveMystery></GiLoveMystery>
                    </div>
                    <h4 className="text-2xl font-semibold">Emergency Care</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corrupti soluta quibusdam explicabo maiores. Ipsam praesentium id nisi.</p>
                </div>
                <div className="bg-white p-4 text-center flex flex-col items-center hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <HiClipboardDocumentList></HiClipboardDocumentList>
                    </div>
                    <h4 className="text-2xl font-semibold">Free Checkoup</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi laudantium incidunt minus praesentium, eos quis quisquam porro consectetur.</p>
                </div>
                <div className="bg-white p-4 text-center flex flex-col items-center hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <FaBedPulse></FaBedPulse>
                    </div>
                    <h4 className="text-2xl font-semibold">Oparattion & Sergary</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius facilis libero quibusdam enim a, nisi repellendus ut cumque nihil, atque, sequi natus amet provident?</p>
                </div>
                <div className="bg-white p-4 text-center flex flex-col items-center hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <FaUserDoctor></FaUserDoctor>
                    </div>
                    <h4 className="text-2xl font-semibold">Expart Doctor</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius facilis libero quibusdam enim a, nisi repellendus ut cumque nihil, atque, sequi natus amet provident?</p>
                </div>
                <div className="bg-white p-4 text-center flex flex-col items-center hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <FaAmbulance></FaAmbulance>
                    </div>
                    <h4 className="text-2xl font-semibold">24/7 Ambulance</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius facilis libero quibusdam enim a, nisi repellendus ut cumque nihil, atque, sequi natus amet provident?</p>
                </div>
                <div className="bg-white p-4 text-center flex flex-col items-center hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <BiSolidDonateBlood></BiSolidDonateBlood>
                    </div>
                    <h4 className="text-2xl font-semibold">Free Blood Testiong</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius facilis libero quibusdam enim a, nisi repellendus ut cumque nihil, atque, sequi natus amet provident?</p>
                </div>
                <div className="bg-white p-4 text-center flex flex-col items-center hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <TbMedicineSyrup></TbMedicineSyrup>
                    </div>
                    <h4 className="text-2xl font-semibold">Medicine & Phermacy</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius facilis libero quibusdam enim a, nisi repellendus ut cumque nihil, atque, sequi natus amet provident?</p>
                </div>
                <div className="bg-white p-4 text-center flex flex-col items-center hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="text-6xl text-primaryColor mb-2">
                        <GrDocumentConfig></GrDocumentConfig>
                    </div>
                    <h4 className="text-2xl font-semibold">Quality Enssure</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius facilis libero quibusdam enim a, nisi repellendus ut cumque nihil, atque, sequi natus amet provident?</p>
                </div>
            </div>
        </div>
    )
}

export default Service