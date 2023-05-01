import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../../Components/Form";
import { AuthContext } from "../../Providers/AuthProvider";

const TravelDetails = () => {
  const user = useContext(AuthContext);
  console.log(user);
  const travelDetailsData = useLoaderData();
  console.log(travelDetailsData);
  return (
    <>
      <div className="custom-container">
        <div>
          <h1>{travelDetailsData.location}</h1>
          <p>
            Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
            known for its very long, sandy beachfront, stretching from Sea Beach
            in the north to Kolatoli Beach in the south. Aggameda Khyang
            monastery is home to bronze statues and centuries-old Buddhist
            manuscripts. South of town, the tropical rainforest of Himchari
            National Park has waterfalls and many birds. North, sea turtles
            breed on nearby Sonadia Island.
          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default TravelDetails;
