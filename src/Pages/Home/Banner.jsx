import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ tourData }) => {
  const { id, location, img_url } = tourData;
  const travelDetailsHandler = () => {
    console.log("dfdff");
  };
  return (
    <>
      <div
        onClick={travelDetailsHandler}
        className="h-80 w-56 rounded relative hover:border border-pink-400 cursor-pointer"
      >
        <img src={img_url} alt="" />
        <div className="absolute bottom-0 left-3">
          <h1 className="text-white font-bold text-2xl">
            <Link to={`/travel-details/${id}`}>{location}</Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
