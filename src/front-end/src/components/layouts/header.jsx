import SearchBar from "./searchBar";
import CartButton from "../buttons/cartButton";
import LoginButton from "../buttons/loginButton";
import Logo from "../logo";
import SearchButtonMobile from "../../responsive/searchButton";
import MenuButtonMobile from "../../responsive/menuButton";
import SignInPopUp from "../authen/logInPopUp";

import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../reduxActions/popUp";
import { useEffect, useRef } from "react";

const Header = () => {
  const loginPopUpRef = useRef();

  const dispatch = useDispatch();

  const handleLoginButton = () => {
    dispatch(toggleLogin());
  };
  const handleCartButton = () => {
    dispatch();
  };

  const { isOpenLoginPopUp } = useSelector((state) => state.popUpReducer);

  useEffect(() => {
    const mouseDownHandler = (e) => {
      if (!loginPopUpRef.current.contains(e.target)) {
        handleLoginButton(false);
      }
    };
    document.addEventListener("mousedown", mouseDownHandler);
    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  });
  return (
    <div className="w-screen pt-2 content-center h-full grid-in-header bg-[#BE2623]">
      <div className="w-[1120px] xl:w-screen h-[40px] mx-auto xl:px-4 sm:px-2 flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <div className="hidden sm:block">
            <MenuButtonMobile onClick={() => {}} />
          </div>
          <Logo />
        </div>
        <div className="sm:hidden">
          <SearchBar />
        </div>

        <div ref={loginPopUpRef} className="flex flex-row gap-3">
          <div className="hidden sm:block">
            <SearchButtonMobile onClick={() => {}} />
          </div>
          <CartButton onClick={() => handleCartButton()} />
          <div className="sm:hidden">
            <LoginButton onClick={() => handleLoginButton()} />
          </div>
          <div className="absolute top-12 right-[20%] z-50">
            {isOpenLoginPopUp && <SignInPopUp />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
