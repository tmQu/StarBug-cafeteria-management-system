import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

const NavigationBar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Tea", path: "/tea" },
    { name: "Milk Tea", path: "/milktea" },
    { name: "Coffee", path: "/coffee" },
    { name: "Cake", path: "/cake" },
    { name: "About", path: "/about" },
  ];

  const [selectedButton, setSelectedButton] = useState("Home");

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <div className="w-screen h-full grid-in-navigation bg-[#BE2623]">
      <ul className="w-[1120px] pt-2.5 mx-auto flex flex-row justify-between">
        {routes.map((route) => (
          <li className="">
            <Button
              name={route.name}
              isClicked={route.name === selectedButton}
              onClick={() => handleButtonClick(route.name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
