import React from "react";
import PizzaData from "../../public/data.js";

const Pizza = (props) => {
  return (
    <div className="">
      <div className="">
        <div>
          <img
            height={400}
            width={400}
            src={props.photoName}
            alt={props.name}
          />
        </div>
        <div>
          <h3 className="font-bold">{props.name}</h3>
          <p className="font-semibold">{props.ingredients}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
