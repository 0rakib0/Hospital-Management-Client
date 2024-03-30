import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import useNoDataMessage from "../../Hook/useNoDataMessage"
import { Helmet } from "react-helmet-async"

const AllNotice = () => {

    const secureAxious = useAxious()
    


    const { data: notice, isLoading, refetch } = useQuery({
        queryKey: ['notice'],
        queryFn: async () => {
            const res = await secureAxious.get('/notice/')
            return res.data
        }
    })


    
    


    const handleDelete = (id) => {
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
            <Helmet>
                <title>Health Care | All Notice</title>
            </Helmet>
            <PageTitle mainPage='Payment' page='Payment List'></PageTitle>
            <div className="overflow-x-auto bg-white my-4 shadow-lg mx-6">
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
                {isLoading && <div className="flex flex-col gap-4 w-full mt-6">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-tull"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>}
                <p className="text-center my-6">{useNoDataMessage(notice)}</p>
            </div>
        </div>
    )
}

export default AllNotice