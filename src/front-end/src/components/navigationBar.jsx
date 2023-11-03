import { Link } from "react-router-dom";

const NavigationBar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Tea", path: "/tea" },
    { name: "Milk Tea", path: "/milktea" },
    { name: "Coffee", path: "/coffee" },
    { name: "Cake", path: "/cake" },
    { name: "About", path: "/about" },
  ];

  // call reusable button to create a list of buttons
  return (
    <div className="w-screen h-full pt-4 grid-in-navigation bg-red-300">
      <ul className="w-[1120px] mx-auto flex flex-row justify-between">
        {routes.map((route) => (
          <li className="mr-2">
            <Link to={route.path}>{route.name}</Link>
            {/* Link will be replaced with button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
