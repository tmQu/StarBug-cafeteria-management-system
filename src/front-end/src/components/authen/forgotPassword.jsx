import { useState, useRef, useEffect } from "react";
import LargeButton from "../buttons/largeButton";

import SignInPopUp from "./logInPopUp";
import SignUpPopUp from "./signUpPopUp";

import { useDispatch, useSelector } from "react-redux";
import { toggleSignUp, toggleForgotPassword } from "../../reduxActions/popUp";

import axios from "axios";

const ForgotPassword = () => {

  const PopUpRef = useRef();
  const dispatch = useDispatch();

  const handleSignInButton = () => {
    dispatch(toggleForgotPassword());
  };

  const handleSignUpButton = () => {
    dispatch(toggleSignUp());
  };

  const { isOpenSignInPopUp, isOpenSignUpPopUp } = useSelector((state) => state.popUpReducer);

  useEffect(() => {
    const mouseDownHandler = (e) => {
      if (
        isOpenSignInPopUp &&
        PopUpRef.current &&
        !PopUpRef.current.contains(e.target)
      ) {
        handleSignInButton(false);
      }
    };
    document.addEventListener("mousedown", mouseDownHandler);
    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [isOpenSignInPopUp]);

  useEffect(() => {
    const mouseDownHandler = (e) => {
      if (
        isOpenSignUpPopUp &&
        PopUpRef.current &&
        !PopUpRef.current.contains(e.target)
      ) {
        handleSignInButton(false);
      }
    };
    document.addEventListener("mousedown", mouseDownHandler);
    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [isOpenSignUpPopUp]);

  const [email, setEmail] = useState("");
  const [sendStatus, setSendStatus] = useState("");
  const [resendStatus, setResendStatus] = useState("");
  const [signupStatus, setSignupStatus] = useState("");

  axios.create({
    baseURL: "http://localhost:4000/auth/forgetpwd",
  });

  const URL = "http://localhost:4000/auth/forgetpwd"

  const GMAIL_REGEX = /^[a-zA-Z0-9.]+@gmail.com$/;

  const emailRef = useRef();
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const result = GMAIL_REGEX.test(email);

    setValidEmail(result);
  }, [email]);

  const handleSend = async (e) => {
    console.log("Đã gửi email tới:", email);
    // axios reqest here
    e.preventDefault();
    if (!GMAIL_REGEX.test(email)) {
      setErrMsg("Invalid email");
      return;
    }
    try {
      const response = await axios.post(
        URL,
        JSON.stringify({
          email: email,

        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // Clear input field
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleResend = () => {
    console.log("Đã gửi lại email tới:", email);
  };

  const handleSignup = () => {
    console.log("Đăng ký với email:", email);
  };

  return (
    <>
      {isOpenSignInPopUp ? (<SignInPopUp />) :
        (
          <>
            {isOpenSignUpPopUp ? (<SignUpPopUp />) :
              (
                <div className="w-[380px] h-[270px] flex flex-col justify-center items-center rounded-[10px] bg-[#F4F2EC] shadow-xl mx-auto gap-[20px]">
                  <div className="w-[24px] h-[24px] -mt-6 mr-auto pl-3">
                    <button className="hover:scale-110 transition-transform duration-500 ease-in-out" onClick={handleSignInButton}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07996"
                          stroke="#0E3746"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="w-[300px] h-[45px] border border-solid border-[#0E3746] flex flex-row mx-auto justify-center items-center rounded-[5px]">
                    <div className="w-[40px] h-[40px] flex justify-center items-center mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15.875 16.5312H2.125C1.66916 16.5312 1.23199 16.3502 0.90966 16.0278C0.587332 15.7055 0.40625 15.2683 0.40625 14.8125V5.1875C0.40625 4.73166 0.587332 4.29449 0.90966 3.97216C1.23199 3.64983 1.66916 3.46875 2.125 3.46875H15.875C16.3308 3.46875 16.768 3.64983 17.0903 3.97216C17.4127 4.29449 17.5938 4.73166 17.5938 5.1875V14.8125C17.5938 15.2683 17.4127 15.7055 17.0903 16.0278C16.768 16.3502 16.3308 16.5312 15.875 16.5312ZM2.125 4.15625C1.8515 4.15625 1.58919 4.2649 1.3958 4.4583C1.2024 4.65169 1.09375 4.914 1.09375 5.1875V14.8125C1.09375 15.086 1.2024 15.3483 1.3958 15.5417C1.58919 15.7351 1.8515 15.8438 2.125 15.8438H15.875C16.1485 15.8438 16.4108 15.7351 16.6042 15.5417C16.7976 15.3483 16.9062 15.086 16.9062 14.8125V5.1875C16.9062 4.914 16.7976 4.65169 16.6042 4.4583C16.4108 4.2649 16.1485 4.15625 15.875 4.15625H2.125Z"
                          fill="#0E3746"
                        />
                        <path
                          d="M9.00015 11.6224C8.61564 11.6219 8.2462 11.4729 7.9689 11.2065L1.20046 4.74744C1.14245 4.68293 1.11097 4.59888 1.11235 4.51213C1.11372 4.42539 1.14784 4.34237 1.20787 4.27974C1.2679 4.2171 1.34939 4.17948 1.43599 4.17441C1.5226 4.16935 1.60792 4.19722 1.67484 4.25244L8.44327 10.7115C8.59305 10.8552 8.79258 10.9354 9.00015 10.9354C9.20771 10.9354 9.40724 10.8552 9.55702 10.7115L16.3255 4.25244C16.3924 4.19722 16.4777 4.16935 16.5643 4.17441C16.6509 4.17948 16.7324 4.2171 16.7924 4.27974C16.8525 4.34237 16.8866 4.42539 16.888 4.51213C16.8893 4.59888 16.8578 4.68293 16.7998 4.74744L10.0314 11.2065C9.75409 11.4729 9.38465 11.6219 9.00015 11.6224Z"
                          fill="#0E3746"
                        />
                      </svg>
                    </div>
                    <div className="w-full h-full flex relative justify-center items-center">
                      <input
                        className="input"
                        placeholder="EMAIL"
                        name="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                      <p
                        id="emailnote"
                        className={
                          emailFocus && email && !validEmail
                            ? "text-sm text-[#BE2634] px-1 m-0"
                            : "hidden"
                        }
                      >
                        invalid
                      </p>
                    </div>
                  </div>
                  <div className="w-[300px] h-[44px] flex justify-center items-center">
                    <LargeButton name="SEND" onClick={handleSend} />
                  </div>
                  <div className="w-[300px] flex flex-row">
                    <button
                      className="w-fit h-[25px] text-[#0E3746] text-[20px] font-normal flex items-center mr-auto hover:scale-105 transition-transform duration-500 ease-in-out"
                      href="#"
                      onClick={handleResend}
                    >
                      Resend
                    </button>
                    <button
                      className="w-fit h-[25px] text-[#0E3746] text-[20px] font-normal flex items-center ml-auto hover:scale-105 transition-transform duration-500 ease-in-out"
                      href="#"
                      onClick={handleSignup && handleSignUpButton}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              )}
          </>
        )}
    </>
  );
};

export default ForgotPassword;
