import AboutUs from "./AboutUs"
import Banner from "./Banner"
import ComplatedService from "./ComplatedService"
import ContactUs from "./ContactUs"
import Department from "./Department"
import Service from "./Services"
import Team from "./Team"

const Home = () =>{
    return (
        <div className="mx-6">
            <Banner></Banner>
            <ComplatedService></ComplatedService>
            <AboutUs></AboutUs>
            <Service></Service>
            <Department></Department>
            <Team></Team>
            <ContactUs></ContactUs>
        </div>
    )
}

export default Home