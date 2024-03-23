import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useAxious from "../../Hook/SecureAxious";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import useNoDataMessage from "../../Hook/useNoDataMessage";


const DrReletedMessage = () =>{


    const secureAxious = useAxious()
    const {user} = useAuth()
    const {data:messages, refetch} = useQuery({
        queryKey:['message'],
        queryFn: async () =>{
            const res = await secureAxious.get(`doctor-releted-message/${user}`)
            return res.data
        }
    })


    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this message?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxious.delete(`/messages/${id}/`)
                    .then(res => {
                        if (res.data.message) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Notice Successfullt Deleted!",
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
            <PageTitle mainPage='Message' page='Message List'></PageTitle>
            <div className="overflow-x-auto bg-white my-4 shadow-lg mx-6">
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
                                        <div onClick={() => handleDelete(msg.id)} className="bg-red-400 p-1 text-white rounded-md">
                                            <Link><FaTrash></FaTrash></Link>
                                        </div>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <p className="text-center my-6">{useNoDataMessage(messages)}</p>
            </div>
        </div>
    )
}


export default DrReletedMessage