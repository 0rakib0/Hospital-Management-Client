
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Roots/Roots";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Addpatients from "../Pages/Patients/AddPatients";

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
        }
      ]
    },
  ]);


export default router