import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
const Data = [
  {
    title: "Houses For Sale",
    icon: <MapsHomeWorkIcon sx={{ fontSize: 45}} />,
    bg: "bg-yellow-5",
    text: "text-yellow-500",
  },
  {
    title: "New Properties",
    icon: <MapsHomeWorkRoundedIcon sx={{ fontSize: 45}} />,
    bg: "bg-caribbeangreen-5",
    text: "text-caribbeangreen-500",
  },
  {
    title: "Contact Agents",
    icon: <ContactPhoneIcon sx={{ fontSize: 45}} />,
    bg: "bg-blue-25",
    text: "text-blue-500",
  },
  {
    title: "Bulidings For Sale",
    icon: <BusinessIcon sx={{ fontSize: 45}} />,
    bg: "bg-pink-5",
    text: "text-pink-500",
  },
];

function UnderHeroSection() {
  return (
    <div className="mt-16  flex justify-center w-full">
        {/* <h1 className="text-2xl font-bold">Explore Property Wallah</h1> */}
    <div className="flex items-center md:flex-nowrap flex-wrap  justify-center gap-[6%]">
      {Data.map((item, index) => (
        <div
          key={index}
          className={`${item.bg} ${item.text} shadow-xl w-[200px] md:w-[300px] md:my-0 my-2 hover:translate-y-2 cursor-pointer hover:scale-105 transition-all  ease-in-out duration-500 text-center p-4 rounded-md`}
        >
          <p className="text-4xl">{item.icon}</p>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default UnderHeroSection;
