import { useQuery } from "@tanstack/react-query"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import useAxious from "../../Hook/SecureAxious"
import { Link, useParams } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const PatientsDetails = () => {

    const singleP = useParams()
    const patientsId = singleP.id

    const secureAxious = useAxious()

    const { data: patient, refetch } = useQuery({
        queryKey: ['patients', patientsId],
        queryFn: async () => {
            const res = await secureAxious.get(`/patients/patients/${patientsId}`)
            return res.data
        }
    })

    const { data: payments } = useQuery({
        queryKey: ['payments', patientsId],
        queryFn: async () => {
            const res = await secureAxious.get(`/payments/${patientsId}`)
            return res.data
        }
    })

    const { data: PatientAppoinment, isLoading } = useQuery({
        queryKey: ['PatientAppoinment', patientsId],
        queryFn: async () => {
            const res = await secureAxious.get(`/patients-appoinment/${patientsId}`)
            return res.data
        }
    })

    const handleDischargPatients = id => {
        secureAxious.get(`/patients/update-patients-status/${id}`)
            .then(res => {
                console.log(res.data)
                refetch()
            })
    }

    if (isLoading) {
        return <div className="flex flex-col gap-4 w-52 mt-12 ml-12">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    }

    return (
        <div>
            <Helmet>
                <title>Health Care | Patielnt Details</title>
            </Helmet>
            <PageTitle mainPage='Patients' page='Patient Details'></PageTitle>
            <div className="my-4 p-4 rounded-md shadow-lg">
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="lg:w-6/12 bg-white">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Details</p>
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
                                            {patient?.disCharged ? <button className="bg-green-500 p-1 text-white rounded-md" disabled>Dischared</button> :
                                                <div className="flex gap-2 items-center">
                                                    <button className="bg-blue-500 p-1 text-white rounded-md" disabled>In Treatment</button>
                                                    <button onClick={() => handleDischargPatients(patient?.id)} className="bg-primaryColor p-1 rounded-lg text-white hover:bg-secondaryColor duration-300">Discharge</button>
                                                </div>
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
                                        {pa.reject? (
                                            <td className="border bg-red-400 text-white">Reject</td>
                                        ) : pa.approveStatus? (
                                            <td className="border bg-green-400 text-white">Approve</td>
                                        ) : (
                                            <td className="border bg-blue-400 text-white">Pending</td>
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
    )
}

export default PatientsDetails