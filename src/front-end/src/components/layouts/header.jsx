import SearchBar from "./searchBar";
import CartButton from "../buttons/cartButton";
import LoginButton from "../buttons/loginButton";
import Logo from "../logo";
import SearchButtonMobile from "../../responsive/searchButton";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import SignInPopUp from "../authen/logInPopUp";
import SignUpPopUp from "../authen/signUpPopUp";
import ForgotPassword from "../authen/forgotPassword";
import NewPassword from "../authen/newPassword";

import Avatar from "../avatar";
import StaffPopUp from "../popUps/staffPopUp";
import UserPopUp from "../popUps/userPopUp";
import ManagerPopUp from "../popUps/managerPopUp";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleLogin,
  toggleSignUp,
  toggleForgotPassword,
  toggleNewPassword,
  toggleAvatar,
} from "../../reduxActions/popUp";
import { useEffect, useRef } from "react";

const Header = () => {
  const navigate = useNavigate();
  const popUpRef = useRef();
  const dispatch = useDispatch();
  const { auth } = useAuth();

  const {
    isOpenLoginPopUp,
    isOpenSignUpPopUp,
    isOpenForgotPasswordPopUp,
    isOpenNewPasswordPopUp,
    isAvatar,
    isAvatarPopUp,
  } = useSelector((state) => state.popUpReducer);

  const handleLoginButton = (props) => {
    dispatch(toggleSignUp(false));
    toggleForgotPassword(false);
    toggleNewPassword(false);
    dispatch(toggleLogin(props));
  };
  const handleCartButton = (props) => {
    dispatch(toggleLogin(false));
    dispatch(toggleSignUp(false));
    toggleForgotPassword(false);
    toggleNewPassword(false);
  };
  const handleSignUpButton = (props) => {
    dispatch(toggleLogin(false));
    toggleForgotPassword(false);
    toggleNewPassword(false);
    dispatch(toggleSignUp(props));
  };
  const handleForgotPasswordButton = (props) => {
    dispatch(toggleLogin(false));
    dispatch(toggleSignUp(false));
    toggleNewPassword(false);
    dispatch(toggleForgotPassword(props));
  };
  const handleNewPasswordButton = (props) => {
    dispatch(toggleLogin(false));
    dispatch(toggleSignUp(false));
    toggleForgotPassword(false);
    dispatch(toggleNewPassword(props));
  };
  const handleAvatarPopUp = (props) => {
    toggleAvatar(false);
    dispatch(toggleAvatar(props));
  };

  useEffect(() => {
    const mouseDownHandler = (e) => {
      if (
        (isOpenLoginPopUp ||
          isOpenSignUpPopUp ||
          isOpenForgotPasswordPopUp ||
          isOpenNewPasswordPopUp ||
          isAvatarPopUp) &&
        !popUpRef.current.contains(e.target)
      ) {
        handleLoginButton(false);
        handleCartButton(false);
        handleSignUpButton(false);
        handleForgotPasswordButton(false);
        handleNewPasswordButton(false);
        handleAvatarPopUp(false);
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
        <Logo />
        <div className="sm:hidden">
          <SearchBar />
        </div>
        <div className="flex flex-row gap-3">
          <div className="hidden sm:block">
            <SearchButtonMobile onClick={() => {}} />
          </div>
          <div className="flex flex-row gap-3 sm:gap-0" ref={popUpRef}>
            <CartButton onClick={() => navigate("/payment")} />
            {!isAvatar ? (
              <LoginButton onClick={() => handleLoginButton()} />
            ) : (
              <Avatar
                avatar={auth.avatar}
                onClick={() => handleAvatarPopUp()}
              />
            )}
            <div className="absolute top-36 right-[calc((100vw_-_380px)_/_2)] z-50">
              {isOpenLoginPopUp && <SignInPopUp />}
              {isOpenSignUpPopUp && <SignUpPopUp />}
              {isOpenForgotPasswordPopUp && <ForgotPassword />}
              {isOpenNewPasswordPopUp && <NewPassword />}
              {isAvatarPopUp && isAvatar && auth.role === "customer" && (
                <UserPopUp />
              )}
              {isAvatarPopUp && isAvatar && auth.role === "staff" && (
                <StaffPopUp />
              )}
              {isAvatarPopUp && isAvatar && auth.role === "manager" && (
                <ManagerPopUp />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
