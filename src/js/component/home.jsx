//include images into your bundle
import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="d-flex gap-3">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
