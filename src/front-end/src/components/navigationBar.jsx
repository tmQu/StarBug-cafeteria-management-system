import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const NavigationBar = () => {
  const [selectedButton, setSelectedButton] = useState("Home");

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  const categories = ["Home", "About", "Coffee", "Tea", "MilkTea", "Cake"];

  return (
    <div className="w-screen h-full px-[10vw] grid-in-navigation bg-[#D63431]">
      <div className="flex flex-row space-x-2 pt-1">
        {categories.map((name) => (
          <Link to={"/" + name.toLowerCase()} key={name}>
            <Button
              name={name}
              isClicked={name === selectedButton}
              onClick={() => handleButtonClick(name)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
