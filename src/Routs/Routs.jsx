
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
          element: <Addpatients></Addpatients>
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
        }
      ]
    },
  ]);


export default router