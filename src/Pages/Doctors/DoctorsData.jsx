import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxious from "../../Hook/SecureAxious";
import useNoDataMessage from "../../Hook/useNoDataMessage";


const DoctorsData = ({ doctors, refetch }) => {

    const secureAxious = useAxious()


    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this paients?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxious.delete(`/doctors/${id}/`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.message) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Doctor Successfullt Deleted!",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }


    return (
        <div className="overflow-x-auto bg-white my-4 shadow-lg">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="border text-lg text-center">
                        <th className="border">
                            Image
                        </th>
                        <th className="border">Doctor ID</th>
                        <th className="border">Doctor Name</th>
                        <th className="border">Age</th>
                        <th className="border">Phone</th>
                        <th className="border">Email</th>
                        <th className="border">Join Date</th>
                        <th className="border">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        doctors?.map(doctor => <tr key={doctor.id}>
                            <th className="border">
                                <div className="avatar">
                                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                                        <img src={'http://127.0.0.1:8000' + doctor?.doctor_pic} alt="" />

                                    </div>
                                </div>
                            </th>
                            <td className="border">
                                <p>{doctor?.doctorId}</p>
                            </td>
                            <td className="border">
                                <p>{doctor?.doctorName}</p>
                            </td>
                            <td className="border">{doctor?.age}</td>
                            <td className="border">{doctor?.phone}</td>
                            <td className="border">{doctor?.email}</td>
                            <td className="border">{doctor?.created_at}</td>
                            

                            <th className="border flex items-center justify-center gap-2 text-xl">
                                <div className="bg-blue-400 p-1 text-white rounded-md">
                                    <Link to={`/doctor-details/${doctor.id}`}><FaEye></FaEye></Link>
                                </div>
                                
                                <div className="bg-green-400 p-1 text-white rounded-md">
                                    <Link to={`/update-doctor/${doctor.id}`}><FaPencilAlt></FaPencilAlt></Link>
                                </div>

                                <div className="bg-red-400 p-1 text-white rounded-md">
                                    <Link onClick={() => handleDelete(doctor.id)}><FaTrash></FaTrash></Link>
                                </div>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
            <p className="text-center my-6">{useNoDataMessage(doctors)}</p>
        </div>
    )
}

export default DoctorsData