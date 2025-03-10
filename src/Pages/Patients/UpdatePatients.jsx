import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hook/SecureAxious";
import PageTitle from "../../Shared/PageTitle/PageTitle"
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const Update_patients = () =>{

    const singleP = useParams()
    const patientsId = singleP.id
    const secureAxious = useAxious()

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData();

        formData.append('full_name', form.name.value);
        formData.append('date_of_birth', form.dob.value);
        formData.append('age', form.age.value);
        formData.append('phone', form.phone.value);
        formData.append('email', form.email.value);
        formData.append('gender', form.gender.value);
        formData.append('full_address', form.address.value);
        formData.append('details', form.details.value);
        formData.append('patients_pic', form.patients_pic.files[0]);
        
        const patients_pic = form.patients_pic.files[0];
        if (patients_pic) {
            formData.append('patients_pic', patients_pic);
        }

        secureAxious.put(`/patients/patients/${patientsId}/`, formData)
            .then(res => {
                if (res.data.message) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Patients successfully admited",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
                else{
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Patients not added, something wrong!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error)=>{
                alert(error.message)
            })
    }


    const {data:patient} = useQuery({
        queryKey:['patients', patientsId],
        queryFn: async () =>{
            const res = await secureAxious.get(`http://127.0.0.1:8000/patients/patients/${patientsId}`)
            return res.data
        }
    })


    return (
        <div>
            <Helmet>
                <title>Health Care | Update Patient</title>
            </Helmet>
            <PageTitle mainPage='Patients' page='Update Patient'></PageTitle>
            <div className="bg-white my-4 p-4 rounded-md shadow-lg">
                <h4 className="text-2xl font-semibold pb-2">Update Patients</h4>
                <hr />
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-4">
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Patients Name</span>
                            </div>
                            <input type="text" name="name" defaultValue={patient?.full_name} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Date Of Birth</span>
                            </div>
                            <input type="date" name="dob" defaultValue={patient?.date_of_birth} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Patients Age</span>
                            </div>
                            <input type="number" name="age" defaultValue={patient?.age} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Phone Number</span>
                            </div>
                            <input type="text" name="phone" defaultValue={patient?.phone} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Email Address</span>
                            </div>
                            <input type="email" name="email" defaultValue={patient?.email} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Gender</span>
                            </div>
                            <select name="gender" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
                                <option className="mt-2" defaultValue={patient?.gender} selected hidden>{patient?.gender}</option>
                                <option value="male">Male</option>
                                <option value="male">Female</option>
                            </select>
                        </label>
                    </div>
                    <div className="md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Full Address</span>
                            </div>
                            <input type="text" name="address" defaultValue={patient?.full_address} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Details About Problem</span>
                        </div>
                        <textarea name="details" id="" cols="30" rows="5" className="border-2 p-2 w-full focus:border-secondaryColor focus:outline-0" defaultValue={patient?.details}></textarea>
                    </label>

                    <div className="label">
                        <span className="label-text font-bold">Patients Pic</span>
                    </div>
                    <input type="file" name="patients_pic" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                    <input type="submit" value='Update Patients' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
                </form>
            </div>
        </div>
    )
}

export default Update_patients