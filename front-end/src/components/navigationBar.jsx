import { Link } from "react-router-dom";

const NavigationBar = () => {
  // call reusable button to create a list of buttons
  return (
    <div className="w-screen h-full px-[10vw] grid-in-navigation bg-red-300">
      <ul className="flex flex-row ">
        <li className="mr-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-2">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
