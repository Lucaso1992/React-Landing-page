//include images into your bundle
import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
import "../../styles/index.css";
import { dataCard } from "../Data/Data.js";

//create your first component
const Home = () => {
  return (
    <div className="father position-relative">
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row">
        {dataCard.map(item => <Cards imageName={item.imageName} title={item.title} text={item.text}/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
