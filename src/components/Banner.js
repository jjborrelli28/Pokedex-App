import React from "react";
import banner from "../styles/components/pokedex.png";

export const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
    </div>
  );
};
