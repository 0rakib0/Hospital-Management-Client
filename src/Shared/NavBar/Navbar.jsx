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
            <li className="hover:"><Link>Add Apointment</Link></li>
            <li className="hover:text-white"><Link>All Appointment</Link></li>
            <li className="hover:text-white"><Link>Appointment Details</Link></li>
            <li className="hover:text-white"><Link>Edit Appointment</Link></li>
        </>

    const PaymentChilditemss =
        <>
            <li className="hover:"><Link>Add Payment</Link></li>
            <li className="hover:text-white"><Link>Payment Report</Link></li>
        </>


    return (
        <div className="bg-primaryColor mb-4 flex lg:items-center lg:flex-row flex-col lg:gap-24 px-6 lg:py-6 pb-6">

            <div className="mb-3 lg:mb-0 p-2">
                <h4 className="text-4xl font-bold">LOGO</h4>
            </div>
            <div>
                <ul className="flex lg:items-center lg:flex-row flex-col lg:justify-center  relative gap-y-2 gap-x-6">
                    <li className="md:mt-1 text-white border py-1 px-4"><Link>Dashbord</Link></li>
                    <DropDownStack parentItem="Patients" ChildItems={PatientChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Doctor" ChildItems={DoctorChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Appointments" ChildItems={ApointmentChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Payments" ChildItems={PaymentChilditemss}></DropDownStack>

                </ul>
            </div>

        </div>
    )
}

export default NavBar