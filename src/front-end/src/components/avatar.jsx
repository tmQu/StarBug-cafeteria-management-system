import React from "react";

const Avatar = (props) => {
  const { onClick, theme, avatar } = props;
  const logoSrc =
    theme === "dark"
      ? "./assets/noname.png"
      : "./assets/noname.png";

  return (
    <button onClick={onClick}>
      <div className="flex flex-row items-center justify-center rounded-full">
        <img
          className="object-cover rounded-full w-[40px] h-[40px] transition-transform duration-500 ease-in-out hover:scale-[1.02]"
          alt="logo"
          src={avatar !== "" ? avatar : logoSrc}
        ></img>
      </div>
    </button>
  );
};

export default Avatar;
