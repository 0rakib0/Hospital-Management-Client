import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet-async';

const AddAppoinment = () => {


    const secureAxious = useAxious()

    const naviget = useNavigate()

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


    const handleubmit = e =>{
        e.preventDefault()
        const form = e.target
        const patient = form.patientId.value;
        const doctor = form.doctor.value;
        const department = form.department.value
        const appoinmentDate = form.appoinemtDate.value
        const timeSlot = form.timeSlot.value
        const problems = form.problem.value
        
        const AppoinmentInfo = {
            patient,
            doctor,
            department,
            appoinmentDate,
            timeSlot,
            problems
        }

        secureAxious.post('/appoinment/', AppoinmentInfo)
        .then(res =>{
            if (res.data.message) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Appoinment request successfully sent",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
                naviget('/appoinment-list/')
            }
            else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Appoinment request not sent, something wrong!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(error =>{
            alert(error.message)
        })


    }




    return (
        <div>
            <Helmet>
                <title>Health Care | Add Appoinment</title>
            </Helmet>
            <PageTitle mainPage='Appoinment' page='Add Appoinment'></PageTitle>
            <div className="bg-white my-4 p-4 rounded-md shadow-lg mx-6">
                <h4 className="text-2xl font-semibold pb-2">Add Patients</h4>
                <hr />
                <form className="mt-4" onSubmit={handleubmit}>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Patients Name </span>
                            </div>
                            <select name="patientId" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
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
                            <select name="doctor" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
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
                            <input type="text" name="timeSlot" placeholder="00:00 AM/PM" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
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