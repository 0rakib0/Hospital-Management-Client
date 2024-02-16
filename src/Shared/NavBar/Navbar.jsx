import { Link } from "react-router-dom"
import DropDownStack from "./Dropdownstack"

const NavBar = () => {

    const PatientChilditemss =
        <>
            <li className="hover:text-white"><Link>Add Patient</Link></li>
            <li className="hover:text-white"><Link>All Patient</Link></li>
            <li className="hover:text-white"><Link>Patient Details</Link></li>
            <li className="hover:text-white"><Link>Edit Patient</Link></li>
        </>

    const DoctorChilditemss =
        <>
            <li className="hover:text-white"><Link>Add Doctor</Link></li>
            <li className="hover:text-white"><Link>All Doctor</Link></li>
            <li className="hover:text-white"><Link>Doctor Details</Link></li>
            <li className="hover:text-white"><Link>Edit Doctor</Link></li>
        </>
    
    const ApointmentChilditemss =
        <>
            <li className="hover:"><Link>Add Doctor</Link></li>
            <li className="hover:text-white"><Link>All Doctor</Link></li>
            <li className="hover:text-white"><Link>Doctor Details</Link></li>
            <li className="hover:text-white"><Link>Edit Doctor</Link></li>
        </>


    return (
        <div className="bg-primaryColor mb-4 flex flex-row flex-col md:gap-24 px-6">

            <div>
                <h4 className="text-4xl font-bold">LOGO</h4>
            </div>
            <div>
                <ul className="flex items flex-col lg:justify-center  relative gap-2">
                    <li className="md:mt-1 text-white"><Link>Dashbord</Link></li>
                    <DropDownStack parentItem="Patients" ChildItems={PatientChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Doctor" ChildItems={DoctorChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Appointments" ChildItems={ApointmentChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Payments" ChildItems={ApointmentChilditemss}></DropDownStack>
                    
                </ul>
            </div>

        </div>
    )
}

export default NavBar