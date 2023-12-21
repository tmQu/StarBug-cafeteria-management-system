import { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import LargeButton from "../buttons/largeButton";

axios.create({
  baseURL: "https://star-bug-cafeteria-management-system.vercel.app",
});
const URL = "https://star-bug-cafeteria-management-system.vercel.app/auth/resetpwd";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const NewPassword = () => {
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = "/";
  
  var s = new URLSearchParams(location.search)
  const token = s.get("token")

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const result = PASSWORD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = PASSWORD_REGEX.test(pwd);

    if (!v1) {
      setErrMsg("Invalid password");
      return;
    }
    console.log(token)
    try {
      const response = await axios.post(
        URL,
        JSON.stringify({
          token: token,
          pwd: pwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      // Clear input field
      setPwd("");
      setMatchPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err?.response?.status === 401) {
        setErrMsg("Token Expired");
      } 
      else {
        setErrMsg("Reset Password Failed");
      }
    }
  };

  return (
    <div className="w-[380px] h-fit py-6 flex flex-col justify-center items-center rounded-[10px] bg-[#F4F2EC] shadow-xl mx-auto gap-[20px]">
       <p
        ref={errRef}
        className={
          errMsg ? "text-sm text-[#BE2634]" : "hidden"
        }
        aria-live="assertive"
      >
        {errMsg}
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
            placeholder="PASSWORD"
            name="password"
            onChange={(e) => setPwd(e.target.value)}
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
        8 characters must include uppercase and lowercase letters, a number and
        a special character:
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
      <div className="w-[300px] h-[44px] flex justify-center items-center">
        <LargeButton name="CONFIRM" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default NewPassword;
