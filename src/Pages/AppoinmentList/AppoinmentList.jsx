import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hook/SecureAxious";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useNoDataMessage from "../../Hook/useNoDataMessage";

const AppoinmentList = () => {

    const secureAxious = useAxious()

    const { data: appoinments, refetch } = useQuery({
        queryKey: ['appoinment'],
        queryFn: async () => {
            const res = await secureAxious.get('/appoinment/')
            return res.data
        }
    })

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Delete This Appoinment Details!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxious.delete(`/appoinment/${id}`)
                    .then(res => {
                        if (res.data.message) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Appoinment data has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }

    return (
        <div>
            <PageTitle mainPage='Payment' page='Payment List'></PageTitle>
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

                                    <th className="border flex items-center justify-center gap-2 text-xl">
                                        <div className="bg-blue-400 p-1 text-white rounded-md">
                                            <Link to={`/appoinment-details/${appoinment?.id}`}><FaEye></FaEye></Link>
                                        </div>

                                        <div className="bg-red-400 p-1 text-white rounded-md">
                                            <Link onClick={() => handleDelete(appoinment?.id)}><FaTrash></FaTrash></Link>
                                        </div>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <p className="text-center my-6">{useNoDataMessage(appoinments)}</p>
            </div>
        </div>
    )
}


export default AppoinmentList