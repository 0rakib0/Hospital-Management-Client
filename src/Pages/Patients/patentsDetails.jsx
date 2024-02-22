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

    return (
        <div>
            <PageTitle title='Patient Details' mainPage='Patients' page='Patient Details'></PageTitle>
            <div className="my-4 p-4 rounded-md shadow-lg">
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="lg:w-6/12 bg-white">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Details</p>
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
                    <div className="bg-white lg:w-6/12 p-2">
                        <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Visits</p>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="border text-lg text-center">
                                    <th className="border">Doctor Name</th>
                                    <th className="border">Cost</th>
                                    <th className="border">Visit Date</th>
                                    <th className="border">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border">
                                        John Dev
                                    </td>
                                    <td className="border">
                                        $30
                                    </td>
                                    <td className="border">01-02-2002</td>
                                    <td className="border">Oparation</td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-4 bg-white p-2">
                    <p className="text-2xl pl-4 pt-2 font-semibold text-primaryColor">Patient Payment Transactions</p>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="border text-lg">
                                <th className="border">Date</th>
                                <th className="border">Cost</th>
                                <th className="border">Payment Type</th>
                                <th className="border">Invoice</th>
                                <th className="border">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border">02-02-2002</td>
                                <td className="border">100$</td>
                                <td className="border">Cash</td>
                                <td className="border">FounloadCV</td>
                                <td className="border">Oparation</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default PatientsDetails