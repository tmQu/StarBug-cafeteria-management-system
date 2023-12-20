import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const PaymentMethod = () => {
  const [selectedSize, setSelectedSize] = useState("Cash");
  const [isChecked, setIsChecked] = useState(false);

  const handleSizeSelect = (method) => {
    if (selectedSize === method) {
      setSelectedSize(null); // Unselect if already selected
      setSelectedSize("Cash");
    } else {
      setSelectedSize(method);
      // Do something with the selected method, like calling a function or setting state
    }
  };

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const renderSizeButton = (method, name) => {
    const isSelected = selectedSize === method;
    return (
      <div
        key={method}
        className="flex flex-row items-center cursor-pointer mx-2"
        onClick={() => handleSizeSelect(method)}
      >
        <svg
          className={`w-[24px] h-[24px] ${
            isSelected ? "text-blue-500" : "text-gray-400"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Radio Button">
            <circle
              id="Ellipse_2"
              cx="12"
              cy="12"
              r="11"
              fill="white"
              stroke="#0E3746"
              strokeWidth="2"
            />
            {isSelected && (
              <circle id="Ellipse_3" cx="12" cy="12" r="11" fill="#0E3746" />
            )}
          </g>
        </svg>
        <div className="ml-4 flex items-center">
          <img className="w-[25px] h-[25px]" src={method} alt={name} />
          <span className="ml-2 text-[#0E3746]">{name}</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="text-[#0E3746] text-lg font-semibold pt-[1em]">
        Payment
      </div>
      <hr className="w-[50px] border-[1px] border-[#BE2623]" />
      <div className="py-2 ml-8">
        <div className="py-2">
          {renderSizeButton("/assets/Payment_files/cash.png", "Cash")}
        </div>
        <hr className="w-[426px] border-[1px] border-[#0E3746] opacity-50" />
        <div className="py-2">
          {renderSizeButton("/assets/Payment_files/momo.png", "Momo")}
        </div>
        <hr className="w-[426px] border-[1px] border-[#0E3746] opacity-50" />
        <div className="py-2">
          {renderSizeButton("/assets/Payment_files/zalo.png", "ZaloPay")}
        </div>
        <hr className="w-[426px] border-[1px] border-[#0E3746] opacity-50" />
        <div className="py-2">
          {renderSizeButton("/assets/Payment_files/credit.png", "Credit card")}
        </div>
      </div>
      <div>
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label htmlFor="checkbox">
          Đồng ý với các{" "}
          <span className="text-[#BE2623]">điều khoản và điều kiện</span> mua
          hàng của StarBug
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
