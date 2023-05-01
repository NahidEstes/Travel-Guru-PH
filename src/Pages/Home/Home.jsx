import Banner from "./Banner";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:5000/touristSpot")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className=" flex  pl-2 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:pl-24 lg:pl-8">
        <div>
          <h1>Cox's Bazar</h1>
          <p className="w-8/12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
            nemo. Quam, doloremque vero. Dolores ullam enim nemo fugit, libero
            fugiat accusamus necessitatibus ex repellendus facilis nulla,
            eveniet deleniti magni impedit.
          </p>
          <button>
            Booking <ArrowRightCircleIcon></ArrowRightCircleIcon>{" "}
          </button>
        </div>
        <div>
          <div className="flex  gap-3">
            {data.map((tourData) => (
              <Banner key={tourData.id} tourData={tourData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
