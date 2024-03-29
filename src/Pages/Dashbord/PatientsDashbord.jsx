import { useEffect, useState } from "react"
import useAxious from "../../Hook/SecureAxious"
import useAuth from "../../Hook/useAuth"
import { Link } from "react-router-dom"
import { FaEye, FaWheelchair } from "react-icons/fa";
import useNoDataMessage from "../../Hook/useNoDataMessage";

const PatientsDashbord = () => {

    const asiouxSecure = useAxious()
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [payloading, setPayLoading] = useState(false)
    const [appoinmentloading, setAppoinmentLoading] = useState(false)

    const [patient, setPatients] = useState([])
    const [payments, setPayment] = useState([])
    const [PatientAppoinment, setAppoinment] = useState([])




    const patientsId = patient?.id
    useEffect(() => {
        setLoading(true)
        asiouxSecure.get(`patients/single-patient/${user}/`)
            .then(res => {
                setPatients(res.data)
                setLoading(false)
            })

    }, [user])

    console.log(patient)
    useEffect(() => {
        setPayLoading(true)
        if (patientsId) {
            asiouxSecure.get(`/payments/${patientsId}`)
                .then(res => {
                    setPayment(res.data)
                    setPayLoading(false)
                })
                .catch(error => {
                    alert(error)
                })
        }

    }, [patientsId])


    useEffect(() => {
        setAppoinmentLoading(true)
        if (patientsId) {
            asiouxSecure.get(`/patients-appoinment/${patientsId}`)
                .then(res => {
                    setAppoinment(res.data)
                    setAppoinmentLoading(false)
                })
                .catch(error => {
                    alert(error)
                })
        }

    }, [patientsId])



    return (
        <>
            <div className="my-4 p-4 rounded-md shadow-lg">
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="lg:w-6/12 bg-white">
                        {loading ? <div className="flex flex-col gap-4 w-52 mt-12 ml-12 pb-6">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div> : <> <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Details</p>
                            <div className="bg-primaryColor w-[15rem] h-[15rem] overflow-hidden ml-6 mt-4">
                                <img src={patient?.patients_pic} className="w-full" alt="" />
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
                            </div> </>}

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
                                        {pa.reject ? (
                                            <td className="border bg-red-400 text-white">Reject</td>
                                        ) : pa.approveStatus ? (
                                            <td className="border bg-green-400 text-white">Approve</td>
                                        ) : (
                                            <td className="border bg-blue-400 text-white">Pending</td>
                                        )}
                                        <td><Link to={`/appoinment-details/${pa.id}`}><FaEye className="text-xl text-blue-400"></FaEye></Link></td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                        {appoinmentloading && <div className="flex flex-col gap-4 w-full mt-6">
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-tull"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>}
                        <p className="text-center my-6">{useNoDataMessage(PatientAppoinment)}</p>
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
                    {payloading && <div className="flex flex-col gap-4 w-full mt-6">
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-tull"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>}
                    <p className="text-center my-6">{useNoDataMessage(payments)}</p>
                </div>
            </div>
        </>
    )
}

export default PatientsDashbord