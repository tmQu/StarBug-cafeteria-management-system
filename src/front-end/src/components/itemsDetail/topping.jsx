import React, { useState, useEffect } from "react";

const Topping = ({
  toppingName = "Topping option",
  price = "Price",
  changeFunction,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    changeFunction(quantity);
  }, [quantity]);

  return (
    <div className="flex items-center w-[400px] py-2">
      <div className="ml-8">
        <div className="text-[#666] font-Source-Sans-3 text-[16px] font-semibold">
          {toppingName}
        </div>
        <div className="text-[#0D3745] font-Source-Sans-3 text-[16px] font-semibold">
          +{price}
        </div>
      </div>
      <div className="flex ml-auto items-center mr-8">
        <svg
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`mr-2 cursor-pointer ${quantity === 0 && "hidden"}`}
          onClick={handleDecrement}
        >
          <circle cx="15" cy="15" r="14" stroke="#BFBFBF" />
          <path d="M8 15H22" stroke="#BFBFBF" strokeWidth="2" />
        </svg>
        {quantity >= 0 && (
          <div className="mr-2 font-Source-Sans-3 text-[16px] font-semibold">
            {quantity}
          </div>
        )}
        <svg
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleIncrement}
          className="cursor-pointer"
        >
          <circle cx="15" cy="15" r="14" stroke="#BFBFBF" />
          <path d="M8 15H22" stroke="#BFBFBF" strokeWidth="2" />
          <path d="M15 8V22" stroke="#BFBFBF" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default Topping;
