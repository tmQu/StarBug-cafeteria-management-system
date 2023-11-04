import React, { useState } from "react";
import Button from "./button";

const Header = () => {
  const [selectedButton, setSelectedButton] = useState("Home");

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <div className="w-screen h-full grid-in-header bg-red-600">
      Header
      <div className="flex space-x-5 mx-auto">
        {["Home", "Coffee", "Tea", "Milktea", "Cake", "About"].map((name) => (
          <Button
            key={name}
            name={name}
            isClicked={name === selectedButton}
            onClick={() => handleButtonClick(name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
