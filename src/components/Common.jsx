import React from "react";
import madrid from "../madrid.png";
import { NavLink } from "react-router-dom";

export const Common = (props) => {
  return (
    <div>
      <>
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div
                    className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column "
                    style={{
                      fontFamily: "Mulish",
                    }}
                  >
                    <h1>
                      {props.name}
                      <strong className="brand-name"> Real Madrid </strong>
                    </h1>
                    <h2 className="my-3">
                      Institutional event celebrating the 34th league title
                    </h2>
                    <div className="mt-3">
                      <NavLink to={props.visit} className="btn-get-started">
                        {props.btnname}
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={props.imgsrc}
                      alt=""
                      style={{ height: props.height, width: props.width }}
                      className="img-fluid animated"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
