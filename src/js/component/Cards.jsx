import React from "react";
import img from "../../img/computer.png";

const Cards = (props) => {
  return (
    <div className=" col-lg-3 col-md-6 col-sm-12 my-3">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
