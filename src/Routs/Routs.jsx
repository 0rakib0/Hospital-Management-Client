
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
import SignelPatientsInfo from "../Pages/Dashbord/PatientsDashbord";
import DrReletedAppoinment from "../Pages/DrReletedAppoinment/DrReletedAppoinment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'',
            element: <Dashbord></Dashbord>
        },
        {
          path:'/add-patients/',
          element: <PrivatRouts><Addpatients></Addpatients></PrivatRouts>
        },
        {
          path:'/all-patients/',
          element: <AllPatients></AllPatients>
        },
        {
          path:'/tretments-patients/',
          element: <TretmentsPatients></TretmentsPatients>
        },
        {
          path: '/discharge-patients/',
          element: <Discharge></Discharge>
        },
        {
          path: '/add-dostors/',
          element: <AddDoctors></AddDoctors>
        },
        {
          path:'/update-patients/:id',
          element: <Update_patients></Update_patients>
        },
        {
          path:'/patient-details/:id',
          element: <PatientsDetails></PatientsDetails>
        },
        {
          path:'/all-doctors/',
          element: <AllDoctors></AllDoctors>
        },
        {
          path:'/update-doctor/:id',
          element: <UpdateDoctor></UpdateDoctor>
        },
        {
          path:'/doctor-details/:id',
          element: <DoctorDetail></DoctorDetail>
        },
        {
          path:'/add-payment/',
          element: <AddPayment></AddPayment>
        },
        {
          path:'/payment-list/',
          element: <PaymentList></PaymentList>
        },
        {
          path:'/add-appoinment/',
          element: <AddAppoinment></AddAppoinment>
        },
        {
          path:'/appoinment-list/',
          element: <AppoinmentList></AppoinmentList>
        },
        {
          path:'/appoinment-details/:id',
          element: <AppoinmentDetails></AppoinmentDetails>
        },
        {
          path:'/add-notice/',
          element: <AddNotice></AddNotice>
        },
        {
          path:'/all-notice/',
          element: <AllNotice></AllNotice>
        },
        {
          path:'/send-message/',
          element: <SendMessage></SendMessage>
        },
        {
          path:'/all-message/',
          element:<AllMessage></AllMessage>
        },
        {
          path:'/login/',
          element: <LoginPage></LoginPage>
        },
        {
          path:'/single-patienst-info/',
          element: <SignelPatientsInfo></SignelPatientsInfo>
        },
        {
          path:'/dr-eleted-appoinment/',
          element: <DrReletedAppoinment></DrReletedAppoinment>
        }
      ]
    },
  ]);


export default router