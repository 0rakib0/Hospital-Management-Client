import useAOS from "../../Hook/useAOS"
import SectionTitle from "./SectionTitle"

const Department = () => {
    useAOS()
    return (
        <div data-aos="fade-up" className="md:mt-20 mt-10" id="department">
            <SectionTitle title1='OUR' title2='DEPARTMENT'></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div data-aos="fade-up" className="bg-white p-3 border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="lg:w-70 w-64 h-44 mx-auto overflow-hidden">
                        <img src="https://northcountryhospital.org/wp-content/uploads/2019/04/C-Cardiology-newport-vermont-e1554726152791.png" className="w-full" alt="" />
                    </div>
                    <h4 className="text-2xl py-2 font-semibold">Cardiology</h4>
                    <p>Heart care specialists offering expert diagnosis, treatment, and management.</p>
                </div>
                <div data-aos="fade-up" className="bg-white p-3 border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="lg:w-70 w-64 h-44 mx-auto overflow-hidden">
                        <img src="https://websterdds.com/wp-content/uploads/2021/05/dental-specialties.jpg" className="w-full" alt="" />
                    </div>
                    <h4 className="text-2xl py-2 font-semibold">Dental</h4>
                    <p>Comprehensive dental care services for optimal oral health and wellness.</p>
                </div>
                <div data-aos="fade-up" className="bg-white p-3 border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="lg:w-70 w-64 h-44 mx-auto overflow-hidden">
                        <img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-10/untitled_design_6.png?itok=U4ugkPXo" className="w-full" alt="" />
                    </div>
                    <h4 className="text-2xl py-2 font-semibold">Neurologist</h4>
                    <p>Expert diagnosis and treatment for neurological conditions at Health Care.</p>
                </div>
                <div data-aos="fade-up" className="bg-white p-3 border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="lg:w-70 w-64 h-44 mx-auto overflow-hidden">
                        <img src="https://t4.ftcdn.net/jpg/02/46/07/07/360_F_246070730_2Ycup6BmQbMt5uTm36zeDpgaGNpMZXMS.jpg" className="w-full" alt="" />
                    </div>
                    <h4 className="text-2xl py-2 font-semibold">Pediatric</h4>
                    <p>Here's the histry f lovely lady. who was bringing up three very..</p>
                </div>
                <div data-aos="fade-up" className="bg-white p-3 border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="lg:w-70 w-64 h-44 mx-auto overflow-hidden">
                        <img src="https://assets-global.website-files.com/6572fdb617211ce3d9d76878/6572fdb717211ce3d9d7eaaa_lung%20sound.jpg" className="w-full" alt="" />
                    </div>
                    <h4 className="text-2xl py-2 font-semibold">Pulmonary</h4>
                    <p>Here's the histry f lovely lady. who was bringing up three very..</p>
                </div>
                <div data-aos="fade-up" className="bg-white p-3 border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="lg:w-70 w-64 h-44 mx-auto overflow-hidden">
                        <img src="https://t3.ftcdn.net/jpg/04/86/91/70/360_F_486917078_ls6PBMZaTLcvqFYwTDEYGHAUvUotSTqC.jpg" className="w-full" alt="" />
                    </div>
                    <h4 className="text-2xl py-2 font-semibold">Traomatology</h4>
                    <p>Here's the histry f lovely lady. who was bringing up three very..</p>
                </div>

                <div data-aos="fade-up" className="bg-white p-3 border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="lg:w-70 w-64 h-44 mx-auto overflow-hidden">
                        <img src="https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/374/2023/08/istockphoto-1164464390-612x612-1.jpg" className="w-full" alt="" />
                    </div>
                    <h4 className="text-2xl py-2 font-semibold">Urology</h4>
                    <p>Here's the histry f lovely lady. who was bringing up three very..</p>
                </div>
                <div data-aos="fade-up" className="bg-white p-3 border rounded-lg border-primaryColor lg:border-white hover:border hover:border-primaryColor duration-300 hover:rounded-lg">
                    <div className="lg:w-70 w-64 h-44 mx-auto overflow-hidden">
                        <img src="https://www.healthimages.com/content/uploads/sites/2/2022/11/xray.jpg" className="w-full" alt="" />
                    </div>
                    <h4 className="text-2xl py-2 font-semibold">X-ray</h4>
                    <p>Here's the histry f lovely lady. who was bringing up three very..</p>
                </div>
            </div>

        </div>
    )
}

export default Department