import Swal from "sweetalert2"
import useAxious from "../../Hook/SecureAxious"
import PageTitle from "../../Shared/PageTitle/PageTitle"

const AddNotice = () => {

    const secureAxious = useAxious()

    const handleSubmit = e =>{
        e.preventDefault()
        const notise = e.target.notification.value
        

        const NewNotice = {
            notise
        }

        secureAxious.post('/notice/', NewNotice)
        .then(res => {
            if (res.data.message) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Notice Successfully Added",
                    showConfirmButton: false,
                    timer: 1500
                });
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
            <PageTitle title='Add New Notice' mainPage='Notice' page='Add New Notice'></PageTitle>
            <form onSubmit={handleSubmit} className="mt-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Add New Notice</span>
                        </div>
                        <textarea name="notification" id="" cols="30" rows="10" className="focus:border-secondaryColor border border-primaryColor focus:outline-0 p-2 rounded-md" placeholder="Write Notice Here"></textarea>
                    </label>
                <input type="submit" value='Add Notification' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
            </form>
        </div>
    )
}

export default AddNotice