import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useAxious from "../../Hook/SecureAxious";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const AllMessage = () => {

    const secureAxious = useAxious()

    const {data:messages} = useQuery({
        queryKey:['message'],
        queryFn: async () =>{
            const res = await secureAxious.get('/messages/')
            return res.data
        }
    })


    return (
        <div>
            <PageTitle title='Message List' mainPage='Message' page='Message List'></PageTitle>
            <div className="overflow-x-auto bg-white my-4 shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border text-lg text-center">
                            <th className="border">#</th>
                            <th className="border">Message</th>
                            <th className="border">Doctor</th>
                            <th className="border">Message Date</th>
                            <th className="border">Read Status</th>
                            <th className="border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messages?.map((msg, ind) => (
                                <tr key={msg.id}>
                                    <td className="border">
                                        {ind + 1}
                                    </td>
                                    <td className="border">
                                        {msg.message}
                                    </td>
                                    <td className="border">
                                        {msg.doctor.doctorName}
                                    </td>
                                    <td className="border">
                                        {/* Format the date here */}
                                        {
                                            msg.creatAt &&
                                            (() => {
                                                const date = new Date(msg.creatAt);
                                                const formattedDate = date.toLocaleDateString("en-US", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric"
                                                });
                                                return formattedDate;
                                            })()
                                        }
                                    </td>
                                    <td className="border">
                                        {msg.readStatus ? <span class="badge badge-success text-white">readed</span>:
                                        <span class="badge badge-ghost">Pending</span>
                                        }
                                    </td>
                                    <th className="border flex items-center justify-center gap-2 text-xl">
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


export default AllMessage