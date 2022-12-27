import React from "react";
import Contact from "../Contact";
import Cart from "../product/Cart";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cart />
      <Contact />
    </div>
  );
};

export default Home;
