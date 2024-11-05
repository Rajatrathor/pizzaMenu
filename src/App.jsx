import React from "react";
import Pizza from "./components/Pizza";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Avatar from "./components/Avatar";
import SkillSet from "./components/SkillSet";
import Intro from "./components/Intro";
import pizzaData from "../public/data";
function App() {
  return (
    <>
      <div className="container ">
        <Header />
        <h1>OUR MENU</h1>
        {pizzaData.map((item) => (
          <div key={item.name}>
            <div>
              <img
                height={400}
                width={400}
                src={item.photoName}
                alt={item.name}
              />
            </div>
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="font-semibold">{item.ingredients}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-wrap gap-7">
          <Pizza
            name="Focaccia"
            ingredients="Bread with italian olive oil and rosemary"
            photoName="pizzas/focaccia.jpg"
            price={10}
          />
          <Pizza
            name="Pizza Margherita"
            ingredients="Tomato and mozarella"
            photoName="pizzas/margherita.jpg"
            price={30}
          />
          <Pizza
            name="Pizza Spinaci"
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            photoName="pizzas/spinaci.jpg"
            price={20}
          />
          <Pizza
            name="Pizza Funghi"
            ingredients="Tomato, mozarella, mushrooms, and onion"
            photoName="pizzas/funghi.jpg"
            price={15}
          />
          <Pizza
            name="Pizza Salamino"
            ingredients="Tomato, mozarella, and pepperoni"
            photoName="pizzas/salamino.jpg"
            price={17}
          />
          <Pizza
            name="Pizza Prosciutto"
            ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
            photoName="pizzas/prosciutto.jpg"
            price={39}
          />
        </div> */}
        {/* <div>
          <Avatar />
          <Intro name="Rajat Rathor" />
          <SkillSet />
        </div> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
