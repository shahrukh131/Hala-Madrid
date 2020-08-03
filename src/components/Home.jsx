import React from "react";
import madrid from "../madrid.png";
import { NavLink } from "react-router-dom";
import { Common } from "./Common";

export const Home = () => {
  return (
    <Common
      name=" The biggest Club in the World"
      imgsrc={madrid}
      height="250px"
      width="250px"
      visit="/service"
      btnname="Get Started"
    />
  );
};
