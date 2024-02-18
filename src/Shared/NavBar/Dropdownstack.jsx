import { useState } from "react"
import {FaCaretDown, FaCaretUp } from "react-icons/fa";

const DropDownStack = ({parentItem, ChildItems}) =>{
    const [isDropdownVisible, setVisible] = useState(false)

    return (
        <div className="" onClick={() => setVisible(!isDropdownVisible)} onMouseLeave={()=>setVisible(false)}>
            <div className=" lg:flex lg:items-center gap-2 text-white border   py-1 px-4">
                {parentItem}
                {isDropdownVisible? <FaCaretUp className="lg:inline hidden"></FaCaretUp>: <FaCaretDown className="lg:inline hidden"></FaCaretDown>}
            {isDropdownVisible && (
                <ul className="lg:absolute top-[2.2rem] lg:bg-primaryColor bg-secondaryColor m-2 lg:m-0 rounded-md text-white py-2 px-8">
                    {ChildItems}
                </ul>
            )}
            </div>
        </div>
    )
}

export default DropDownStack