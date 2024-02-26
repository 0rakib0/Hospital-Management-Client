import Swal from "sweetalert2"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import useAxious from "../../Hook/SecureAxious"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

const UpdateDoctor = () =>{

    const secureAxious = useAxious()

    const {id} = useParams()
    console.log(id)


    const {data:doctor} = useQuery({
        queryKey:['doctor', id],
        queryFn: async () =>{
            const res = await secureAxious.get(`doctors/${id}`)
            return res.data
        }
    })

    console.log(doctor)


    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const formData = new FormData()


        formData.append('doctorName', form.doctorName.value)
        formData.append('date_of_birth', form.date_of_birth.value)
        formData.append('speacialization', form.speacialization.value)
        formData.append('experience', form.experience.value)
        formData.append('age', form.age.value)
        formData.append('phone', form.phone.value)
        formData.append('email', form.email.value)
        formData.append('gender', form.gender.value)
        formData.append('address', form.address.value)
        formData.append('doctor_details', form.doctor_details.value)
        formData.append('doctor_pic', form.doctor_pic.files[0])

        secureAxious.put(`/doctors/${id}/`, formData)
        .then(res =>{
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


    return (
        <div>
            <PageTitle title='Update Doctors' mainPage='Doctors' page='Update Doctors'></PageTitle>
            <div className="bg-white my-4 p-4 rounded-md shadow-lg">
                <h4 className="text-2xl font-semibold pb-2">Add Doctors</h4>
                <hr />
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-4">
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Doctor Name</span>
                            </div>
                            <input type="text" name="doctorName" defaultValue={doctor?.doctorName} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Date Of Birth</span>
                            </div>
                            <input type="date" name="date_of_birth" defaultValue={doctor?.date_of_birth} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Speacialization</span>
                            </div>
                            <input type="text" name="speacialization" defaultValue={doctor?.speacialization} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Experience</span>
                            </div>
                            <input type="text" name="experience" defaultValue={doctor?.experience} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>

                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Age</span>
                            </div>
                            <input type="number" name="age" defaultValue={doctor?.age} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Phone Number</span>
                            </div>
                            <input type="text" name="phone" defaultValue={doctor?.phone} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>

                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Email Address</span>
                            </div>
                            <input type="email" name="email" readOnly defaultValue={doctor?.email} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Gender</span>
                            </div>
                            <select name="gender" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
                                <option className="mt-2" defaultValue={doctor?.gender} selected hidden>{doctor?.gender}</option>
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
                            <input type="text" name="address" defaultValue={doctor?.address} className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Doctor Details</span>
                        </div>
                        <textarea name="doctor_details" id="" cols="30" rows="5" className="border-2 p-2 w-full focus:border-secondaryColor focus:outline-0">{doctor?.doctor_details}</textarea>
                    </label>

                    <div className="label">
                            <span className="label-text font-bold">Doctors Pic</span>
                        </div>
                        <input type="file" name="doctor_pic" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                    <input type="submit" value='Update Doctor' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
                </form>
            </div>
        </div>
    )
}

export default UpdateDoctor