import { useQuery } from "@tanstack/react-query"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import useAxious from "../../Hook/SecureAxious"
import DataTable from "./DataTable";
import { Link } from "react-router-dom";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";

const AllPatients = () => {

    const secureAxious = useAxious()

    const { data: patients, isLoading, refetch } = useQuery({
        queryKey: ['patients'],
        queryFn: async () => {
            const res = await secureAxious.get('/patients/patients/')
            return res.data
        }
    })


    return (
        <div>
            <PageTitle mainPage='Patients' page={'All Patients'}></PageTitle>
            <div className="mx-6">
                <DataTable patients={patients} refetch={refetch} loading={isLoading}></DataTable>
            </div>
        </div>
    )
}
export default AllPatients