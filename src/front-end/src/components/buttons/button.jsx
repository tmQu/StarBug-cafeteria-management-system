import React from "react";

const Button = (props) => {
  const { onClick, isClicked, name } = props;

  return (
    <button
      type="button"
      className={`w-fit h-[40px] px-4 pt-[4px] text-lg font-light 
      transition-transform duration-500 ease-in-out
      ${
        isClicked
          ? "text-[#F3F2ED] border-b-2 border-b-[#F3F2ED]"
          : "text-white transform hover:scale-[1.02]"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
export default Button;
