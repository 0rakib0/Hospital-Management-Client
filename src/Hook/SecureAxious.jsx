
import axios from 'axios';

const axiousSecure = axios.create({
    baseURL: 'https://hostipat-django-server.vercel.app/',
  });


  const useAxious = () =>{
    return (
        axiousSecure
    )
  }

  export default useAxious
