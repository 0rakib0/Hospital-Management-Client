import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const DataTable = ({patients}) => {
    return (
        <div className="overflow-x-auto bg-white my-4 shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border text-lg text-center">
                            <th className="border">
                                Image
                            </th>
                            <th className="border">Patiend ID</th>
                            <th className="border">Patient Name</th>
                            <th className="border">Age</th>
                            <th className="border">Phone</th>
                            <th className="border">Email</th>
                            <th className="border">Status</th>
                            <th className="border">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            patients?.map(patient => <tr key={patient.id}>
                                <th className="border">
                                    <div className="avatar">
                                        <div className="bg-neutral text-neutral-content rounded-full w-12">
                                            <img src={'http://127.0.0.1:8000' + patient.patients_pic} alt="" />
                    
                                        </div>
                                    </div>
                                </th>
                                <td className="border">
                                    <p>{patient?.patients_Id}</p>
                                </td>
                                <td className="border">
                                    <p>{patient.full_name}</p>
                                </td>
                                <td className="border">{patient.phone}</td>
                                <td className="border">{patient.email}</td>
                                <td className="border">Payment Info</td>
                                {patient.disCharged ? <th className="border">
                                    <p className="bg-primaryColor text-center text-white font-normal py-[2px] rounded">Discherge</p>
                                </th> :
                                    <th className="border">
                                        <p className="bg-blue-400 text-center text-white font-normal py-[2px] rounded">In Treatment</p>
                                    </th>
                                }
                    
                                <th className="border flex items-center justify-center gap-2 text-xl">
                                    <div className="bg-green-400 p-1 text-white rounded-md">
                                        <Link to={`/update-patients/${patient.id}`}><FaPencilAlt></FaPencilAlt></Link>
                                    </div>
                                    <div className="bg-blue-400 p-1 text-white rounded-md">
                                        <Link><FaEye></FaEye></Link>
                                    </div>
                                    <div className="bg-red-400 p-1 text-white rounded-md">
                                        <Link><FaTrash></FaTrash></Link>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
    )
}

export default DataTable