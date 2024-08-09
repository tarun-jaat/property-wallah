import React from "react";
import { Bed, ExploreRounded, TypeSpecimen } from "@mui/icons-material";
import { BsEye } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const properties = [
  {
    image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    property_type: "Apartment",
    bedrooms: "1 BHK",
    price: "$120,000",
    description: "Cozy 1 BHK apartment with a modern kitchen and balcony.",
    location: "New York, NY",
  },
  {
    image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    property_type: "Apartment",
    bedrooms: "2 BHK",
    price: "$220,000",
    description: "Spacious 2 BHK apartment with city views and amenities.",
    location: "Los Angeles, CA",
  },
  {
    image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    property_type: "Villa",
    bedrooms: "3 BHK",
    price: "$450,000",
    description: "Luxurious 3 BHK villa with a private garden and pool.",
    location: "Miami, FL",
  },
  {
    image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    property_type: "Apartment",
    bedrooms: "2 BHK",
    price: "$200,000",
    description: "Modern 2 BHK apartment close to shopping and dining.",
    location: "Chicago, IL",
  },
  {
    image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    property_type: "House",
    bedrooms: "3 BHK",
    price: "$370,000",
    description: "Beautiful 3 BHK house with a large backyard and garage.",
    location: "Houston, TX",
  },
  {
    image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    property_type: "Apartment",
    bedrooms: "1 BHK",
    price: "$130,000",
    description: "Affordable 1 BHK apartment with a community gym.",
    location: "Phoenix, AZ",
  },
];

function LatesListing() {
  return (
    <div className="latestListing flex bg-white flex-col py-8 items-center justify-center gap-4 p-4 mt-5">
      <h1 className="text-3xl font-bold">
        Discover Latest And Featured Properties
      </h1>
      <p className="md:w-[60%] text-richblack-500 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        vitae reprehenderit saepe magni officia. Perferendis, esse vero?
        Corrupti, hic beatae!
      </p>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >

        {properties.map((property, index) => (
          <div
            className="w-[300px] relative flex flex-col cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 items-start gap-1 rounded-lg overflow-hidden border border-gray-300"
            key={index}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-50 hidden hover:block  items-center justify-center">
              <div className="text-white">
                <BsEye size={24} />
              </div>
            </div>
            <img
              className="h-32 w-full object-cover"
              src={property.image_url}
              alt={property.description}
            />
            <div className="p-2">
              <div className="flex items-center text-caribbeangreen-500 font-bold gap-2">
                <ExploreRounded />
                <p>{property.location}</p>
              </div>
              <p className="font-bold">{property.description}</p>
              <p className="text-blue-400 text-xl font-bold font-mono">
                Price: {property.price}
              </p>
              <hr className="text-richblack-300 my-0.5" />
              <div className="flex items-center cursor-pointer text-richblack-500 text-sm font-bold justify-between px-0">
                <div className="flex gap-1 items-center">
                  <Bed />
                  {property.bedrooms}
                </div>
                <div className="flex gap-1 items-center">
                  <TypeSpecimen />
                  {property.property_type}
                </div>
              </div>
            </div>
          </div>
        ))} 
      </Carousel>
    </div>
  );
}

export default LatesListing;
