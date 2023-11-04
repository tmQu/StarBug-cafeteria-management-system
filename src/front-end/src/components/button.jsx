import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`px-2 text-sm bg-red-600 text-white rounded font-light border-none transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl ${
        props.isClicked ? "text-black bg-white" : ""
      }`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
