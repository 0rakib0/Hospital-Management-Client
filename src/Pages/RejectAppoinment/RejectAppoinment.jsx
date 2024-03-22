import { useEffect, useState } from "react"
import useAxious from "../../Hook/SecureAxious"

const RejectAppoinment = () => {

    const secureAxious = useAxious()
    const [appoinment, setAppoinment] = useState([])


    useEffect(() => {
        secureAxious.get('filter-appoinment-data/?filter=reject')
            .then(res => {
                console.log(res.data)
            })
    }, [])
    return (
        <div>

        </div>
    )
}


export default RejectAppoinment