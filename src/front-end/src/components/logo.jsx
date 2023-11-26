import React from "react";

const Logo = (props) => {
  const { onClick, theme } = props;
  const logoSrc = theme === "dark" ? "./assets/StarBug_files/StarBug_rectangle_d.svg" : "./assets/StarBug_files/StarBug_rectangle_w.svg";

  return (
    <button onClick={onClick}>
      <div className="rounded-lg flex flex-row items-center justify-center mt-1">
        <img
          className="object-cover rounded-lg w-[164px] h-[40px] transition-transform duration-500 ease-in-out hover:scale-[1.01] -m-1"
          alt="logo"
          src={logoSrc}
        ></img>
      </div>
    </button>
  );
};

export default Logo;
