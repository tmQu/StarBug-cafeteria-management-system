import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  toggleLogin,
  toggleSignUp,
  toggleForgotPassword,
  toggleAvatarLogin,
} from "../../reduxActions/popUp";

import { motion } from "framer-motion";

import LargeButton from "../buttons/largeButton";
import useAuth from "../../hooks/useAuth";
import useToggle from "../../hooks/useToggle";
import useInput from "../../hooks/useInput";
import "../../css/authen.css";

axios.create({
  baseURL: "https://star-bug-cafeteria-management-system.vercel.app/",
});
const LOGIN_URL = "https://star-bug-cafeteria-management-system.vercel.app/auth/signin";

const SignInPopUp = () => {
  // PopUp Redux
  const dispatch = useDispatch();

  const handleSignUpButton = () => {
    dispatch(toggleLogin(false));
    dispatch(toggleSignUp(true));
  };

  const handleForgotPasswordButton = () => {
    dispatch(toggleLogin(false));
    dispatch(toggleSignUp(false));
    dispatch(toggleForgotPassword(true));
  };

  // Auth
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.pathname || "/";

  const emailRef = useRef();
  const errRef = useRef();

  const [email, resetEmail, emailAttribs] = useInput("email", "");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle("persist", false);

  // const togglePersist = () => {
  //   setPersist((prev) => !prev);
  // };

  // useEffect(() => {
  //   localStorage.setItem("persist", persist);
  // }, [persist]);

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg("")
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();  
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const role = response?.data?.role;
      setAuth({ email, role, accessToken });
      resetEmail();
      setPwd("");
      navigate(from, { replace: true });
      dispatch(toggleLogin(false));
      dispatch(toggleAvatarLogin(true));
      //hide login popup, hide login button, show user avatar
      // response?.data?.imageAvatar
      // set static avatar for now, database not ready
    } catch (err) {
      console.log('Error: ', err);
      if (!err?.response) {
        setErrMsg("Server is not responding");
      } else if (err?.response?.status === 400) {
        setErrMsg("Missing email or password");
      } else if (err?.response?.status === 401) {
        setErrMsg("Wrong email or password");
      } else if (err?.response?.status === 402) {
        setErrMsg("Not verified user, please check your email");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 15, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-[380px] h-fit py-4 pt-6 flex flex-col justify-center items-center rounded-[10px] bg-[#F4F2EC] shadow-xl mx-auto gap-[20px]"
    >
      <p
        ref={errRef}
        className={
          errMsg ? "text-sm text-[#BE2634] absolute mb-[265px]" : "hidden"
        }
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div className="inputBox">
        <div className="inputIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M16.9163 17.5V15.8333C16.9163 14.9493 16.5651 14.1014 15.94 13.4763C15.3149 12.8512 14.4671 12.5 13.583 12.5H6.91634C6.03229 12.5 5.18444 12.8512 4.55932 13.4763C3.9342 14.1014 3.58301 14.9493 3.58301 15.8333V17.5"
              stroke="#0E3746"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.2503 9.16667C12.0913 9.16667 13.5837 7.67428 13.5837 5.83333C13.5837 3.99238 12.0913 2.5 10.2503 2.5C8.40938 2.5 6.91699 3.99238 6.91699 5.83333C6.91699 7.67428 8.40938 9.16667 10.2503 9.16667Z"
              stroke="#0E3746"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="w-full h-full flex relative justify-center items-center">
          <input
            className="input justify-center items-center"
            placeholder="EMAIL"
            name="email"
            ref={emailRef}
            autoComplete="off"
            {...emailAttribs}
            required
          />
        </div>
      </div>
      <div className="inputBox">
        <div className="inputIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M16.0833 9.16663H4.41667C3.49619 9.16663 2.75 9.91282 2.75 10.8333V16.6666C2.75 17.5871 3.49619 18.3333 4.41667 18.3333H16.0833C17.0038 18.3333 17.75 17.5871 17.75 16.6666V10.8333C17.75 9.91282 17.0038 9.16663 16.0833 9.16663Z"
              stroke="#0E3746"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.08301 9.16663V5.83329C6.08301 4.72822 6.52199 3.66842 7.3034 2.88701C8.0848 2.10561 9.14461 1.66663 10.2497 1.66663C11.3547 1.66663 12.4146 2.10561 13.196 2.88701C13.9774 3.66842 14.4163 4.72822 14.4163 5.83329V9.16663"
              stroke="#0E3746"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="w-full h-full flex relative justify-center items-center">
          <input
            type="password"
            className="input"
            placeholder="PASSWORD"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}
            required
          />
        </div>
      </div>
      <div className="h-fit -mt-2 -mb-2 mr-auto ml-8 flex items-center">
        <input
          type="checkbox"
          id="persist"
          className="w-[16px] h-[16px]"
          onChange={toggleCheck}
          checked={check}
        />
        <text className="text-[#0E3746] text-[16px] font-normal ml-[10px]">
          Trust This Device
        </text>
      </div>
      <div className="w-[300px] h-[44px] flex justify-center items-center">
        <LargeButton name="LOGIN" type="submit" onClick={handleSubmit} />
      </div>
      <div className="w-[300px] flex flex-row">
        <button
          className="w-fit h-[25px] text-[#0E3746] text-[20px] font-normal flex items-center mr-auto hover:scale-105 transition-transform duration-500 ease-in-out"
          href="#"
          onClick={() => handleSignUpButton()}
        >
          Sign up
        </button>
        <button
          className="w-fit h-[25px] text-[#0E3746] text-[20px] font-normal flex items-center ml-auto hover:scale-105 transition-transform duration-500 ease-in-out"
          href="#"
          onClick={() => handleForgotPasswordButton()}
        >
          Forgot password?
        </button>
      </div>
    </motion.div>
  );
};

export default SignInPopUp;
