import React, { useState } from "react";

const NoteHere = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      className={`w-[400px] h-[48px] flex border-[1px] rounded-[5px] overflow-hidden ${
        isFocused ? "border-[blue]" : "border-[#D9D9D9]"
      } hover:shadow-md shadow-none`}
    >
      <div className="w-[52px] h-[52px] bg-[#D9D9D9] pb-1 flex justify-center items-center rounded-tl-[5px] rounded-bl-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="21"
          viewBox="0 0 18 21"
          fill="none"
        >
          <g opacity="0.5">
            <path
              d="M10.2264 2.6257V3.85151H5.32324V2.6257V1.3999H10.2264V2.6257Z"
              stroke="black"
              strokeWidth="1.36203"
              strokeLinejoin="round"
            />
            <path
              d="M5.32253 2.62573H1.03223V11.8192V19.787H14.516V17.3354"
              stroke="black"
              strokeWidth="1.36203"
              strokeLinejoin="round"
            />
            <path
              d="M10.2256 2.62573H14.5159V11.8192V14.8838"
              stroke="black"
              strokeWidth="1.36203"
              strokeLinejoin="round"
            />
            <path
              d="M7.16211 17.3354H14.5169H16.9685V14.8838H14.5169H7.16211V17.3354Z"
              stroke="black"
              strokeWidth="1.36203"
              strokeLinejoin="round"
            />
            <path
              d="M7.16021 14.8838L4.0957 16.1096L7.16021 17.3354"
              stroke="black"
              strokeWidth="1.36203"
              strokeLinejoin="round"
            />
            <path
              d="M2.87012 6.91602H12.6765"
              stroke="black"
              strokeWidth="1.36203"
              strokeLinejoin="round"
            />
            <path
              d="M2.87012 9.36768H12.6765"
              stroke="black"
              strokeWidth="1.36203"
              strokeLinejoin="round"
            />
            <path
              d="M2.87012 11.8191H12.6765"
              stroke="black"
              strokeWidth="1.36203"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <div className="h-full flex-grow relative">
        <input
          className="w-[348px] h-full px-4 pt-1 bg-transparent text-[18px] font-Source-Sans-3 font-normal outline-none"
          placeholder="Note here"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default NoteHere;
