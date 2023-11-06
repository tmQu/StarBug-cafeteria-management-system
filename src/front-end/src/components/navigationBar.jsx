import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

const NavigationBar = () => {
  const navigate = useNavigate();
  const routes = [
    { name: "Home", path: "/" },
    { name: "Tea", path: "/tea" },
    { name: "Milk Tea", path: "/milktea" },
    { name: "Coffee", path: "/coffee" },
    { name: "Cake", path: "/cake" },
    { name: "About", path: "/about" },
  ];

  const [selectedButton, setSelectedButton] = useState("Home");

  const handleButtonOnClick = (data) => {
    navigate(data.path);
    setSelectedButton(data.name);
  };

  return (
    <div className="w-screen h-full grid-in-navigation bg-[#BE2623]">
      <ul className="w-[1120px] pt-2.5 mx-auto flex flex-row justify-between">
        {routes.map((route) => (
          <li className="">
            <Button
              name={route.name}
              isClicked={route.name === selectedButton}
              onClick={() => handleButtonOnClick(route)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
