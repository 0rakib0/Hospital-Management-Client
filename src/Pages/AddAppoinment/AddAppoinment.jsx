import PageTitle from "../../Shared/PageTitle/PageTitle"

const AddAppoinment = () => {
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
                                <option className="mt-2" value="" selected hidden>SELECT PAYTIENTS</option>
                                {/* {
                                    paytients?.map(paytient => <option key={paytient.id} value={paytient.id}>{paytient.full_name}</option>)
                                } */}


                            </select>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Paytient ID</span>
                            </div>
                            <input type="text" name="paytientId" readOnly placeholder="Paytient ID"  className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Patient Email</span>
                            </div>
                            <input type="text" name="email" placeholder="Email Address" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
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
                                <span className="label-text font-bold">Service Name</span>
                            </div>
                            <input type="text" name="service" placeholder="Service Name" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Payment Type</span>
                            </div>
                            <select name="paymentType" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" id="">
                                <option className="mt-2" value="" selected hidden>SELECT PAYMENT TYPE</option>
                                <option value="Check">Check</option>
                                <option value="Card">Card</option>
                                <option value="Cash">Cash</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-4 md:mb-6 md-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Cost of Treatment</span>
                            </div>
                            <input type="number" name="CostOfTretment" placeholder="Cost Of Payment" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Card/Check No</span>
                            </div>
                            <input type="text" name="cardCheck" placeholder="Card Or Check No" className="input input-bordered w-full focus:border-secondaryColor focus:outline-0" />
                        </label>
                    </div>
                    <input type="submit" value='Add Payment' className="input bg-primaryColor w-full mt-2 text-white hover:bg-secondaryColor duration-300" />
                </form>
            </div>
        </div>
    )
}
export default AddAppoinment