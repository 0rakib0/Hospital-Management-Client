import { useQuery } from "@tanstack/react-query"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import useAxious from "../../Hook/SecureAxious"
import useNoDataMessage from "../../Hook/useNoDataMessage";
import { Helmet } from "react-helmet-async";

const PaymentList = () => {

    const secureAxious = useAxious()


    const { data: payments, isLoading } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await secureAxious.get('/payments/')
            return res.data
        }
    })

    return (
        <div>
            <Helmet>
                <title>Health Care | Payment List</title>
            </Helmet>
            <PageTitle mainPage='Payment' page='Payment List'></PageTitle>
            <div className="overflow-x-auto bg-white my-4 shadow-lg mx-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border text-lg text-center">
                            <th className="border">Patiend ID</th>
                            <th className="border">Patient Email</th>
                            <th className="border">Department</th>
                            <th className="border">Service</th>
                            <th className="border">Payment System</th>
                            <th className="border">Payment</th>
                            <th className="border">Card/Ckeck No</th>
                            <th className="border">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map(payment => (
                                <tr key={payment.id}>
                                    <td className="border">
                                        <p>{payment?.patientId}</p>
                                    </td>
                                    <td className="border">
                                        <p>{payment?.patientEmail}</p>
                                    </td>
                                    <td className="border">{payment?.department}</td>
                                    <td className="border">{payment?.service}</td>
                                    <td className="border">{payment?.paymentType}</td>
                                    <td className="border">{payment?.costOfTreatment} &#2547;</td>
                                    {payment?.chardOrChackNo?<td className="">{payment?.chardOrChackNo}</td>
                                    : <td className="">Cash payment</td>
                                    }
                                    <td className="border">
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
                <p className="text-center my-6">{useNoDataMessage(payments)}</p>
            </div>
        </div>
    )
}

export default PaymentList