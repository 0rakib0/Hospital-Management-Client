import { useQuery } from "@tanstack/react-query"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import useAxious from "../../Hook/SecureAxious"

const SendMessage = () => {


    const secureAxious = useAxious()

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
        
        secureAxious.post('/messages/', messageData)
        .then(res =>{
            console.log(res.data)
        })
    }

    return (
        <div>
            <div>
                <PageTitle title='Send Message' mainPage='Message' page='Send Message'></PageTitle>
                <form className="mt-4" onSubmit={handlesubmit}>
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
                        <textarea name="message" id="" cols="30" rows="10" className="focus:border-secondaryColor border border-primaryColor focus:outline-0 p-2 rounded-md" placeholder="Write Notice Here"></textarea>
                    </label>
                    <input type="submit" value='Add Notification' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
                </form>
            </div>
        </div>
    )
}

export default SendMessage