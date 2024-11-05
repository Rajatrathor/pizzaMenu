import React from "react";

const Footer = () => {
  let hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  return (
    <div>
      <h1>
        {new Date().toLocaleTimeString()}.{" "}
        {isOpen && (
          <div>
            <p> We are Open until {closeHours}.00 PM</p>
            <button>Order Now</button>
          </div>
        )}
      </h1>
    </div>
  );
};

export default Footer;
