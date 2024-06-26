import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import DataTable from "./DataTable"
import { Helmet } from "react-helmet-async"

const TretmentsPatients = () => {

    const secureAxious = useAxious()

    const { data: patients, isLoading, refetch } = useQuery({
        queryKey: ['patients'],
        queryFn: async () => {
            const res = await secureAxious.get('/patients/in-treatment-patients/')
            return res.data
        }
    })

    return (
        <div>
            <Helmet>
                <title>Health Care | Treathment Patients</title>
            </Helmet>
            <PageTitle title={'Treatment Patients'} mainPage='Patients' page={'Treatment Patients'}></PageTitle>
            <div className="mx-6">
                <DataTable patients={patients} refetch={refetch} loading={isLoading}></DataTable>
            </div>
        </div>
    )
}


export default TretmentsPatients