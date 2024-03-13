import { FaUserDoctor, FaUsers } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
const ComplatedService = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center Services-card bg-white hover:rounded-lg duration-300">
                <div className="text-4xl text-primaryColor">
                    <FaUserDoctor></FaUserDoctor>
                </div>
                <h4 className="py-1 text-2xl font-bold">1200+</h4>
                <p>Doctor At Work</p>
            </div>
            <div className="flex flex-col items-center Services-card bg-white hover:rounded-lg duration-300">
                <div className="text-4xl text-primaryColor">
                    <FaBed></FaBed>
                </div>
                <h4 className="py-1 text-2xl font-bold">1800+</h4>
                <p>Total Bed</p>
            </div>
            <div className="flex flex-col items-center Services-card bg-white hover:rounded-lg duration-300">
                <div className="text-4xl text-primaryColor">
                    <FaUsers></FaUsers>
                </div>
                <h4 className="py-1 text-2xl font-bold">3200+</h4>
                <p>Total Patients</p>
            </div>
            <div className="flex flex-col items-center Services-card bg-white hover:rounded-lg duration-300">
                <div className="text-4xl text-primaryColor">
                    <HiBuildingOffice2></HiBuildingOffice2>
                </div>
                <h4 className="py-1 text-2xl font-bold">12+</h4>
                <p>Hospitals</p>
            </div>

        </div>
    )
}

export default ComplatedService