import { useEffect, useState } from "react"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa"
import useNoDataMessage from "../../Hook/useNoDataMessage"
import { Helmet } from "react-helmet-async"

const RejectAppoinment = () => {

    const secureAxious = useAxious()
    const [appoinments, setAppoinment] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        secureAxious.get('filter-appoinment-data/?filter=reject')
            .then(res => {
                setAppoinment(res.data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Health Care | Rejected appt</title>
            </Helmet>
            <PageTitle mainPage='Reject' page='Reject Appoinment'></PageTitle>
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
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {loading && <div className="flex flex-col gap-4 w-full mt-6">
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


export default RejectAppoinment