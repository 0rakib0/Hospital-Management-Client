import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import { useParams } from "react-router-dom"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import { Helmet } from "react-helmet-async"

const DoctorDetail = () =>{

    const secureAxious = useAxious()
    const {id} = useParams()
    const {data:doctor , isLoading} = useQuery({
        queryKey: ['doctor', id],
        queryFn: async () =>{
            const res = await secureAxious.get(`/doctors/${id}/`)
            return res.data
        }
    })


    if (isLoading) {
        return <div className="flex flex-col gap-4 w-52 mt-12 ml-12">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    }
    console.log(doctor)
    return (
        <div>
            <Helmet>
                <title>Health Care | Dr. Details</title>
            </Helmet>
            <div>
            <PageTitle mainPage='Doctor' page='Doctor Details'></PageTitle>
            <div className="my-4 p-4 rounded-md shadow-lg">
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="lg:w-6/12 bg-white">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Details</p>
                        <div className="bg-primaryColor w-[15rem] h-[15rem] overflow-hidden ml-6 mt-4">
                            <img src={doctor?.doctor_pic} className="w-full" alt="" />
                        </div>
                        <div className="overflow-x-auto my-4 ">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="border font-bold">
                                            Doctor ID
                                        </td>
                                        <td className="border">
                                            {doctor?.doctorId}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Full Name
                                        </td>
                                        <td className="border">
                                            {doctor?.doctorName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Date Of Birth
                                        </td>
                                        <td className="border">
                                            {doctor?.date_of_birth}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Age
                                        </td>
                                        <td className="border">
                                            {doctor?.age}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Phone
                                        </td>
                                        <td className="border">
                                            {doctor?.phone}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Email
                                        </td>
                                        <td className="border">
                                            {doctor?.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Gender
                                        </td>
                                        <td className="border">
                                            {doctor?.gender}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Full Address
                                        </td>
                                        <td className="border">
                                            {doctor?.address}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Details About Patients
                                        </td>
                                        <td className="border">
                                            {doctor?.doctor_details}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="bg-white lg:w-6/12 p-2 overflow-x-scroll">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Doctor Apoinment Status</p>
                        <table className="table">
                            {/* head */}
                            <thead className="bg-gray-100">
                                <tr className="border text-lg text-center">
                                    <th className="border px-4 py-2">Doctor Name</th>
                                    <th className="border px-4 py-2">Cost</th>
                                    <th className="border px-4 py-2">Visit Date</th>
                                    <th className="border px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border">
                                    <td className="border px-4 py-2">
                                        John Dev
                                    </td>
                                    <td className="border px-4 py-2">
                                        $30
                                    </td>
                                    <td className="border px-4 py-2">01-02-2002</td>
                                    <td className="border px-4 py-2">Oparation</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default DoctorDetail