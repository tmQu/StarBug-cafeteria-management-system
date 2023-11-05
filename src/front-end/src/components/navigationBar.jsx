import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const NavigationBar = () => {
<<<<<<< HEAD
  const [selectedButton, setSelectedButton] = useState("Home");

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };
  
  const categories = ["Home", "About", "Coffee", "Tea", "MilkTea","Cake"];

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
=======
  const routes = [
    { name: "Home", path: "/" },
    { name: "Tea", path: "/tea" },
    { name: "Milk Tea", path: "/milktea" },
    { name: "Coffee", path: "/coffee" },
    { name: "Cake", path: "/cake" },
    { name: "About", path: "/about" },
  ];

  // call reusable button to create a list of buttons
  return (
    <div className="w-screen h-full pt-4 grid-in-navigation bg-red-300">
      <ul className="w-[1120px] mx-auto flex flex-row justify-between">
        {routes.map((route) => (
          <li className="mr-2">
            <Link to={route.path}>{route.name}</Link>
            {/* Link will be replaced with button */}
          </li>
        ))}
      </ul>
>>>>>>> origin/HEAD
    </div>
  );
};

export default NavigationBar;
