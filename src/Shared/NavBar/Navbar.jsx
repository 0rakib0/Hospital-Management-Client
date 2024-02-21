import { Link } from "react-router-dom"
import DropDownStack from "./Dropdownstack"

const NavBar = () => {

    const PatientChilditemss =
        <>
            <li className="hover:text-white"><Link to='/add-patients/'>Add Patient</Link></li>
            <li className="hover:text-white"><Link to='/all-patients/'>All Patient</Link></li>
            <li className="hover:text-white"><Link to='/tretments-patients/'>Pending Patients</Link></li>
            <li className="hover:text-white"><Link to='/discharge-patients/'>Discharged Patient</Link></li>
        </>

    const DoctorChilditemss =
        <>
            <li className="hover:text-white"><Link to='/add-dostors/'>Add Doctor</Link></li>
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

    const otheseChildren =
        <>
            <li className="hover:"><Link>Add Notice</Link></li>
            <li className="hover:text-white"><Link>Send Message</Link></li>
        </>


    return (
        <div className="bg-primaryColor mb-1 flex lg:items-center lg:flex-row flex-col lg:gap-24 px-6 lg:py-6 pb-6">

            <div className="mb-3 lg:mb-0 p-2">
                <h4 className="text-4xl font-bold text-white">LOGO</h4>
            </div>
            <div>
                <ul className="flex lg:items-center lg:flex-row flex-col lg:justify-center  relative gap-y-2 gap-x-6">
                    <li className="md:mt-1 text-white border py-1 px-4"><Link to=''>Dashbord</Link></li>
                    <DropDownStack parentItem="Patients" ChildItems={PatientChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Doctor" ChildItems={DoctorChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Appointments" ChildItems={ApointmentChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Payments" ChildItems={PaymentChilditemss}></DropDownStack>
                    <DropDownStack parentItem="Others" ChildItems={otheseChildren}></DropDownStack>

                </ul>
            </div>

        </div>
    )
}

export default NavBar