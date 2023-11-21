import React, { useState } from "react";

const ProductInfo = ({ productName = "Tên sản phẩm", price = "9999" }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <div className="w-fit h-[40px] font-Source-Sans-3 text-[32px] font-bold flex-inline">
        {productName}
      </div>
      <div className="flex items-center w-[400px] h-[35px] py-3">
        <div className="w-fit h-[28] font-Source-Sans-3 text-[22px] font-normal flex-inline pt-3 text-[#0D3745] ">
          ${price}
        </div>
        <div className="flex pt-3 ml-auto gap-[30.6px] pl-8">
          <svg
            width="35"
            height="35"
            viewBox="0 0 30 30"
            fill="#BFBFBF"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-2 cursor-pointer ${quantity === 0 && "hidden"}`}
            onClick={handleDecrement}
          >
            <circle cx="15" cy="15" r="14" stroke="#BFBFBF" />
            <path d="M8 15H22" stroke="#F3F2ED" strokeWidth="2" />
          </svg>
          {quantity >= 0 && (
            <div className="w-[14px] h-[34px] mr-2 font-Source-Sans-3 text-[27px] font-normal flex justify-center items-center">
              {quantity}
            </div>
          )}
          <svg
            width="32"
            height="32"
            viewBox="0 0 30 30"
            fill="#BE2623"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleIncrement}
            className="cursor-pointer"
          >
            <circle cx="15" cy="15" r="14" stroke="#BFBFBF" />
            <path d="M8 15H22" stroke="#F3F2ED" strokeWidth="2" />
            <path d="M15 8V22" stroke="#F3F2ED" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
