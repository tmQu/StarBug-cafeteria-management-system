import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "./button";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Tea", path: "/tea" },
      { name: "Milk Tea", path: "/milktea" },
      { name: "Coffee", path: "/coffee" },
      { name: "Cake", path: "/cake" },
      { name: "About", path: "/about" },
    ],
    []
  );
  const [selectedButton, setSelectedButton] = useState("Home");

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );
    if (currentRoute) {
      setSelectedButton(currentRoute.name);
    }
  }, [location.pathname, routes]);

  const handleButtonOnClick = (data) => {
    navigate(data.path);
    setSelectedButton(data.name);
  };

  return (
    <div className="w-screen h-full grid-in-navigation bg-[#BE2623]">
      <ul className="w-[1120px] h-full mx-auto flex flex-row justify-between items-center">
        {routes.map((route) => (
          <li key={route.name}>
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
