import { useState } from "react";
import { Link } from "react-router-dom";
import ImagesRoutes from "../assets/ImagesRoutes"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="VDL-PenLetter absolute z-[10] flex items-center justify-between h-[50px] w-[100vw] px-[10px]">
            <Link to="/">
                <img className="w-[50px] h-[50px]" src={ImagesRoutes.matitaka_wh} alt="matitaka_log" />
            </Link>
            <button onClick={toggleMenu}>
                <img className="w-[30px] h-[30px]" src={ImagesRoutes.menu} alt="menu" />
            </button>

            {isOpen && (
                <div className="fixed section-frame top-0 right-0 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="VDL-PenLetter  z-[3] flex items-center justify-between h-[50px] w-[100vw] px-[10px]">
                        <Link to="/">
                            <img className="w-[50px] h-[50px]" src={ImagesRoutes.matitaka_bl} alt="matitaka_log" />
                        </Link>
                        <button onClick={toggleMenu}>
                            <img className="w-[30px] h-[30px]" src={ImagesRoutes.cancel} alt="menu" />
                        </button>
                    </div>
                    <ul className="py-2 text-gray-800 text-[40px]">
                        <Link to="/">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Home
                            </li>
                        </Link>
                        <Link to="/about">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                About
                            </li>
                        </Link>
                        <a href="https://dawn-waiting.com">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                DAWN-myportfolio
                            </li>
                        </a>
                    </ul>
                </div>
            )}
        </div>

    )
}


export default Header;