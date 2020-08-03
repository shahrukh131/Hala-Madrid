import React from "react";
import { Common } from "./Common";
import madrid from "../images/cup.png";

export const About = () => {
  return (
    <div>
      <Common
        name="Welcome to About page"
        imgsrc={madrid}
        height="256px"
        width="256px"
        visit="/contact"
        btnname="Contact Now"
      />
    </div>
  );
};
