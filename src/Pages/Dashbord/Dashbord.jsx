import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import useAuth from "../../Hook/useAuth"
import { FaWheelchair } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbWheelchair } from "react-icons/tb";
import { MdOutlineWheelchairPickup } from "react-icons/md";
const Dashbord = () => {

    const asiouxSecure = useAxious()
    const { user, userInfo } = useAuth()

    const { data } = useQuery({
        queryKey: ['patients'],
        queryFn: async () => {
            const res = await asiouxSecure.get('/patients/patients/')
            return res.data
        }


    })


    console.log(userInfo)

    return (
        <div className="m-6">
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-red-500 p-4 flex items-center justify-center">
                        <FaWheelchair className="text-4xl text-white"></FaWheelchair>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link>All Patients</Link></p>
                        <p>0</p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-blue-500 p-4 flex items-center justify-center">
                        <TbWheelchair className="text-4xl text-white"></TbWheelchair>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link>Add Patients</Link></p>
                    </div>
                </div>

                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-green-500 p-4 flex items-center justify-center">
                        <FaWheelchair className="text-4xl text-white"></FaWheelchair>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link>In Treathment Patients</Link></p>
                        <p>0</p>
                    </div>
                </div>
                <div className="bg-white flex items-center">
                    <div className="h-full w-2/5 bg-yellow-500 p-4 flex items-center justify-center">
                        <MdOutlineWheelchairPickup className="text-4xl text-white"></MdOutlineWheelchairPickup>
                    </div>
                    <div className="ml-4 text-xl">
                        <p><Link>Dishcharg Patients</Link></p>
                        <p>0</p>
                    </div>
                </div> 


            </div>
        </div>
    )
}

export default Dashbord