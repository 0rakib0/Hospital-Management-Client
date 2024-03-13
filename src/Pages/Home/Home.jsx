import Banner from "./Banner"
import ComplatedService from "./ComplatedService"
import Service from "./Services"

const Home = () =>{
    return (
        <div className="mx-6">
            <Banner></Banner>
            <ComplatedService></ComplatedService>
            <Service></Service>
        </div>
    )
}

export default Home