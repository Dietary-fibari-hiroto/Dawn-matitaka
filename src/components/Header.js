import { useState } from "react";
import { Link } from "react-router-dom";
import ImagesRoutes from "../assets/ImagesRoutes";

const Header = () => {
  const routes = [
    { name: "Top", path: "/" },
    { name: "Album", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/" },
    { name: "Dawn", path: "https://dawn-waiting.com" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="UDDigiKyokashoProR  absolute z-[50] flex items-center justify-between h-[50px] w-[100vw] px-[10px]">
      <Link to="/" className="pl-[10px]">
        <img
          className="w-[75px] h-[75px]"
          src={ImagesRoutes.matitaka_wh}
          alt="matitaka_log"
        />
      </Link>
      <ul className="flex items-center space-x-[50px] text-white pr-[10px] string-sm tracking-[5px] max-sm:hidden">
        {routes.map(({ name, path }) => (
          <li key={name}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleMenu} className="hidden max-sm:block">
        <img className="w-[30px] h-[30px]" src={ImagesRoutes.menu} alt="menu" />
      </button>

      {isOpen && (
        <div className="fixed section-frame top-0 right-0 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="VDL-PenLetter  z-[3] flex items-center justify-between h-[50px] w-[100vw] px-[10px]">
            <Link to="/">
              <img
                className="w-[50px] h-[50px]"
                src={ImagesRoutes.matitaka_bl}
                alt="matitaka_log"
              />
            </Link>

            <button onClick={toggleMenu}>
              <img
                className="w-[30px] h-[30px]"
                src={ImagesRoutes.cancel}
                alt="menu"
              />
            </button>
          </div>
          <ul className="py-2 text-gray-800 text-[40px]">
            {routes.map(({ name, path }) => (
              <li
                key={name}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
