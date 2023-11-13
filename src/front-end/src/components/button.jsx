import React from "react";

const Button = (props) => {
  const { onClick, isClicked, name } = props;

  return (
    <button
      type="button"
      className={`w-[120px] h-[40px] pt-[4px] text-lg rounded-lg font-light border-none 
      transition-transform duration-500 ease-in-out
      ${
        isClicked
          ? "text-black bg-[#F3F2ED]"
          : "text-white hover:scale-[1.02] hover:shadow-xl hover:bg-[#D63431]"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
export default Button;
