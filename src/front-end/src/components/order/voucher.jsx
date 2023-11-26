import React, { useState } from "react";

const Voucher = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      className={`w-[427px] h-[40px] flex border-[1px] rounded-[5px] overflow-hidden ${
        isFocused ? "border-[#BE2623]" : "border-[#D9D9D9]"
      } hover:border-[#BE2623]`}
    >
      <div className="w-[40px] h-[40px] bg-[#D9D9D9] pb-1 flex justify-center items-center rounded-tl-[5px] rounded-bl-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M24.1055 17.25C24.1034 16.5527 24.3518 15.8779 24.8054 15.3483C25.259 14.8187 25.8877 14.4696 26.577 14.3645C26.6933 14.3489 26.8001 14.2919 26.8778 14.2039C26.9555 14.1159 26.9989 14.0029 27 13.8855V12.4815C26.9993 12.4175 26.986 12.3543 26.9608 12.2954C26.9356 12.2366 26.8991 12.1833 26.8533 12.1386C26.8075 12.0939 26.7534 12.0586 26.6939 12.0348C26.6345 12.011 26.571 11.9992 26.507 12H5.493C5.429 11.9992 5.36548 12.011 5.30606 12.0348C5.24663 12.0586 5.19248 12.0939 5.1467 12.1386C5.10091 12.1833 5.06439 12.2366 5.03921 12.2954C5.01404 12.3543 5.00072 12.4175 5 12.4815V13.8855C5.00112 14.0029 5.0445 14.1159 5.12219 14.2039C5.19988 14.2919 5.30668 14.3489 5.423 14.3645C6.11164 14.4713 6.73937 14.8209 7.1928 15.3501C7.64624 15.8792 7.89546 16.5531 7.89546 17.25C7.89546 17.9469 7.64624 18.6208 7.1928 19.15C6.73937 19.6791 6.11164 20.0287 5.423 20.1355C5.30668 20.1511 5.19988 20.2082 5.12219 20.2961C5.0445 20.3841 5.00112 20.4971 5 20.6145V22.0185C5.00198 22.1476 5.05492 22.2707 5.14727 22.3609C5.23963 22.4511 5.36391 22.5011 5.493 22.5H26.507C26.6361 22.5011 26.7604 22.4511 26.8527 22.3609C26.9451 22.2707 26.998 22.1476 27 22.0185V20.6145C26.9989 20.4971 26.9555 20.3841 26.8778 20.2961C26.8001 20.2082 26.6933 20.1511 26.577 20.1355C25.8877 20.0304 25.259 19.6813 24.8054 19.1517C24.3518 18.6222 24.1034 17.9473 24.1055 17.25Z"
            stroke="#6D6D6D"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M10 12V13.5"
            stroke="#6D6D6D"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M10 15.5V16.5"
            stroke="#6D6D6D"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M10 21V22.5"
            stroke="#6D6D6D"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M15.75 16.5C16.1642 16.5 16.5 16.1642 16.5 15.75C16.5 15.3358 16.1642 15 15.75 15C15.3358 15 15 15.3358 15 15.75C15 16.1642 15.3358 16.5 15.75 16.5Z"
            stroke="#6D6D6D"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M18.75 19.5C19.1642 19.5 19.5 19.1642 19.5 18.75C19.5 18.3358 19.1642 18 18.75 18C18.3358 18 18 18.3358 18 18.75C18 19.1642 18.3358 19.5 18.75 19.5Z"
            stroke="#6D6D6D"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M10 18V19"
            stroke="#6D6D6D"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M14.5 20.5L20 14"
            stroke="#6D6D6D"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="h-full flex-grow relative">
        <input
          className="w-[380px] h-full px-4 pt-0.5 bg-transparent text-[18px] font-Source-Sans-3 font-normal outline-none"
          placeholder="Voucher code"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default Voucher;
