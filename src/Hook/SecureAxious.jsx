
import axios from 'axios';

const axiousSecure = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
  });


  const useAxious = () =>{
    return (
        axiousSecure
    )
  }

  export default useAxious
