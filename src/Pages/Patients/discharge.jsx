import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import DataTable from "./DataTable"

const Discharge = () =>{

    const secureAxious = useAxious()

    const { data: patients, refetch } = useQuery({
        queryKey: ['patients'],
        queryFn: async () => {
            const res = await secureAxious.get('/patients/discharge-patients/')
            return res.data
        }
    })

    return (
        <div>
            <PageTitle title={'Discharge Patients'} mainPage='Patients' page={'Discharge Patients'}></PageTitle>
            <DataTable patients={patients} refetch={refetch}></DataTable>
        </div>
    )
}

export default Discharge