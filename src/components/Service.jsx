import React from "react";
import jersey1 from "../images/jersey1.jpg";
import jersey2 from "../images/jersey2.jpg";
import jersey3 from "../images/jersey3.jpg";
import jersey4 from "../images/jersey4.jpg";
import jersey5 from "../images/jersey5.jpg";
import jersey6 from "../images/jersey6.jpg";
import { Card } from "./Card";
import { Sdata } from "./Sdata";

export const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="tab-center" style={{ textAlign: "center" }}>
          Our Services
        </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
