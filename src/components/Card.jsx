import React from "react";
import jersey1 from "../images/jersey1.jpg";
import { NavLink } from "react-router-dom";

export const Card = (props) => {
  const link = "https://www.realmadrid.com/";
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt={props.imgsrc}
            style={{ height: "200px", width: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
