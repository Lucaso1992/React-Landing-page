import React from "react";
import img from "../../img/computer.png";

const Cards = ({imageName, title, text}) => {
  return (
    <div className=" col-lg-3 col-md-6 col-sm-12 my-3">
      <div className="card">
        <img src={imageName} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {text}
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
