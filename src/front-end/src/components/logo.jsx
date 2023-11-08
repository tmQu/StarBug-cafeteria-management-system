import React from "react";

const Logo = (props) => {
  const { onClick } = props;
  return (
    <button className="fill-black" onClick={onClick}>
      <div className="rounded-lg flex items-center justify-center bg-blue-500">
        <img
          className="object-cover rounded-lg w-[164px] h-[40px] transition-transform duration-500 ease-in-out hover:scale-[1.02]"
          alt="logo"
          src="./assets/StarBug_files/StarBug_rectangle.jpg"
        ></img>
      </div>
    </button>
  );
};

export default Logo;
