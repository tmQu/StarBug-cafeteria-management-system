import React from "react";

const Button = (props) => {
  const { onClick, isClicked, name, className, type = "button" } = props;

  return (
    <button
      type={type}
      className={`w-fit sm:w-28 h-fit px-4 pt-[4px] text-base font-light
      transition-transform duration-500 ease-in-out
      ${
        isClicked
          ? "text-[#F3F2ED] border-b-2 border-b-[#F3F2ED]"
          : "text-white transform hover:scale-[1.02]"
      } ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export const BorderButton = (props) => {
  const { onClick, name, className, type = "button" } = props;

  return (
    <button
      type={type}
      className={`text-xs rounded-full font-light border-[0.6px] border-[#B0B0B0]
      transition-transform duration-500 ease-in-out text-black bg-none ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export const RoundedButton = (props) => {
  const { onClick, name, className, type = "button" } = props;

  return (
    <button
      type={type}
      className={`w-[114px] h-[43px] text-xs rounded-full font-light border-[0.6px] border-[#B0B0B0]
      transition-transform duration-500 ease-in-out text-black bg-[#E5E5E5] ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
