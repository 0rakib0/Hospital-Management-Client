import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaAlignRight, FaAngleDown, FaAngleUp, FaCaretDown, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = () => {

    const [openMenus, setOpenMenus] = useState({}); // State to track open state for each submenu

    const toggleMenu = (index) => {
        setOpenMenus(prevState => ({...prevState, [index]: !prevState[index]}));
    };

    const NavLinks = [
        {
            path: '',
            name: 'Home11',
            icon: <FaHome></FaHome>

        },
        {
            path: '',
            name: 'Home22',
            icon: <FaHome></FaHome>,
            submenu: [
                {
                    path: '',
                    name: 'Home1',
                    icon: <FaHome></FaHome>
                },
                {
                    path: '',
                    name: 'Home2',
                    icon: <FaHome></FaHome>
                },
                {
                    path: '',
                    name: 'Home3',
                    icon: <FaHome></FaHome>
                },
            ]
        },
        {
            path: '',
            name: 'Home33',
            icon: <FaHome></FaHome>,
            submenu: [
                {
                    path: '',
                    name: 'Home1',
                    icon: <FaHome></FaHome>
                },
                {
                    path: '',
                    name: 'Home2',
                    icon: <FaHome></FaHome>
                },
                {
                    path: '',
                    name: 'Home3',
                    icon: <FaHome></FaHome>
                },
            ]
        },
        {
            path: '',
            name: 'Home44',
            icon: <FaHome></FaHome>
        }

    ]

    return (
        <div className="h-full">
            <motion.div animate={{ width: "200px" }} className="bg-red-400">
                <div className="flex items-center pt-2 pl-2 gap-2">
                    <p className="text-2xl">Gulshan Clinick</p>
                    <FaAlignRight className="text-xl"></FaAlignRight>
                </div>
                <div className="mt-4">
                    {
                        NavLinks?.map((list, index) => <ul key={index}>
                            <div>
                                <li className="overflow-hidden">
                                    <div className='flex items-center gap-2 ml-2 text-xl text-white'>
                                        {list.icon}
                                        <NavLink>{list.name}</NavLink>
                                        {list.submenu && (
                                            <span onClick={() => toggleMenu(index)}>
                                                {openMenus[index] ? (
                                                    <FaAngleUp />
                                                ) : (
                                                    <FaAngleDown />
                                                )}
                                            </span>
                                        )}
                                    </div>
                                    {list.submenu &&
                                        <ol className={`duration-300 ${openMenus[index] ? '' : 'hidden'}`}>
                                            {list.submenu.map((sub, subIndex) => (
                                                <li key={subIndex} className="mt-0 bg-green-400">
                                                    <div className='flex items-center gap-2 ml-2 text-xl text-white'>
                                                        {sub.icon}
                                                        <NavLink>{sub.name}</NavLink>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>}
                                </li>
                            </div>
                        </ul>)
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default SideBar;
