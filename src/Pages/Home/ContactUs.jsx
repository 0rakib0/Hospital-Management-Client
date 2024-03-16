import SectionTitle from "./SectionTitle"

const ContactUs = () => {
    return (
        <div className="md:mt-20 mt-10">
            <SectionTitle title1='CONTACT' title2='US'></SectionTitle>
            <div className="flex flex-col lg:flex-row p-2">
                <div className="lg:w-6/12 mt-4">
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-8f8aa3e13f5af63fc93cd147692bc2d4-pjlq" alt="pic not found" />
                </div>
                <div className="lg:w-6/12">
                    <form action="">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Full Name</span>
                            </div>
                            <input type="text" placeholder="Enter Full Name" className="input input-bordered w-full focus:outline-primaryColor focus:text-primaryColor" required/>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" placeholder="Enter Email Address" className="input input-bordered w-full focus:outline-primaryColor focus:text-primaryColor" required/>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Message</span>
                            </div>
                            <textarea name="" id="" cols="15" rows="5" className="w-full focus:outline-primaryColor focus:text-primaryColor p-2" placeholder="Your Massage Here" required></textarea>
                        </label>
                        <button className="button py-2 px-4 hover:gap-4 mt-4">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs