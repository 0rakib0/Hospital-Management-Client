import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hook/SecureAxious";

const AppoinmentDetails = () => {

    const secureAxious = useAxious()
    const appoinmentt = useParams()
    const appoinmentID = appoinmentt.id

    const { data: appoinments } = useQuery({
        queryKey: ['appoinment', appoinmentID],
        queryFn: async () => {
            const res = await secureAxious.get(`/appoinment/${appoinmentID}`)
            return res.data
        }
    })

    return (
        <div>
            <PageTitle mainPage='Appoinments' page='Appoinment Details'></PageTitle>
            <div className="my-4 p-4 rounded-md shadow-lg">
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="lg:w-6/12 bg-white">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Appoinment Details</p>
                        <div className="overflow-x-auto my-4 ">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="border font-bold">
                                            Docto Name
                                        </td>
                                        <td className="border">
                                            {appoinments?.doctor?.doctorName}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border font-bold">
                                            Docto ID No
                                        </td>
                                        <td className="border">
                                            {appoinments?.doctor?.doctorId}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border font-bold">
                                            Token Number
                                        </td>
                                        <td className="border">
                                            {appoinments?.tokenNumber}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border font-bold">
                                            Department
                                        </td>
                                        <td className="border">
                                            {appoinments?.department}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border font-bold">
                                            Appoinment Date
                                        </td>
                                        <td className="border">
                                            {
                                                appoinments?.appoinmentDate &&
                                                (() => {
                                                    const date = new Date(appoinments.appoinmentDate);
                                                    const formattedDate = date.toLocaleDateString("en-US", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric"
                                                    });
                                                    return formattedDate;
                                                })()
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Appoinment Time
                                        </td>
                                        <td className="border">
                                            {appoinments?.timeSlot}
                                        </td>
                                    </tr>
                                    <td>Appoinment Status</td>
                                    {appoinments?.approveStatus === 'Approved' ? (
                                        <td className="border bg-green-400 text-white text-center">{appoinments?.approveStatus}</td>
                                    ) : appoinments?.approveStatus === 'Rejected' ? (
                                        <td className="border bg-red-400 text-white text-center">{appoinments?.approveStatus} </td>
                                    ) : (
                                        <td className="border bg-blue-400 text-white text-center">{appoinments?.approveStatus}</td>
                                    )}
                                    <tr>
                                        <td className="border font-bold">
                                            Problems Details
                                        </td>
                                        <td className="border">
                                            {appoinments?.problems}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="bg-white lg:w-6/12 p-2 overflow-x-scroll">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patients Details</p>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="border font-bold">
                                        Patiens Name
                                    </td>
                                    <td className="border">
                                        {appoinments?.patient?.full_name}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border font-bold">
                                        Patiens Email
                                    </td>
                                    <td className="border">
                                        {appoinments?.patient?.email}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border font-bold">
                                        Patiens ID No
                                    </td>
                                    <td className="border">
                                        {appoinments?.patient?.patients_Id}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border font-bold">
                                        Patiens Age
                                    </td>
                                    <td className="border">
                                        {appoinments?.patient?.age}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border font-bold">
                                        Date Of Birth
                                    </td>
                                    <td className="border">
                                        {appoinments?.patient?.date_of_birth}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border font-bold">
                                        Patiens Phone
                                    </td>
                                    <td className="border">
                                        {appoinments?.patient?.phone}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border font-bold">
                                        Patiens Gender
                                    </td>
                                    <td className="border">
                                        {appoinments?.patient?.gender}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border font-bold">
                                        Address
                                    </td>
                                    <td className="border">
                                        {appoinments?.patient?.full_address}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppoinmentDetails