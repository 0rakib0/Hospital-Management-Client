import { useQuery } from "@tanstack/react-query"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import useAxious from "../../Hook/SecureAxious"
import { useParams } from "react-router-dom"

const PatientsDetails = () => {

    const singleP = useParams()
    const patientsId = singleP.id

    const secureAxious = useAxious()

    const { data: patient } = useQuery({
        queryKey: ['patients', patientsId],
        queryFn: async () => {
            const res = await secureAxious.get(`/patients/patients/${patientsId}`)
            return res.data
        }
    })

    const { data: payments } = useQuery({
        queryKey: ['payments', patientsId],
        queryFn: async () => {
            const res = await secureAxious.get(`/payments/${patientsId}`)
            return res.data
        }
    })

    console.log(payments)

    return (
        <div>
            <PageTitle title='Patient Details' mainPage='Patients' page='Patient Details'></PageTitle>
            <div className="my-4 p-4 rounded-md shadow-lg">
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="lg:w-6/12 bg-white">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Details</p>
                        <div className="bg-primaryColor w-[15rem] h-[15rem] overflow-hidden ml-6 mt-4">
                            <img src={'http://127.0.0.1:8000' + patient?.patients_pic} className="w-full" alt="" />
                        </div>
                        <div className="overflow-x-auto my-4 ">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="border font-bold">
                                            Patient ID
                                        </td>
                                        <td className="border">
                                            {patient?.patients_Id}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Full Name
                                        </td>
                                        <td className="border">
                                            {patient?.full_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Date Of Birth
                                        </td>
                                        <td className="border">
                                            {patient?.date_of_birth}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Age
                                        </td>
                                        <td className="border">
                                            {patient?.age}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Phone
                                        </td>
                                        <td className="border">
                                            {patient?.phone}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Email
                                        </td>
                                        <td className="border">
                                            {patient?.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Gender
                                        </td>
                                        <td className="border">
                                            {patient?.gender}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Full Address
                                        </td>
                                        <td className="border">
                                            {patient?.full_address}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Details About Patients
                                        </td>
                                        <td className="border">
                                            {patient?.details}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border font-bold">
                                            Patients Status
                                        </td>
                                        <td className="border">
                                            {patient?.disCharged ? <p>Dischared</p> :
                                                <p>In Treatment</p>
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="bg-white lg:w-6/12 p-2 overflow-x-scroll">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Visits</p>
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
            <div>
                <div className="mt-4 bg-white p-4 overflow-x-scroll">
                    <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Payment Transactions</p>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="border text-lg">
                                <th className="border">Payment Date</th>
                                <th className="border">Total Cost</th>
                                <th className="border">Payment Type</th>
                                <th className="border">Cash/Check No</th>
                                <th className="border">Service</th>
                                <th className="border">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments?.map(payment => <tr key={payment.id}>
                                    <td className="border">
                                        <td>
                                            {/* Format the date here */}
                                            {
                                                payment?.createdAtt &&
                                                (() => {
                                                    const date = new Date(payment.createdAtt);
                                                    const formattedDate = date.toLocaleDateString("en-US", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric"
                                                    });
                                                    return formattedDate;
                                                })()
                                            }
                                        </td>
                                    </td>
                                    <td className="border">{payment?.costOfTreatment}</td>
                                    <td className="border">{payment?.paymentType}</td>
                                    <td className="">
                                        {payment?.chardOrChackNo ? <td className="">{payment?.chardOrChackNo}</td>
                                            : <td className="">Cash payment</td>
                                        }
                                    </td>
                                    <td className="border">{payment?.service}</td>
                                    <td className="border">{payment?.department}</td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default PatientsDetails