import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import useAuth from "../../Hook/useAuth"

const Dashbord = () =>{

    const asiouxSecure = useAxious()
    const {user} = useAuth()

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
            {user&& user}
        </div>
    )
}

export default Dashbord