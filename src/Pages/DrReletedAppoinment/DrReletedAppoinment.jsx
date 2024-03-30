import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hook/SecureAxious";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";
import Swal from 'sweetalert2';
import useNoDataMessage from "../../Hook/useNoDataMessage";
import { Helmet } from "react-helmet-async";

const DrReletedAppoinment = () => {

    const secureAxious = useAxious()
    const { user } = useAuth()

    const { data: appoinments, isLoading, refetch } = useQuery({
        queryKey: ['appoinment'],
        queryFn: async () => {
            const res = await secureAxious.get(`doctor-releted-appoinment/${user}`)
            return res.data
        }
    })


    const handleApproveRejectAppoinment = (status, id) => {
        console.log(status)
        console.log(id)
        secureAxious.get(`/update-appoinment-status/${id}/?status=${status}`)
            .then(res => {
                if (res.data.message) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Appoinment Successfully ${status}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()
            })
    }

    return (
        <div>
            <Helmet>
                <title>Health Care | Dr. Appoinment</title>
            </Helmet>
            <PageTitle mainPage='appoinment' page='Appoinment List'></PageTitle>
            <div className="overflow-x-auto bg-white my-4 shadow-lg mx-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border text-lg text-center">
                            <th className="border">Patients Name</th>
                            <th className="border">Doctor Name</th>
                            <th className="border">Appoinment Date</th>
                            <th className="border">Appoinment Time</th>
                            <th className="border">Department</th>
                            <th className="border">Status</th>
                            <th className="border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments?.map(appoinment => (
                                <tr key={appoinment.id}>
                                    <td className="border">
                                        <p>{appoinment?.patient?.full_name}</p>
                                    </td>
                                    <td className="border">
                                        <p>{appoinment?.doctor?.doctorName}</p>
                                    </td>
                                    <td className="border">
                                        {/* Format the date here */}
                                        {
                                            appoinment?.appoinmentDate &&
                                            (() => {
                                                const date = new Date(appoinment.appoinmentDate);
                                                const formattedDate = date.toLocaleDateString("en-US", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric"
                                                });
                                                return formattedDate;
                                            })()
                                        }
                                    </td>
                                    <td className="border">{appoinment?.timeSlot}</td>
                                    <td className="border">{appoinment?.department}</td>
                                    {appoinment?.reject ? (
                                        <td className="border bg-red-400 text-white">Reject</td>
                                    ) : appoinment?.approveStatus ? (
                                        <td className="border bg-green-400 text-white">Approve</td>
                                    ) : (
                                        <td className="border bg-blue-400 text-white">Pending</td>
                                    )}


                                    {appoinment?.reject ? (
                                        <td className="border text-red-400">Rejected</td>
                                    ) : appoinment?.approveStatus ? (
                                        <td className="border text-green-400">Approved</td>
                                    ) : (
                                        <th className="border flex items-center justify-center gap-2">
                                            <button onClick={() => handleApproveRejectAppoinment('approve', appoinment?.id)} className="bg-green-400 p-1 text-white rounded-md">APPROVE</button>
                                            <button onClick={() => handleApproveRejectAppoinment('reject', appoinment?.id)} className="bg-red-400 p-1 text-white rounded-md">REJECT</button>
                                        </th>
                                    )}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {isLoading && <div className="flex flex-col gap-4 w-full mt-6">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-tull"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>}
                <p className="text-center my-6">{useNoDataMessage(appoinments)}</p>
            </div>
        </div>
    )
}

export default DrReletedAppoinment