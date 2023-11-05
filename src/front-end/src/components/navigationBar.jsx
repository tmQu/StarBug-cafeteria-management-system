import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const [selectedButton, setSelectedButton] = useState('Home');

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  // call reusable button to create a list of buttons
  return (
    <div className="w-screen h-[75px] grid-in-navigation bg-[#BE2623]">
      <ul className="w-[1120px] h-[100%] py-3 mx-auto flex flex-row justify-between">
        {routes.map((route) => (
          <li className="mr-2">
            <Link to={route.path} key={route.name}>
              <Button 
              name ={route.name}
              isClicked={route.name === selectedButton}
              onClick={() => handleButtonClick(route.name)}
              />
            </Link>
            {/* Link will be replaced with button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
