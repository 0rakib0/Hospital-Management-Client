import { Link } from "react-router-dom"
import DropDownStack from "./Dropdownstack"
import useAuth from "../../Hook/useAuth"

const NavBar = () => {


    const { userInfo } = useAuth()

    const userType = userInfo?.user_type
    console.log(userType)

    const PatientChilditemss =
        <>
            <li className="hover:text-white"><Link to='/add-patients/'>Add Patient</Link></li>
            <li className="hover:text-white"><Link to='/all-patients/'>All Patient</Link></li>
            <li className="hover:text-white"><Link to='/tretments-patients/'>In Tratment</Link></li>
            <li className="hover:text-white"><Link to='/discharge-patients/'>Discharged Patient</Link></li>
        </>

    const DoctorChilditemss =
        <>
            <li className="hover:text-white"><Link to='/add-dostors/'>Add Doctor</Link></li>
            <li className="hover:text-white"><Link to='/all-doctors/'>All Doctor</Link></li>
            <li className="hover:text-white"><Link>Doctor Details</Link></li>
            <li className="hover:text-white"><Link>Edit Doctor</Link></li>
        </>

    const ApointmentChilditemss =
        <>
            <li className="hover:"><Link to='/add-appoinment/'>Add Apointment</Link></li>
            <li className="hover:text-white"><Link to='/appoinment-list/'>All Appointment</Link></li>
        </>

    const PaymentChilditemss =
        <>
            <li className="hover:"><Link to='/add-payment/'>Add Payment</Link></li>
            <li className="hover:text-white"><Link to='/payment-list/'>Payment Report</Link></li>
        </>

    const otheseChildren =
        <>
            <li className="hover:"><Link to='/add-notice/'>Add Notice</Link></li>
            <li className="hover:"><Link to='/all-notice/'>All Notice</Link></li>
            <li className="hover:text-white"><Link to='/send-message/'>Send Message</Link></li>
            <li className="hover:text-white"><Link to='/all-message/'>All Message</Link></li>
        </>


    return (
        <div className="bg-primaryColor mb-1 flex lg:items-center lg:flex-row flex-col lg:gap-24 px-6 lg:py-6 pb-6">

            <div className="mb-3 lg:mb-0 p-2">
                <h4 className="text-4xl font-bold text-white">LOGO</h4>
            </div>
            {userType == 'patients' ? (
                <div><li className="md:mt-1 text-white border py-1 px-4"><Link to='/single-patienst-info/'>Dashbord</Link></li></div>
            ) : userType == 'doctor' ? (
                <div>
                    <Link to='/single-patienst-info/' className="md:mt-1 text-white border py-1 px-4">Dctor Dashbord</Link>
                    <Link to='/dr-eleted-appoinment/' className="md:mt-1 text-white border py-1 px-4">Appoinment List</Link>
                    <Link to='/single-patienst-info/' className="md:mt-1 text-white border py-1 px-4">Visits List</Link>
                    <Link to='/dr-releted-message/' className="md:mt-1 text-white border py-1 px-4">Messages</Link>
                </div>
            ) : (
                <div>
                    <ul className="flex lg:items-center lg:flex-row flex-col lg:justify-center  relative gap-y-2 gap-x-6">
                        <li className="md:mt-1 text-white border py-1 px-4"><Link to=''>Dashbord</Link></li>
                        <DropDownStack parentItem="Patients" ChildItems={PatientChilditemss}></DropDownStack>
                        <DropDownStack parentItem="Doctor" ChildItems={DoctorChilditemss}></DropDownStack>
                        <DropDownStack parentItem="Appointments" ChildItems={ApointmentChilditemss}></DropDownStack>
                        <DropDownStack parentItem="Admin control" ChildItems={otheseChildren}></DropDownStack>
                        <DropDownStack parentItem="Payments" ChildItems={PaymentChilditemss}></DropDownStack>

                    </ul>
                </div>
            )

            }
        </div>
    )
}

export default NavBar