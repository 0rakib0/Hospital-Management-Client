
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Roots/Roots";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Addpatients from "../Pages/Patients/AddPatients";
import AllPatients from "../Pages/Patients/All_patients";
import TretmentsPatients from "../Pages/Patients/TrenmentsPatients";
import Discharge from "../Pages/Patients/discharge";
import AddDoctors from "../Pages/Doctors/AddDoctors";
import Update_patients from "../Pages/Patients/UpdatePatients";
import PatientsDetails from "../Pages/Patients/patentsDetails";
import AllDoctors from "../Pages/Doctors/AllDoctors";
import UpdateDoctor from "../Pages/Doctors/UpdateDoctor";
import DoctorDetail from "../Pages/Doctors/doctorDetails";
import AddPayment from "../Pages/AddPayment/AddPayment";
import PaymentList from "../Pages/PaymentList/PaymentList";
import AddAppoinment from "../Pages/AddAppoinment/AddAppoinment";
import AppoinmentList from "../Pages/AppoinmentList/AppoinmentList";
import AppoinmentDetails from "../Pages/AppoinmentDetails/AppoinmentDetails";
import AddNotice from "../Pages/AddNotice/AddNotice";
import AllNotice from "../Pages/AllNotice/AllNotice";
import SendMessage from "../Pages/SendMessage/SendMessage";
import AllMessage from "../Pages/AllMessage/AllMessage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import PrivatRouts from "./PrivatRouts";
import DrReletedAppoinment from "../Pages/DrReletedAppoinment/DrReletedAppoinment";
import DrReletedMessage from "../Pages/DrReletedMessage/DrReletedMessage";
import Home from "../Pages/Home/Home";
import ApproveAppoinment from "../Pages/ApproveAppoinment/ApproviAppoinment";
import RejectAppoinment from "../Pages/RejectAppoinment/RejectAppoinment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path:'',
          element:<Home></Home>
        },
        {
            path:'/dashbord/',
            element: <PrivatRouts><Dashbord></Dashbord></PrivatRouts>
        },
        {
          path:'/add-patients/',
          element: <PrivatRouts><Addpatients></Addpatients></PrivatRouts>
        },
        {
          path:'/all-patients/',
          element: <PrivatRouts><AllPatients></AllPatients></PrivatRouts>
        },
        {
          path:'/tretments-patients/',
          element: <PrivatRouts><TretmentsPatients></TretmentsPatients></PrivatRouts>
        },
        {
          path: '/discharge-patients/',
          element: <PrivatRouts><Discharge></Discharge></PrivatRouts>
        },
        {
          path: '/add-dostors/',
          element: <PrivatRouts><AddDoctors></AddDoctors></PrivatRouts>
        },
        {
          path:'/update-patients/:id',
          element: <PrivatRouts><Update_patients></Update_patients></PrivatRouts>
        },
        {
          path:'/patient-details/:id',
          element: <PrivatRouts><PatientsDetails></PatientsDetails></PrivatRouts>
        },
        {
          path:'/all-doctors/',
          element: <PrivatRouts><AllDoctors></AllDoctors></PrivatRouts>
        },
        {
          path:'/update-doctor/:id',
          element: <PrivatRouts><UpdateDoctor></UpdateDoctor></PrivatRouts>
        },
        {
          path:'/doctor-details/:id',
          element: <PrivatRouts><DoctorDetail></DoctorDetail></PrivatRouts>
        },
        {
          path:'/add-payment/',
          element: <PrivatRouts><AddPayment></AddPayment></PrivatRouts>
        },
        {
          path:'/payment-list/',
          element: <PrivatRouts><PaymentList></PaymentList></PrivatRouts>
        },
        {
          path:'/add-appoinment/',
          element: <PrivatRouts><AddAppoinment></AddAppoinment></PrivatRouts>
        },
        {
          path:'/appoinment-list/',
          element: <PrivatRouts><AppoinmentList></AppoinmentList></PrivatRouts>
        },
        {
          path:'/approveappoinemnt/',
          element: <PrivatRouts><ApproveAppoinment></ApproveAppoinment></PrivatRouts>
        },
        {
          path:'/reject-apoinment/',
          element: <PrivatRouts><RejectAppoinment></RejectAppoinment></PrivatRouts>
        },
        {
          path:'/appoinment-details/:id',
          element: <PrivatRouts><AppoinmentDetails></AppoinmentDetails></PrivatRouts>
        },
        {
          path:'/add-notice/',
          element: <PrivatRouts><AddNotice></AddNotice></PrivatRouts>
        },
        {
          path:'/all-notice/',
          element: <PrivatRouts><AllNotice></AllNotice></PrivatRouts>
        },
        {
          path:'/send-message/',
          element: <PrivatRouts><SendMessage></SendMessage></PrivatRouts>
        },
        {
          path:'/all-message/',
          element: <PrivatRouts><AllMessage></AllMessage></PrivatRouts>
        },
        {
          path:'/login/',
          element: <LoginPage></LoginPage>
        },
        {
          path:'/dr-eleted-appoinment/',
          element: <PrivatRouts><DrReletedAppoinment></DrReletedAppoinment></PrivatRouts>
        },
        {
          path:'/dr-releted-message/',
          element: <PrivatRouts><DrReletedMessage></DrReletedMessage></PrivatRouts>
        }
      ]
    }
  ]);


export default router