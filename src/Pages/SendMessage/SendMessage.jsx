import { useQuery } from "@tanstack/react-query"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import useAxious from "../../Hook/SecureAxious"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const SendMessage = () => {


    const secureAxious = useAxious()
    const naviget = useNavigate()

    const {data:doctors} = useQuery({
        queryKey:['doctors'],
        queryFn: async () =>{
            const res = await secureAxious.get('/doctors/')
            return res.data
        }
    })


    const handlesubmit = (e) =>{
        e.preventDefault()

        const form = e.target
        const doctor = form.doctor.value
        const message = form.message.value

        const messageData = {
            doctor,
            message
        }
        
        console.log(messageData)

        secureAxious.post('/messages/', messageData)
        .then(res =>{
            if (res.data.message) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Massage Successfully Send!",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
                naviget('/all-message/')
            }
            else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Message not sent, something wrong!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Health Care | Send Message</title>
            </Helmet>
            <div>
                <PageTitle mainPage='Message' page='Send Message'></PageTitle>
                <form className="mt-4 mx-6" onSubmit={handlesubmit}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Doctor Name </span>
                        </div>
                        <select name="doctor" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
                            <option className="mt-2" value="" selected hidden>SELECT DOCTOR</option>
                            {
                                doctors?.map(doctor => <option key={doctor.id} value={doctor.id}>{doctor.doctorName}</option>)
                            }
                        </select>
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Message</span>
                        </div>
                        <textarea name="message" id="" cols="30" rows="10" className="focus:border-secondaryColor border border-primaryColor focus:outline-0 p-2 rounded-md" placeholder="Write Message Here"></textarea>
                    </label>
                    <input type="submit" value='Add Notification' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
                </form>
            </div>
        </div>
    )
}

export default SendMessage