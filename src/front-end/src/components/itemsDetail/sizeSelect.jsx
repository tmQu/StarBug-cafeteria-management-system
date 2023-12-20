import { useState, useEffect } from "react";

const SizeSelect = ({ sizeSelectfunction }) => {
  const [selectedSize, setSelectedSize] = useState("Small");

  const handleSizeSelect = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null);
      setSelectedSize("Small");
    } else {
      setSelectedSize(size);
    }
  };

  useEffect(() => {
    sizeSelectfunction(selectedSize);
  }, [selectedSize]);

  const renderSizeButton = (size, price) => {
    const isSelected = selectedSize === size;
    return (
      <div
        key={size}
        className="flex items-center cursor-pointer mx-2"
        onClick={() => handleSizeSelect(size)}
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
              stroke={isSelected ? "#2D68FE" : "#C2C1C1"}
              strokeWidth="2"
            />
            {isSelected && (
              <circle id="Ellipse_3" cx="12" cy="12" r="6" fill="#2D68FE" />
            )}
          </g>
        </svg>
        <div className="ml-4">
          <p>{size}</p>
          <p>{price}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[400px] mb-2">
      <div className="py-1 bg-[#D9D9D9] h-[40px] text-[#666] font-Source-Sans-3 text-[20px] font-norma pl-3">
        Size
      </div>
      <div className="h-[80px] flex justify-center items-center bg-[#F3F2ED] text-[16px] font-medium text-[#324054]">
        {renderSizeButton("Small", "")}
        {renderSizeButton("Medium", "+ 5.000")}
        {renderSizeButton("Large", "+ 10.000")}
      </div>
    </div>
  );
};

export default SizeSelect;
