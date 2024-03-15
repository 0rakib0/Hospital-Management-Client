import SectionTitle from "./SectionTitle"

const ContactUs = () => {
    return (
        <div className="md:mt-20 mt-10">
            <SectionTitle title1='CONTACT' title2='US'></SectionTitle>
            <div className="flex">
                <div className="lg:w-6/12">
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-8f8aa3e13f5af63fc93cd147692bc2d4-pjlq" alt="pic not found" />
                </div>
                <div className="lg:w-6/12">
                    <form action="">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">What is your name?</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs