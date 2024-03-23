import { useEffect, useState } from "react"

const useNoDataMessage = (data) =>{

    const [noDataMsg, setNoDataMSG] = useState('')


    useEffect(() => {
        if (data && data.length > 0) {
            setNoDataMSG('')
            console.log('Data Found')
        } else {
            setNoDataMSG('No Data Found')
        }

    }, [data])
    return noDataMsg
}

export default useNoDataMessage