import React, { useState } from "react";
import Logo from "../../assets/Logos/WhiteLogo.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WidgetsIcon from "@mui/icons-material/Widgets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Navbar() {
  const [isWidgetsIconHovered, setIsWidgetsIconHovered] = useState(false);

  const handleMenu = () => {
    setIsWidgetsIconHovered(!isWidgetsIconHovered);
  };

  return (
    <>
      <div className="relative h-16 text-white flex items-center justify-between md:px-12  px-3 w-full bg-primary">
        <img className="md:hidden" height={14} src={Logo} alt="Logo" />
        <div className="md:flex hidden md:gap-5 items-center">
          <img className="hidden md:block" height={20} src={Logo} alt="Logo" />

          <div className="flex rounded-lg hover:bg-white border px-4 hover:text-primary hover:scale-95 transition-all ease-in-out duration-150 p-2 cursor-pointer items-center">
            {/* <LocationOnIcon /> */}
            <h1 className="font-xl font-bold">Delhi</h1>
            <KeyboardArrowDownIcon />
          </div>
        </div>

        <div className="md:flex hidden md:gap-5 items-center">
          <div className="flex rounded-lg hover:bg-white hover:text-primary hover:scale-95 transition-all ease-in-out duration-150 p-2 cursor-pointer items-center">
            <h1 className="font-xl font-bold">PW Prime</h1>
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex rounded-lg hover:bg-white hover:text-primary hover:scale-95 transition-all ease-in-out duration-150 p-2 cursor-pointer items-center">
            <h1 className="font-xl font-bold">Login</h1>
            <KeyboardArrowDownIcon />
          </div>
          <div className="bg-white  flex items-center gap-2 cursor-pointer text-black p-1 rounded-md">
            <h1 className="font-xl">Post Property Free</h1>
            <h2 className="FreeBtn px-1 bg-yellow-50 hover:scale-90 text-sm text-white rounded-md">
              Free
            </h2>
          </div>
        </div>
        <div className="flex md:hidden rounded-lg hover:bg-white border px-2 hover:text-primary hover:scale-95 transition-all ease-in-out duration-150 p-1 cursor-pointer items-center">
          <h1 className="text-sm font-bold">Delhi</h1>
          <KeyboardArrowDownIcon />
        </div>
        <div className="md:hidden block" onClick={handleMenu}>
          <WidgetsIcon />
        </div>
        {isWidgetsIconHovered && (
          <div className="absolute z-50 top-16 w-full px-5 py-4 transition-all ease-in-out duration-300 right-0 border-2 bg-primary">
            <div className="flex rounded-lg hover:bg-white hover:text-primary hover:scale-95 transition-all ease-in-out duration-150 p-2 cursor-pointer items-center">
              <h1 className="font-xl font-bold">PW Prime</h1>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex rounded-lg hover:bg-white hover:text-primary hover:scale-95 transition-all ease-in-out duration-150 p-2 cursor-pointer items-center">
              <h1 className="font-xl font-bold">Login</h1>
              <KeyboardArrowDownIcon />
            </div>
            <div className="bg-white  flex items-center gap-2 cursor-pointer text-black p-1 rounded-md">
              <h1 className="font-xl">Post Property Free</h1>
              <h2 className="FreeBtn px-1 bg-yellow-50 hover:scale-90 text-sm text-white rounded-md">
                Free
              </h2>
            </div>
          </div>
        )}
      </div>
      <div className="h-8 border-b-2 md:overflow-x-hidden bg-white overflow-x-scroll border-background">
        <ul className="flex justify-around gap-6 px-5 items-center">
          <li className=" hover:text-primary hover:scale-105 pt-1 flex items-center md:text-md text-sm ">
            <span className="md:block hidden">For{" "} </span>Buyers
            <KeyboardArrowDownIcon />
          </li>
          <li className=" hover:text-primary hover:scale-105 pt-1 flex items-center md:text-md text-sm ">
            <span className="md:block hidden">For {" "} </span>Tenants{" "}
            <KeyboardArrowDownIcon />
          </li>
          <li className=" hover:text-primary hover:scale-105 pt-1 flex items-center md:text-md text-sm ">
            <span className="md:block hidden">For{" "} </span>Owners{" "}
            <KeyboardArrowDownIcon />
          </li>
          <li className=" hover:text-primary hover:scale-105 pt-1 flex items-center md:text-md text-sm ">
            <span className="md:block hidden">For{" "} </span>Dealers/Builders{" "}
            <KeyboardArrowDownIcon />
          </li>
          <li className=" hover:text-primary hover:scale-105 pt-1 flex items-center md:text-md text-sm ">
            <span className="md:block hidden">Help/</span>Support{" "}
            <KeyboardArrowDownIcon />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
