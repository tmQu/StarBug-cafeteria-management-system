import React from "react";

const Button = (props) => {
  // list props like this, so we can understand easily what props include in the far future
  const { onClick, isClicked, name } = props;

  return (
    <button
      type="button"
      className={`w-[140px] h-[50px] text-lg rounded-lg font-light border-none transition-transform duration-500 ease-in-out
      ${
        isClicked
          ? "text-black bg-white"
          : "text-white hover:scale-105 hover:shadow-xl hover:bg-[#D63431]"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export const LoginButton = (props) => {
  const { onClick } = props;

  return (
    <button className="w-[140px] h-[50px] bg-[#F4F2EC] font-bold rounded-lg ml-[20px] hover:bg-[#E5E5E5]" onClick={onClick}>
      Login
    </button>
  );
};

export default Button;
