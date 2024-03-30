import Lottie from "lottie-react";
import BannerAnimation from '../../../public/Banner.json'
import './home.css'
import { FaArrowRight } from "react-icons/fa";
import useAOS from "../../Hook/useAOS";
import Swal from "sweetalert2";
const Banner = () => {
    useAOS()


    const HandleBooking = event => {
        event.preventDefault()
        const modal = document.getElementById('my_modal_5');
        modal.close();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Patient Bed Successfully Booked",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className="flex flex-col lg:flex-row gap-4 p-6 items-center">
            <div data-aos="fade-right">
                <Lottie animationData={BannerAnimation}></Lottie>
            </div>
            <div data-aos="fade-left" className="lg:w-3/4">
                <h5 className="text-4xl py-2 font-bold text-shadow">Stay Safe, Stay Healthy</h5>
                <p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam impedit sapiente accusamus rem quo libero nobis accusantium reprehenderit minus, qui debitis eligendi provident sint magnam! Rem aspernatur deserunt rerum.</p>
                <button className="button py-2 px-4 flex items-center gap-2 hover:gap-4" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Bed <FaArrowRight className="icon"></FaArrowRight></button>

            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Please Fill up This Form!</h3>
                    <div>
                        <form onSubmit={HandleBooking}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Full Name</span>
                                </div>
                                <input type="text" placeholder="Enter Full Name" className="input input-bordered w-full focus:outline-primaryColor focus:text-primaryColor" required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Phone Number</span>
                                </div>
                                <input type="text" placeholder="Enter phone number" className="input input-bordered w-full focus:outline-primaryColor focus:text-primaryColor" required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="email" placeholder="Enter email" className="input input-bordered w-full focus:outline-primaryColor focus:text-primaryColor" required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Booking Date</span>
                                </div>
                                <input type="date" className="input input-bordered w-full focus:outline-primaryColor focus:text-primaryColor" required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Problems</span>
                                </div>
                                <textarea name="" id="" cols="15" rows="5" className="w-full border border-primaryColor focus:outline-primaryColor focus:text-primaryColor p-2" placeholder="Patients Problems" required></textarea>
                            </label>
                            <button className="button py-2 w-full hover:gap-4 mt-4">Confirm Booking</button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Banner