//include images into your bundle
import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
import "../../styles/index.css";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Jumbotron />
        <div className="row">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
