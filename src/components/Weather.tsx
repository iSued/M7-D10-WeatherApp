import React, { useState } from "react";
import logo from "../main_svg.svg";

const Weather = () => {
  return (
    <>
      <div>
        <img
          src={logo}
          alt="logo image"
          style={{ width: "30%", margin: "auto" }}
        />
      </div>
    </>
  );
};
export default Weather;
