
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Roots/Roots";
import Dashbord from "../Pages/Dashbord/Dashbord";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'',
            element: <Dashbord></Dashbord>
        }
      ]
    },
  ]);


export default router