import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignUp } from "../../reduxActions/popUp";
import SignInPopUp from "./logInPopUp";
import LargeButton from "../buttons/largeButton";
import "../../css/authen.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


axios.create({
  baseURL: "https://star-bug-cafeteria-management-system.vercel.app/",
});
const REGISTER_URL =
  "https://star-bug-cafeteria-management-system.vercel.app/auth/signup";

const GMAIL_REGEX = /^[a-zA-Z0-9.]+@gmail.com$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHONE_REGEX = /^0[0-9]+$/;

const Register = () => {
  const PopUpRef = useRef();
  const dispatch = useDispatch();

  const handleSignInButton = () => {
    dispatch(toggleSignUp());
  };

  const { isOpenSignInPopUp } = useSelector((state) => state.popUpReducer);

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

  const emailRef = useRef();
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.pathname || "/";

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState("");
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = GMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phoneNumber);
    setValidPhoneNumber(result);
  }, [phoneNumber]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  const notify = () => {
    toast("Check your email to verify your account");
    localStorage.setItem(
      "addedToCartMessage",
      "Check your email to verify your account"
    );
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = GMAIL_REGEX.test(email);
    const v2 = PASSWORD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid email or password");
      return;
    }
    try {
      // Clear input field
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          email: email,
          pwd: pwd,
          phone: phoneNumber,
          name: user,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setEmail("");
      setUser("");
      setPwd("");
      setMatchPwd("");
      setPhoneNumber("");
      navigate(from, { replace: true });
      // message check email to verify
      handleSignInButton(false);
      notify();
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email has Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {isOpenSignInPopUp ? (
        <SignInPopUp />
      ) : (
        <div className="w-[380px] h-fit py-4 flex flex-col justify-center items-center rounded-[10px] bg-[#F4F2EC] shadow-xl mx-auto gap-[20px]">
          <p
            ref={errRef}
            className={errMsg ? "text-sm text-[#BE2634] px-1 -mb-8" : "hidden"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="w-[24px] h-[24px] -mb-4 mr-auto pl-3">
            <button
              className="hover:scale-110 transition-transform duration-500 ease-in-out"
              onClick={handleSignInButton}
            >
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
          <div className="inputBox">
            <div className="w-[40px] h-[40px] flex justify-center items-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M15.875 17.332H2.125C1.66916 17.332 1.23199 17.1509 0.90966 16.8286C0.587332 16.5063 0.40625 16.0691 0.40625 15.6133V5.98828C0.40625 5.53244 0.587332 5.09527 0.90966 4.77294C1.23199 4.45061 1.66916 4.26953 2.125 4.26953H15.875C16.3308 4.26953 16.768 4.45061 17.0903 4.77294C17.4127 5.09527 17.5938 5.53244 17.5938 5.98828V15.6133C17.5938 16.0691 17.4127 16.5063 17.0903 16.8286C16.768 17.1509 16.3308 17.332 15.875 17.332ZM2.125 4.95703C1.8515 4.95703 1.58919 5.06568 1.3958 5.25908C1.2024 5.45247 1.09375 5.71478 1.09375 5.98828V15.6133C1.09375 15.8868 1.2024 16.1491 1.3958 16.3425C1.58919 16.5359 1.8515 16.6445 2.125 16.6445H15.875C16.1485 16.6445 16.4108 16.5359 16.6042 16.3425C16.7976 16.1491 16.9062 15.8868 16.9062 15.6133V5.98828C16.9062 5.71478 16.7976 5.45247 16.6042 5.25908C16.4108 5.06568 16.1485 4.95703 15.875 4.95703H2.125Z"
                  fill="#0E3746"
                />
                <path
                  d="M9.00015 12.4232C8.61564 12.4226 8.2462 12.2736 7.9689 12.0073L1.20046 5.54822C1.14245 5.48371 1.11097 5.39966 1.11235 5.31291C1.11372 5.22617 1.14784 5.14315 1.20787 5.08052C1.2679 5.01788 1.34939 4.98026 1.43599 4.9752C1.5226 4.97013 1.60792 4.998 1.67484 5.05322L8.44327 11.5123C8.59305 11.656 8.79258 11.7362 9.00015 11.7362C9.20771 11.7362 9.40724 11.656 9.55702 11.5123L16.3255 5.05322C16.3924 4.998 16.4777 4.97013 16.5643 4.9752C16.6509 4.98026 16.7324 5.01788 16.7924 5.08052C16.8525 5.14315 16.8866 5.22617 16.888 5.31291C16.8893 5.39966 16.8578 5.48371 16.7998 5.54822L10.0314 12.0073C9.75409 12.2736 9.38465 12.4226 9.00015 12.4232Z"
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
                value={email}
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
          <div className="inputBox">
            <div className="w-[40px] h-[40px] flex justify-center items-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M16.6663 18.0977V16.431C16.6663 15.5469 16.3151 14.6991 15.69 14.074C15.0649 13.4488 14.2171 13.0977 13.333 13.0977H6.66634C5.78229 13.0977 4.93444 13.4488 4.30932 14.074C3.6842 14.6991 3.33301 15.5469 3.33301 16.431V18.0977"
                  stroke="#0E3746"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0003 9.76432C11.8413 9.76432 13.3337 8.27194 13.3337 6.43099C13.3337 4.59004 11.8413 3.09766 10.0003 3.09766C8.15938 3.09766 6.66699 4.59004 6.66699 6.43099C6.66699 8.27194 8.15938 9.76432 10.0003 9.76432Z"
                  stroke="#0E3746"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-full h-full flex relative justify-center items-center">
              <input
                className="input"
                placeholder="FULLNAME"
                name="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
            </div>
          </div>
          <div className="inputBox">
            <div className="w-[40px] h-[40px] flex justify-center items-center mx-auto">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.08301 9.16663V5.83329C6.08301 4.72822 6.52199 3.66842 7.3034 2.88701C8.0848 2.10561 9.14461 1.66663 10.2497 1.66663C11.3547 1.66663 12.4146 2.10561 13.196 2.88701C13.9774 3.66842 14.4163 4.72822 14.4163 5.83329V9.16663"
                  stroke="#0E3746"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-full h-full flex relative justify-center items-center">
              <input
                className="input"
                type="password"
                placeholder="PASSWORD"
                name="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
            </div>
          </div>
          <p
            id="pwdnote"
            className={
              pwdFocus && !validPwd
                ? "text-xs text-[#BE2634] pl-8 pr-2 -mt-4 -mb-2"
                : "hidden"
            }
          >
            {" "}
            8 characters must include uppercase and lowercase letters, a number
            and a special character:
            <span aria-label="exclamation mark"> ! </span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
          <div className="inputBox">
            <div className="w-[40px] h-[40px] flex justify-center items-center mx-auto">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.08301 9.16663V5.83329C6.08301 4.72822 6.52199 3.66842 7.3034 2.88701C8.0848 2.10561 9.14461 1.66663 10.2497 1.66663C11.3547 1.66663 12.4146 2.10561 13.196 2.88701C13.9774 3.66842 14.4163 4.72822 14.4163 5.83329V9.16663"
                  stroke="#0E3746"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-full h-full flex relative justify-center items-center">
              <input
                className="input"
                type="password"
                placeholder="CONFIRM"
                name="confirmPassword"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="matchnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
            </div>
          </div>
          <p
            id="matchnote"
            className={
              matchFocus && !validMatch
                ? "text-xs text-[#BE2634] pr-2 -mt-4 -mb-2"
                : "hidden"
            }
          >
            Must match the first password input field
          </p>
          <div className="inputBox">
            <div className="w-[40px] h-[40px] flex justify-center items-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M18.9994 14.9765V17.6862C19.0005 17.9377 18.9488 18.1867 18.8479 18.4172C18.7469 18.6477 18.5988 18.8546 18.413 19.0247C18.2273 19.1947 18.008 19.3242 17.7693 19.4048C17.5305 19.4854 17.2775 19.5153 17.0265 19.4927C14.2415 19.1907 11.5664 18.2409 9.21601 16.7197C7.02929 15.3329 5.17534 13.4827 3.7858 11.3003C2.25627 8.94389 1.30442 6.26107 1.00735 3.46915C0.98473 3.21938 1.01447 2.96764 1.09468 2.72996C1.17489 2.49229 1.30381 2.27389 1.47323 2.08866C1.64265 1.90343 1.84885 1.75544 2.07872 1.65411C2.30858 1.55278 2.55707 1.50032 2.80837 1.50009H5.52347C5.96269 1.49577 6.3885 1.651 6.72152 1.93683C7.05455 2.22267 7.27207 2.61961 7.33354 3.05366C7.44814 3.92084 7.66067 4.77229 7.96707 5.59177C8.08883 5.91507 8.11519 6.26642 8.043 6.6042C7.97082 6.94198 7.80313 7.25203 7.5598 7.49761L6.41041 8.64473C7.69877 10.906 9.57482 12.7784 11.8406 14.0642L12.99 12.9171C13.2361 12.6742 13.5467 12.5069 13.8852 12.4348C14.2236 12.3628 14.5757 12.3891 14.8996 12.5106C15.7207 12.8164 16.5739 13.0285 17.4428 13.1429C17.8824 13.2048 18.2839 13.4258 18.5709 13.7639C18.858 14.1019 19.0105 14.5335 18.9994 14.9765Z"
                  stroke="#0E3746"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-full h-full flex relative justify-center items-center">
              <input
                className="input"
                placeholder="PHONE NUMBER"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                aria-invalid={validPhoneNumber ? "false" : "true"}
                aria-describedby="phonenote"
                required
                onFocus={() => setPhoneNumberFocus(true)}
                onBlur={() => setPhoneNumberFocus(false)}
              />
              <p
                id="phonenote"
                className={
                  phoneNumberFocus && phoneNumber && !validPhoneNumber
                    ? "text-sm text-[#BE2634] px-1 m-0"
                    : "hidden"
                }
              >
                invalid
              </p>
            </div>
          </div>
          <div className="w-[300px] h-[44px] flex justify-center items-center">
            <LargeButton name="SIGN UP" type="submit" onClick={handleSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
