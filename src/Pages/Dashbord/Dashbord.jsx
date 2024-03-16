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



const Dashbord = () => {

    const asiouxSecure = useAxious()
    const { user, userInfo } = useAuth()

    const userType = userInfo?.user_type
    const [patient, setPatients] = useState([])
    const [payments, setPayment] = useState([])
    const [PatientAppoinment, setAppoinment] = useState([])
    // const { data } = useQuery({
    //     queryKey: ['patients'],
    //     queryFn: async () => {
    //         const res = await asiouxSecure.get('/patients/patients/')
    //         return res.data
    //     }


    // })


    console.log(user)

    // ----------------------------------Patients Dashbod -------------------------

    useEffect(() => {
        asiouxSecure.get(`patients/single-patient/rakib@gmail.com/`)
            .then(res => {
                setPatients(res.data)
            })
    }, [user])

    const patientsId = patient?.id
    console.log('----------------------------')
    console.log(patientsId)



    useEffect(()=>{
        asiouxSecure.get(`/payments/${patientsId}`)
        .then(res =>{
            setPayment(res.data)
        })
    },[patientsId])


    useEffect(() =>{
        asiouxSecure.get(`/patients-appoinment/${patientsId}`)
        .then(res =>{
            setAppoinment(res.data)
        })
    }, [patientsId])

    return (
        //--------------------------------Admin Dashbord-------------------------------------
        <> {userType == 'admin' && <div className="m-6">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4">
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-red-500 p-4 flex items-center justify-center">
                        <FaWheelchair className="text-4xl text-white"></FaWheelchair>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/all-patients/'>All Patients</Link></p>
                        <p>0</p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-blue-500 p-4 flex items-center justify-center">
                        <TbWheelchair className="text-4xl text-white"></TbWheelchair>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-patients/'>Add Patients</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <MdOutlineAirlineSeatReclineExtra className="text-4xl text-white"></MdOutlineAirlineSeatReclineExtra >
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/tretments-patients/'>In Treathment Patients</Link></p>
                        <p>0</p>
                    </div>
                </div>
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <MdOutlineWheelchairPickup className="text-4xl text-white"></MdOutlineWheelchairPickup>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/discharge-patients/'>Dishcharg Patients</Link></p>
                        <p>0</p>
                    </div>
                </div>
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-red-500 p-4 flex items-center justify-center">
                        <FaUserDoctor className="text-4xl text-white"></FaUserDoctor>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/all-doctors/'>All Doctors</Link></p>
                        <p>0</p>
                    </div>
                </div>
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-blue-500 p-4 flex items-center justify-center">
                        <IoBagAddSharp className="text-4xl text-white"></IoBagAddSharp>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-dostors/'>Add Doctors</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <IoDocumentText className="text-4xl text-white"></IoDocumentText>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/appoinment-list/'>All Appoinment</Link></p>
                        <p>0</p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <TiDocumentAdd className="text-4xl text-white"></TiDocumentAdd>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-appoinment/'>Add Appoinment</Link></p>
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
                    <div className="h-full w-2/5 bg-blue-500 p-4 flex items-center justify-center">
                        <HiOutlineDocumentPlus className="text-4xl text-white"></HiOutlineDocumentPlus>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-notice/'>Add Notice</Link></p>
                    </div>
                </div>
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <MdMessage className="text-4xl text-white"></MdMessage>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/all-message/'>All Message</Link></p>
                    </div>
                </div>
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <LuMessageSquarePlus className="text-4xl text-white"></LuMessageSquarePlus>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/send-message/'>Send Message</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-red-500 p-4 flex items-center justify-center">
                        <RiWechatPayLine className="text-4xl text-white"></RiWechatPayLine>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/payment-list/'>Payment Report</Link></p>
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
            </div>
        </div>}

            {/* --------------------------------------Doctor Dashbord----------------------------------- */}

            {userType == 'doctor' && <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4 mt-6">

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <IoDocumentText className="text-4xl text-white"></IoDocumentText>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/appoinment-list/'>All Appoinment</Link></p>
                        <p>0</p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <TiDocumentAdd className="text-4xl text-white"></TiDocumentAdd>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link to='/add-appoinment/'>MyAppoinment</Link></p>
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
                        <p><Link to='/all-message/'>Messages</Link></p>
                    </div>
                </div>

            </div>
            }
            {/* ---------------------------------------Patients Dashbord---------------------------------- */}
            {userType == 'patients' && <div>
                <div className="my-4 p-4 rounded-md shadow-lg">
                    <div className="flex lg:flex-row flex-col gap-4">
                        <div className="lg:w-6/12 bg-white">
                            <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Details</p>
                            <div className="bg-primaryColor w-[15rem] h-[15rem] overflow-hidden ml-6 mt-4">
                                <img src={'http://127.0.0.1:8000' + patient?.patients_pic} className="w-full" alt="" />
                            </div>
                            <div className="overflow-x-auto my-4 ">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="border font-bold">
                                                Patient ID
                                            </td>
                                            <td className="border">
                                                {patient?.patients_Id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border font-bold">
                                                Full Name
                                            </td>
                                            <td className="border">
                                                {patient?.full_name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border font-bold">
                                                Date Of Birth
                                            </td>
                                            <td className="border">
                                                {patient?.date_of_birth}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border font-bold">
                                                Age
                                            </td>
                                            <td className="border">
                                                {patient?.age}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border font-bold">
                                                Phone
                                            </td>
                                            <td className="border">
                                                {patient?.phone}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border font-bold">
                                                Email
                                            </td>
                                            <td className="border">
                                                {patient?.email}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border font-bold">
                                                Gender
                                            </td>
                                            <td className="border">
                                                {patient?.gender}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border font-bold">
                                                Full Address
                                            </td>
                                            <td className="border">
                                                {patient?.full_address}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border font-bold">
                                                Details About Patients
                                            </td>
                                            <td className="border">
                                                {patient?.details}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border font-bold">
                                                Patients Status
                                            </td>
                                            <td className="border">
                                                {patient?.disCharged ? <p>Dischared</p> :
                                                    <p>In Treatment</p>
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bg-white lg:w-6/12 p-2 overflow-x-scroll">
                            <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Appoinmet Details</p>
                            <table className="table">
                                {/* head */}
                                <thead className="bg-gray-100">
                                    <tr className="border text-lg text-center">
                                        <th className="border px-4 py-2">Doctor Name</th>
                                        <th className="border px-4 py-2">Date</th>
                                        <th className="border px-4 py-2">Time</th>
                                        <th className="border px-4 py-2">Status</th>
                                        <th className="border px-4 py-2">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        PatientAppoinment?.map(pa => <tr key={pa.id} className="border">
                                            <td className="border px-4 py-2">
                                                {pa.doctor.doctorName}
                                            </td>
                                            <td className="border">
                                                {/* Format the date here */}
                                                {
                                                    pa?.appoinmentDate &&
                                                    (() => {
                                                        const date = new Date(pa.appoinmentDate);
                                                        const formattedDate = date.toLocaleDateString("en-US", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric"
                                                        });
                                                        return formattedDate;
                                                    })()
                                                }
                                            </td>
                                            <td className="border px-4 py-2">{pa.timeSlot}</td>
                                            {pa?.approveStatus === 'Approved' ? (
                                                <td className="border bg-green-400 text-white">{pa?.approveStatus}</td>
                                            ) : pa?.approveStatus === 'Rejected' ? (
                                                <td className="border bg-red-400 text-white">{pa?.approveStatus} </td>
                                            ) : (
                                                <td className="border bg-blue-400 text-white">{pa?.approveStatus}</td>
                                            )}
                                            <td><Link to={`/appoinment-details/${pa.id}`}><FaEye className="text-xl text-blue-400"></FaEye></Link></td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-4 bg-white p-4 overflow-x-scroll">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Payment Transactions</p>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="border text-lg">
                                    <th className="border">Payment Date</th>
                                    <th className="border">Total Cost</th>
                                    <th className="border">Payment Type</th>
                                    <th className="border">Cash/Check No</th>
                                    <th className="border">Service</th>
                                    <th className="border">Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments?.map(payment => <tr key={payment.id}>
                                        <td className="border">
                                            <td>
                                                {/* Format the date here */}
                                                {
                                                    payment?.createdAtt &&
                                                    (() => {
                                                        const date = new Date(payment.createdAtt);
                                                        const formattedDate = date.toLocaleDateString("en-US", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric"
                                                        });
                                                        return formattedDate;
                                                    })()
                                                }
                                            </td>
                                        </td>
                                        <td className="border">{payment?.costOfTreatment}</td>
                                        <td className="border">{payment?.paymentType}</td>
                                        <td className="">
                                            {payment?.chardOrChackNo ? <td className="">{payment?.chardOrChackNo}</td>
                                                : <td className="">Cash payment</td>
                                            }
                                        </td>
                                        <td className="border">{payment?.service}</td>
                                        <td className="border">{payment?.department}</td>
                                    </tr>)
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            }

        </>
    )
}


export default Dashbord