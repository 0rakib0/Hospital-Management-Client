import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import useAuth from "../../Hook/useAuth"
import { FaEye, FaWheelchair } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbWheelchair } from "react-icons/tb";
import { MdOutlineWheelchairPickup, MdOutlinePayment } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineAirlineSeatReclineExtra, MdMessage } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { TiDocumentAdd } from "react-icons/ti";
import { HiOutlineClipboardDocumentList, HiOutlineDocumentPlus } from "react-icons/hi2";
import { LuMessageSquarePlus } from "react-icons/lu";
import { RiWechatPayLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import PatientsDashbord from "./PatientsDashbord";
import { Helmet } from 'react-helmet-async';


const Dashbord = () => {

    const asiouxSecure = useAxious()
    const { user, userInfo } = useAuth()
    const userType = userInfo?.user_type

    const [loading, setLoagin] = useState(true)


    setTimeout(() => {
        setLoagin(false);
    }, 500)


    if (loading) {
        return <div className="flex flex-col gap-4 w-full mt-6 mx-4">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-tull"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    }


    console.log(userInfo)
    console.log(userType)




    return (
        //--------------------------------Admin Dashbord-------------------------------------
        <div className="pb-96"> {userType == 'admin' && <div className="m-6">
            <Helmet>
                <title>Health Care | Dashbord</title>
            </Helmet>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4">

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-red-500 p-4 flex items-center justify-center">
                        <TbWheelchair className="text-4xl text-white"></TbWheelchair>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-patients/'>Add Patients</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-blue-500 p-4 flex items-center justify-center">
                        <FaWheelchair className="text-4xl text-white"></FaWheelchair>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/all-patients/'>All Patients</Link></p>

                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <MdOutlineAirlineSeatReclineExtra className="text-4xl text-white"></MdOutlineAirlineSeatReclineExtra >
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/tretments-patients/'>In Treatment Patients</Link></p>

                    </div>
                </div>
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <MdOutlineWheelchairPickup className="text-4xl text-white"></MdOutlineWheelchairPickup>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/discharge-patients/'>Dishcharg Patients</Link></p>

                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-red-500 p-4 flex items-center justify-center">
                        <IoBagAddSharp className="text-4xl text-white"></IoBagAddSharp>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-dostors/'>Add Doctors</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-blue-500 p-4 flex items-center justify-center">
                        <FaUserDoctor className="text-4xl text-white"></FaUserDoctor>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/all-doctors/'>All Doctors</Link></p>

                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <TiDocumentAdd className="text-4xl text-white"></TiDocumentAdd>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-appoinment/'>Add Appt</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <IoDocumentText className="text-4xl text-white"></IoDocumentText>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/appoinment-list/'>All Appt</Link></p>

                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-red-500 p-4 flex items-center justify-center">
                        <IoDocumentText className="text-4xl text-white"></IoDocumentText>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/approveappoinemnt/'>Approve Appt</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-blue-500 p-4 flex items-center justify-center">
                        <TiDocumentAdd className="text-4xl text-white"></TiDocumentAdd>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/reject-apoinment/'>Reject Appt</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <HiOutlineDocumentPlus className="text-4xl text-white"></HiOutlineDocumentPlus>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-notice/'>Add Notice</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <HiOutlineClipboardDocumentList className="text-4xl text-white"></HiOutlineClipboardDocumentList>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/all-notice/'>All Notice</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-red-500 p-4 flex items-center justify-center">
                        <LuMessageSquarePlus className="text-4xl text-white"></LuMessageSquarePlus>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/send-message/'>Send Message</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-blue-500 p-4 flex items-center justify-center">
                        <MdMessage className="text-4xl text-white"></MdMessage>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/all-message/'>All Message</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <MdOutlinePayment className="text-4xl text-white"></MdOutlinePayment>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-payment/'>Add Payment</Link></p>
                    </div>
                </div>
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <RiWechatPayLine className="text-4xl text-white"></RiWechatPayLine>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/payment-list/'>Payment Report</Link></p>
                    </div>
                </div>
            </div>
        </div>}

            {/* --------------------------------------Doctor Dashbord----------------------------------- */}

            {userType == 'doctor' && <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4 mt-6 mx-6">

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <IoDocumentText className="text-4xl text-white"></IoDocumentText>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/appoinment-list/'>All Appoinment</Link></p>

                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <TiDocumentAdd className="text-4xl text-white"></TiDocumentAdd>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/dr-eleted-appoinment/'>MyAppoinment</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-red-500 p-4 flex items-center justify-center">
                        <HiOutlineClipboardDocumentList className="text-4xl text-white"></HiOutlineClipboardDocumentList>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/all-notice/'>All Notice</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <MdMessage className="text-4xl text-white"></MdMessage>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/dr-releted-message'>Messages</Link></p>
                    </div>
                </div>

            </div>
            }
            {/* ---------------------------------------Patients Dashbord---------------------------------- */}
            {userType == 'patients' && <div>
                <PatientsDashbord></PatientsDashbord>

            </div>
            }

        </div>
    )
}


export default Dashbord