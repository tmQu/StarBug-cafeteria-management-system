import React from "react";

const Button = (props) => {
  // list props like this, so we can understand easily what props include in the far future
  const { onClick, isClicked, name } = props;

  return (
    <button
      type="button"
      className={`w-140 h-50 px-2 text-lg rounded-lg font-light border-none transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-[#D63431]
      ${isClicked ? "text-black bg-white" : "text-white"
        }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
