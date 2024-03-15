import AboutUs from "./AboutUs"
import Banner from "./Banner"
import ComplatedService from "./ComplatedService"
import Department from "./Department"
import Service from "./Services"

const Home = () =>{
    return (
        <div className="mx-6">
            <Banner></Banner>
            <ComplatedService></ComplatedService>
            <AboutUs></AboutUs>
            <Service></Service>
            <Department></Department>
        </div>
    )
}

export default Home