import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"

const Dashbord = () =>{

    const asiouxSecure = useAxious()

    const {data} = useQuery({
        queryKey: ['patients'],
        queryFn:async () => {
            const res = await asiouxSecure.get('/patients/patients/')
            return res.data
        }
       
      
    })

    console.log(data)

    return (
        <div>
            <h1 className="bg-primaryColor">THis os Dashbord section</h1>
            <h1 className="bg-secondaryColor">THis os Dashbord section</h1>
            <h1 className="bg-ThirthColor">THis os Dashbord section</h1>
        </div>
    )
}

export default Dashbord