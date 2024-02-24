import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import { data } from "autoprefixer"
import DoctorsData from "./DoctorsData"

const AllDoctors = () =>{

    const secureAxious = useAxious()

    const {data:doctors, refetch} = useQuery({
        queryKey:['doctors'],
        queryFn: async () =>{
            const res = await secureAxious.get('/doctors/')
            return res.data
        }
    })

    return (
        <div>
            <PageTitle title={'All Doctors'} mainPage='Doctors' page={'All Doctors'}></PageTitle>
            <DoctorsData doctors={doctors} refetch={refetch}></DoctorsData>
        </div>
    )
}

export default AllDoctors