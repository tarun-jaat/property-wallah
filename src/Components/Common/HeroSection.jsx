import React, { useState } from "react";
import "./Style.css";
import SimpleAutocomplete from "./Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";

const Data = [
  {
    title: "New Project",
  },
  {
    title: "Buy Properties",
  },
  {
    title: "Rent Properties",
    icon: "",
  },
  {
    title: "Pg/Hostels",
  },
  {
    title: "Plot & Land",
  },
  {
    title: "Commercial",
  },
];

function HeroSection() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="Image-container flex flex-col gap-3 items-center relative hero-section md:h-[40vh] h-[50vh] border border-primary">
      <h1 className="text-white md:text-4xl pt-7 font-bold">Find Your Perfect Dream House </h1>
      <p className="text-white px-2 md:text-md text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque! Lorem ipsum dolor sit amet.</p>
      <Link className="bg-primary text-white px-2 rounded-full font-bold hover:scale-105 transition-all ease-in-out duration-300 " to={'#'}>Explore Now <ArrowForward/></Link>
      <div className="absolute -bottom-9 py-4 md:w-fit w-[90%] flex flex-col gap-10 border px-4 rounded-xl  bg-white">
        <div className="md:flex hidden md:gap-6 items-center">
          {Data.map((item, index) => (
            <p
              key={index}
              className={`md:text-md  transition-all mx-3 cursor-pointer ease-in-out duration-300 ${
                selectedItem === index ? " underline underline-offset-[20px] decoration-primary scale-105 text-black": "text-puregreys-500"
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
            </p>
          ))}
        </div>
        <div className="flex justify-between cursor-pointer gap-2 w-full items-center">
            <p className="md:w-[25%] md:text-md md:px-3 py-2 border-r border-richblack-400 flex text-sm items-center justify-between">All Residential<KeyboardArrowDownIcon/></p>
            <SimpleAutocomplete/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;