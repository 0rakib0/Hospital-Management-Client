import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import { data } from "autoprefixer"
import DoctorsData from "./DoctorsData"
import { Helmet } from "react-helmet-async"

const AllDoctors = () => {

    const secureAxious = useAxious()

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await secureAxious.get('/doctors/')
            return res.data
        }
    })




    return (
        <div>
            <Helmet>
                <title>Health Care | All Doctor</title>
            </Helmet>
            <PageTitle title={'All Doctors'} mainPage='Doctors' page={'All Doctors'}></PageTitle>
            <div className="mx-6">
                <DoctorsData doctors={doctors} refetch={refetch} loading={isLoading}></DoctorsData>
            </div>
        </div>
    )
}

export default AllDoctors