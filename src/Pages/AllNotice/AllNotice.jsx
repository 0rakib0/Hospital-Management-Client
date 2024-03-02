import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import Swal from "sweetalert2"

const AllNotice = () =>{

    const secureAxious = useAxious()


    const {data:notice, refetch} = useQuery({
        queryKey:['notice'],
        queryFn: async () =>{
            const res = await secureAxious.get('/notice/')
            return res.data
        }
    })


    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this Notice?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxious.delete(`/notice/${id}/`)
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
            <PageTitle title='Payment List' mainPage='Payment' page='Payment List'></PageTitle>
            <div className="overflow-x-auto bg-white my-4 shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border text-lg text-center">
                            <th className="border">#</th>
                            <th className="border">Notice</th>
                            <th className="border">Publish Date</th>
                            <th className="border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notice?.map((notice, ind) => (
                                <tr key={notice.id}>
                                    <td className="border">
                                        {ind + 1}
                                    </td>
                                    <td className="border">
                                        {notice.notise}
                                    </td>
                                    <td className="border">
                                        {/* Format the date here */}
                                        {
                                            notice.createAt &&
                                            (() => {
                                                const date = new Date(notice.createAt);
                                                const formattedDate = date.toLocaleDateString("en-US", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric"
                                                });
                                                return formattedDate;
                                            })()
                                        }
                                    </td>
                                    <th className="border flex items-center justify-center gap-2 text-xl">
                                        <div onClick={() => handleDelete(notice.id)} className="bg-red-400 p-1 text-white rounded-md">
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

export default AllNotice