import Swal from "sweetalert2"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const AddDoctors = () =>{


    const secureAxious = useAxious()
    const naviget = useNavigate()
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
        formData.append('password', form.password.value)
        formData.append('gender', form.gender.value)
        formData.append('address', form.address.value)
        formData.append('doctor_details', form.doctor_details.value)
        formData.append('doctor_pic', form.doctor_pic.files[0])

        secureAxious.post('/doctors/', formData)
        .then(res =>{
            if (res.data.message) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Doctor successfully Added",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
                naviget('/all-doctors/')
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
            <Helmet>
                <title>Health Care | Add Doctor</title>
            </Helmet>
            <PageTitle mainPage='Doctors' page='Add Doctors'></PageTitle>
            <div className="bg-white my-4 p-4 rounded-md shadow-lg mx-6">
                <h4 className="text-2xl font-semibold pb-2">Add Doctors</h4>
                <hr />
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-4">
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Doctor Name</span>
                            </div>
                            <input type="text" name="doctorName" placeholder="Enter Doctor Full Name" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Date Of Birth</span>
                            </div>
                            <input type="date" name="date_of_birth" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Speacialization</span>
                            </div>
                            <input type="text" name="speacialization" placeholder="Speacialization" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Experience</span>
                            </div>
                            <input type="text" name="experience" placeholder="Experience" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>

                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Age</span>
                            </div>
                            <input type="number" name="age" placeholder="Enter Age" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Phone Number</span>
                            </div>
                            <input type="text" name="phone" placeholder="Enter Phone Number" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>

                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Email Address</span>
                            </div>
                            <input type="email" name="email" placeholder="Active Email Address" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Password</span>
                            </div>
                            <input type="password" name="password" placeholder="Enter a strong passsword" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Full Address</span>
                            </div>
                            <input type="text" name="address" placeholder="Full Adress" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Gender</span>
                            </div>
                            <select name="gender" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
                                <option className="mt-2" value="" selected hidden>SELECT</option>
                                <option value="male">Male</option>
                                <option value="male">Female</option>
                            </select>
                        </label>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Doctor Details</span>
                        </div>
                        <textarea name="doctor_details" id="" cols="30" rows="5" className="border-2 p-2 w-full focus:border-secondaryColor focus:outline-0" placeholder="Tell me somethink about patient"></textarea>
                    </label>

                    <div className="label">
                            <span className="label-text font-bold">Doctors Pic</span>
                        </div>
                        <input type="file" name="doctor_pic" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                    <input type="submit" value='Add Doctor' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
                </form>
            </div>
        </div>
    )
}


export default AddDoctors