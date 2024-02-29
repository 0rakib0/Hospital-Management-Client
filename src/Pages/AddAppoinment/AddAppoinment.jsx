import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"

const AddAppoinment = () => {


    const secureAxious = useAxious()

    const {data:paytients} = useQuery({
        queryKey:['paytients'],
        queryFn: async () =>{
            const res = await secureAxious.get('/patients/patients/')
            return res.data
        }
    })

    const {data:doctors} = useQuery({
        queryKey:['doctors'],
        queryFn: async () =>{
            const res = await secureAxious.get('/doctors/')
            return res.data
        }
    })




    return (
        <div>
            <PageTitle title='Add Appoinment' mainPage='Appoinment' page='Add Appoinment'></PageTitle>
            <div className="bg-white my-4 p-4 rounded-md shadow-lg">
                <h4 className="text-2xl font-semibold pb-2">Add Patients</h4>
                <hr />
                <form className="mt-4">
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Patients Name </span>
                            </div>
                            <select name="paytient" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
                                <option className="mt-2" value="" selected hidden>SELECT PATIENTS</option>
                                {
                                    paytients?.map(paytient => <option key={paytient.id} value={paytient.id}>{paytient.full_name}</option>)
                                }
                            </select>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Doctor Name </span>
                            </div>
                            <select name="paytient" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
                                <option className="mt-2" value="" selected hidden>SELECT DOCTOR</option>
                                {
                                    doctors?.map(doctor => <option key={doctor.id} value={doctor.id}>{doctor.doctorName}</option>)
                                }
                            </select>
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Appoinment Date</span>
                            </div>
                            <input type="date" name="appoinemtDate" placeholder="Appoinment Date" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Department</span>
                            </div>
                            <select name="department" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
                                <option className="mt-2" value="" selected hidden>SELECT DEPERTMENT</option>
                                <option value="Neuro">Neuro</option>
                                <option value="Ortho">Ortho</option>
                                <option value="Generel">Generel</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Time Slot</span>
                            </div>
                            <input type="text" name="timeSlot" placeholder="Appoinment Time" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Problem</span>
                            </div>
                            <input type="text" name="problem" placeholder="Problem" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <input type="submit" value='Add Payment' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
                </form>
            </div>
        </div>
    )
}
export default AddAppoinment