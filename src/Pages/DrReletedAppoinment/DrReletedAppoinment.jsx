import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hook/SecureAxious";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";


const DrReletedAppoinment = () =>{

    const secureAxious = useAxious()
    const {user} = useAuth()

    const { data: appoinments } = useQuery({
        queryKey: ['appoinment'],
        queryFn: async () => {
            const res = await secureAxious.get(`doctor-releted-appoinment/${user}`)
            return res.data
        }
    })

    return (
        <div>
            <PageTitle mainPage='Payment' page='Payment List'></PageTitle>
            <div className="overflow-x-auto bg-white my-4 shadow-lg">
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
                                    {appoinment?.approveStatus === 'Approved' ? (
                                        <td className="border bg-green-400 text-white">{appoinment?.approveStatus}</td>
                                    ): appoinment?.approveStatus === 'Rejected'? (
                                        <td className="border bg-red-400 text-white">{appoinment?.approveStatus} </td>
                                        ) : (
                                        <td className="border bg-blue-400 text-white">{appoinment?.approveStatus}</td>
                                    )}

                                    <th className="border flex items-center justify-center gap-2 text-xl">
                                        <div className="bg-blue-400 p-1 text-white rounded-md">
                                            <Link to={`/appoinment-details/${appoinment.id}`}><FaEye></FaEye></Link>
                                        </div>

                                        <div className="bg-green-400 p-1 text-white rounded-md">
                                            <Link><FaPencilAlt></FaPencilAlt></Link>
                                        </div>

                                        <div className="bg-red-400 p-1 text-white rounded-md">
                                            <Link><FaTrash></FaTrash></Link>
                                        </div>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DrReletedAppoinment