import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#e4f1eafa]'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
