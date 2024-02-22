import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import DataTable from "./DataTable"

const TretmentsPatients = () =>{

    const secureAxious = useAxious()

    const { data: patients, refetch } = useQuery({
        queryKey: ['patients'],
        queryFn: async () => {
            const res = await secureAxious.get('/patients/in-treatment-patients/')
            return res.data
        }
    })

    return (
        <div>
            <PageTitle title={'Treatment Patients'} mainPage='Patients' page={'Treatment Patients'}></PageTitle>
            <DataTable patients={patients} refetch={refetch}></DataTable>
        </div>
    )
}


export default TretmentsPatients