import { useState } from "react"
import { FaAngleDown, FaAngleUp, FaCaretDown, FaCaretUp } from "react-icons/fa";

const DropDownStack = ({parentItem, ChildItems}) =>{
    console.log(ChildItems)

    const [isDropdownVisible, setVisible] = useState(false)

    return (
        <div className="" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <div className="flex  lg:items-center gap-2 text-white lg:border-l  -lg py-1 px-4">
                {parentItem}
                
            </div>
            {isDropdownVisible && (
                <ul className="absolute lg:top-12 top-0 lg:left-0 left-12 bg-primaryColor text-white py-2 w-[9rem] px-6">
                    {ChildItems}
                </ul>
            )}
        </div>
    )
}

export default DropDownStack