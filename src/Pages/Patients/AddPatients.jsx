import { useQuery } from "@tanstack/react-query"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"
import Swal from 'sweetalert2'

const Addpatients = () => {


    const secureAxious = useAxious()

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData();

        console.log(formData)

        formData.append('full_name', form.name.value);
        formData.append('date_of_birth', form.dob.value);
        formData.append('age', form.age.value);
        formData.append('phone', form.phone.value);
        formData.append('email', form.email.value);
        formData.append('gender', form.gender.value);
        formData.append('full_address', form.address.value);
        formData.append('details', form.details.value);
        formData.append('patients_pic', form.patients_pic.files[0]);



        secureAxious.post('/patients/patients/', formData)
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
            .catch(()=>{
                alert(error.message)
            })
    }


    return (
        <div>
            <PageTitle title='Add New Patients' mainPage='Patients' page='All Patients'></PageTitle>
            <div className="bg-white my-4 p-4 rounded-md shadow-lg">
                <h4 className="text-2xl font-semibold pb-2">Add Patients</h4>
                <hr />
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-4">
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Patients Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Enter Patient Full Name" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Date Of Birth</span>
                            </div>
                            <input type="date" name="dob" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Patients Age</span>
                            </div>
                            <input type="number" name="age" placeholder="Patients Age" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Phone Number</span>
                            </div>
                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
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
                                <span className="label-text font-bold">Gender</span>
                            </div>
                            <select name="gender" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
                                <option className="mt-2" value="" selected hidden>SELECT</option>
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
                            <input type="text" name="address" placeholder="Full Adress" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Details About Problem</span>
                        </div>
                        <textarea name="details" id="" cols="30" rows="5" className="border-2 p-2 w-full focus:border-secondaryColor focus:outline-0" placeholder="Tell me somethink about patient"></textarea>
                    </label>

                    <div className="label">
                        <span className="label-text font-bold">Patients Pic</span>
                    </div>
                    <input type="file" name="patients_pic" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                    <input type="submit" value='Add Patients' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
                </form>
            </div>
        </div>
    )
}

export default Addpatients