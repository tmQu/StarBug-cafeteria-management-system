import SearchBar from "./searchBar";
import CartButton from "../buttons/cartButton";
import LoginButton from "../buttons/loginButton";
import Logo from "../logo";
import SearchButtonMobile from "../../responsive/searchButton";
import MenuButtonMobile from "../../responsive/menuButton";

import SignInPopUp from "../authen/logInPopUp";
import SignUpPopUp from "../authen/signUpPopUp";
import PaymentDetail from "../order/payment";
import ForgotPassword from "../authen/forgotPassword";
import NewPassword from "../authen/newPassword";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleLogin,
  togglePayment,
  toggleSignUp,
  toggleForgotPassword,
  toggleNewPassword,
} from "../../reduxActions/popUp";
import { useEffect, useRef } from "react";

const Header = () => {
  const popUpRef = useRef();
  const dispatch = useDispatch();

  const {
    isOpenLoginPopUp,
    isOpenPaymentPopUp,
    isOpenSignUpPopUp,
    isOpenForgotPasswordPopUp,
    isOpenNewPasswordPopUp,
  } = useSelector((state) => state.popUpReducer);

  const handleLoginButton = (props) => {
    dispatch(toggleSignUp(false));
    dispatch(togglePayment(false));
    toggleForgotPassword(false);
    toggleNewPassword(false);
    dispatch(toggleLogin(props));
  };
  const handleCartButton = (props) => {
    dispatch(toggleLogin(false));
    dispatch(toggleSignUp(false));
    toggleForgotPassword(false);
    toggleNewPassword(false);
    dispatch(togglePayment(props));
  };
  const handleSignUpButton = (props) => {
    dispatch(toggleLogin(false));
    dispatch(togglePayment(false));
    toggleForgotPassword(false);
    toggleNewPassword(false);
    dispatch(toggleSignUp(props));
  };
  const handleForgotPasswordButton = (props) => {
    dispatch(toggleLogin(false));
    dispatch(togglePayment(false));
    dispatch(toggleSignUp(false));
    toggleNewPassword(false);
    dispatch(toggleForgotPassword(props));
  };
  const handleNewPasswordButton = (props) => {
    dispatch(toggleLogin(false));
    dispatch(togglePayment(false));
    dispatch(toggleSignUp(false));
    toggleForgotPassword(false);
    dispatch(toggleNewPassword(props));
  };

  useEffect(() => {
    const mouseDownHandler = (e) => {
      if (
        (isOpenLoginPopUp ||
          isOpenPaymentPopUp ||
          isOpenSignUpPopUp ||
          isOpenForgotPasswordPopUp ||
          isOpenNewPasswordPopUp) &&
        !popUpRef.current.contains(e.target)
      ) {
        handleLoginButton(false);
        handleCartButton(false);
        handleSignUpButton(false);
        handleForgotPasswordButton(false);
        handleNewPasswordButton(false);
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

        <div className="flex flex-row gap-3">
          <div className="hidden sm:block">
            <SearchButtonMobile onClick={() => {}} />
          </div>
          <div className="flex flex-row gap-3" ref={popUpRef}>
            <CartButton onClick={() => handleCartButton()} />
            <div className="sm:hidden">
              <LoginButton onClick={() => handleLoginButton()} />
            </div>
            <div className="absolute top-20 right-[24%] z-50">
              {isOpenLoginPopUp && <SignInPopUp />}
              {isOpenSignUpPopUp && <SignUpPopUp />}
              {isOpenForgotPasswordPopUp && <ForgotPassword />}
              {isOpenNewPasswordPopUp && <NewPassword />}
              {isOpenPaymentPopUp && <PaymentDetail />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
