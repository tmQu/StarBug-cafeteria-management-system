import { useState } from "react";

const EyeIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_1305_4299)">
          <path
            d="M0.833984 10C0.833984 10 4.16732 3.33337 10.0007 3.33337C15.834 3.33337 19.1673 10 19.1673 10C19.1673 10 15.834 16.6667 10.0007 16.6667C4.16732 16.6667 0.833984 10 0.833984 10Z"
            stroke="#768396"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
            stroke="#768396"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1305_4299">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const EyeOffIcon = ({ className }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_1305_4298)">
          <path
            d="M14.9507 14.9499C13.5261 16.0358 11.7916 16.6373 10.0007 16.6666C4.16732 16.6666 0.833984 9.99994 0.833984 9.99994C1.87056 8.06819 3.30826 6.38045 5.05065 5.04994M8.25065 3.53327C8.82426 3.39901 9.41154 3.33189 10.0007 3.33327C15.834 3.33327 19.1673 9.99994 19.1673 9.99994C18.6615 10.9463 18.0582 11.8372 17.3673 12.6583M11.7673 11.7666C11.5384 12.0122 11.2624 12.2092 10.9558 12.3459C10.6491 12.4825 10.3181 12.556 9.98239 12.5619C9.64672 12.5678 9.31329 12.5061 9.00199 12.3803C8.6907 12.2546 8.40792 12.0675 8.17052 11.8301C7.93313 11.5927 7.74598 11.3099 7.62024 10.9986C7.49451 10.6873 7.43276 10.3539 7.43868 10.0182C7.4446 9.68252 7.51808 9.35148 7.65472 9.04481C7.79135 8.73815 7.98836 8.46215 8.23398 8.23327"
            stroke="#768396"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.833984 0.833374L19.1673 19.1667"
            stroke="#768396"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1305_4298">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const InfoBox = ({ title, info, className, hidden, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false); // Updated state
  const [passwordType, setPasswordType] = useState(type);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col py-2">
      <span className="text-xl text-[#0E3746] font-semibold">{title}</span>
      <div className="relative">
        <input
          type={passwordType}
          className={`rounded-lg border-[2px] border-[#9F9FA8] bg-transparent pl-4 pt-0.5 text-lg ${className}`}
          placeholder={showPassword && hidden ? `${info}` : "Hidden"}
          onChange={handlePasswordChange}
          value={password}
        />
        {hidden ? (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              className="text-[#9F9FA8] focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5" />
              ) : (
                <EyeOffIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
