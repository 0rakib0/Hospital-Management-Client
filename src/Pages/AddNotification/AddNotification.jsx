import PageTitle from "../../Shared/PageTitle/PageTitle"

const AddNotification = () => {

    const secureAxious = useAxious()

    const handleSubmit = e =>{
        e.preventDefault()
        const Notification = e.target.notification.value
        

        const NewNotice = {
            Notification
        }

        secureAxious.post('/notice/', NewNotice)
        .then(res => {
            console.log(res.data)
        })
        .catch(error =>{
            alert(error.message)
        })
        
    }


    return (
        <div>
            <PageTitle title='Add New Notification' mainPage='Notification' page='Add New Notification'></PageTitle>
            <form onSubmit={handleSubmit} className="mt-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Add New Notise</span>
                        </div>
                        <textarea name="notification" id="" cols="30" rows="10" className="focus:border-secondaryColor border border-primaryColor focus:outline-0 p-2 rounded-md"></textarea>
                    </label>
                <input type="submit" value='Add Notification' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
            </form>
        </div>
    )
}

export default AddNotification