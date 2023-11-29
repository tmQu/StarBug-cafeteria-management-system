import React from "react";

const AddressInput = () => {
  return (
    <div className="w-[800px] h-[525px] relative bg-white rounded-[30px] shadow mx-auto ">
      <div className="w-[103px] h-[103px] left-[348px] top-[-51px] absolute bg-[#F3F2ED] mx-auto my-auto rounded-full">
        <div className="h-[103px] mt-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="mx-auto my-auto"
          >
            <g clip-path="url(#clip0_954_5259)">
              <path
                d="M29.4434 58.7099L29.429 58.7004L29.4144 58.6912C16.9911 50.8962 8.75 37.5272 8.75 22.5C8.75 10.6904 18.1904 1.25 30 1.25C41.8096 1.25 51.25 10.6904 51.25 22.5C51.25 37.4921 43.0447 50.6044 30.8789 58.6621C30.2 58.9824 29.7176 58.8927 29.4434 58.7099ZM18.75 22.5C18.75 28.6904 23.8096 33.75 30 33.75C36.1904 33.75 41.25 28.6904 41.25 22.5C41.25 16.3096 36.1904 11.25 30 11.25C23.8096 11.25 18.75 16.3096 18.75 22.5Z"
                fill="#BE2623"
                stroke="#BE2623"
                stroke-width="2.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_954_5259">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="w-[60px] h-[60px] px-[7.50px] left-[370px] top-[-30px] absolute justify-center items-center inline-flex" />
      <div className="w-[328px] h-[53px] left-[236px] top-[438px] absolute bg-red-700 rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
        <button className="text-[#F3F2ED] text-[25px]">
          Choose this address
        </button>
      </div>
      <div className="w-[650px] h-[58px] px-4 pt-1 left-[75px] top-[93px] absolute rounded-lg border border-[#183942] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-[42px] justify-start items-center gap-4 inline-flex">
          <div className="w-6 h-6 px-[2.50px] py-[3px] justify-center items-center flex">
            <div className="w-[19px] h-[18px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                  stroke="#BE2623"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                  stroke="#BE2623"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
            <div className="h-[22px] self-stretch text-sm text-[14px] text-[#0D3745]">
              Street
            </div>
            <input
              className="h-[23px] self-stretch items-center text-lg text-[18px] text-[#ABAFB1] outline-none"
              placeholder="Your Street"
            />
          </div>
        </div>
      </div>
      <div className="w-[650px] h-[58px] px-4 pt-1 left-[75px] top-[175px] absolute rounded-lg border border-[#183942] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-[42px] justify-start items-center gap-4 inline-flex">
          <div className="w-6 h-6 px-[2.50px] py-[3px] justify-center items-center flex">
            <div className="w-[19px] h-[18px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                  stroke="#BE2623"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                  stroke="#BE2623"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
            <div className="h-[22px] self-stretch text-sm text-[14px] text-[#0D3745]">
              Ward
            </div>
            <input
              className="h-[23px] self-stretch items-center text-lg text-[18px] text-[#ABAFB1] outline-none"
              placeholder="Your Ward"
            />
          </div>
        </div>
      </div>
      <div className="w-[650px] h-[58px] px-4 pt-1 left-[75px] top-[257px] absolute rounded-lg border border-[#183942] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-[42px] justify-start items-center gap-4 inline-flex">
          <div className="w-6 h-6 px-[2.50px] py-[3px] justify-center items-center flex">
            <div className="w-[19px] h-[18px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                  stroke="#BE2623"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                  stroke="#BE2623"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
            <div className="h-[22px] self-stretch text-sm text-[14px] text-[#0D3745]">
              District
            </div>
            <input
              className="h-[23px] self-stretch items-center text-lg text-[18px] text-[#ABAFB1] outline-none"
              placeholder="Your District"
            />
          </div>
        </div>
      </div>
      <div className="w-[315px] h-[58px] px-4 py-2 left-[75px] top-[339px] absolute rounded-lg border border-[#183942] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch grow shrink basis-0 justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-[42px] justify-start items-center gap-2 flex">
            <img
              className="w-[35px] h-6"
              src="https://via.placeholder.com/35x24"
            />
            <div className="grow shrink basis-0 h-[42px] flex-col justify-between items-start inline-flex">
              <div className="h-[42px] flex items-center self-stretch text-[#ABAFB1] text-[18px] font-normal ">
                TP. Hồ Chí Minh
              </div>
            </div>
            <div className="w-6 h-6 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M10.6668 1.66663L6.00016 6.33329L1.3335 1.66663"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[315px] h-[58px] px-4 py-1 left-[410px] top-[339px] absolute rounded-lg border border-[#183942] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch grow shrink basis-0 justify-start items-center gap-2 inline-flex">
          <div className="w-8 h-8 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clip-path="url(#clip0_954_16258)">
                <path
                  d="M16.0001 30C12.2601 30 8.74507 28.544 6.10107 25.899C1.77907 21.578 0.752066 15.025 3.54707 9.595C3.80007 9.104 4.40207 8.911 4.89407 9.163C5.38607 9.415 5.57907 10.018 5.32607 10.51C2.93007 15.164 3.81007 20.78 7.51507 24.485C9.78107 26.752 12.7941 28 16.0001 28C19.2051 28 22.2191 26.752 24.4851 24.485C26.7511 22.218 28.0001 19.205 28.0001 16C28.0001 12.794 26.7521 9.781 24.4851 7.515C22.2181 5.249 19.2061 4 16.0001 4C12.7941 4 9.78107 5.249 7.51507 7.515C7.12407 7.906 6.49207 7.906 6.10107 7.515C5.71007 7.124 5.71007 6.492 6.10107 6.101C8.74507 3.457 12.2601 2 16.0001 2C19.7401 2 23.2561 3.457 25.8991 6.101C28.5441 8.745 30.0001 12.26 30.0001 16C30.0001 19.739 28.5441 23.255 25.8991 25.899C23.2561 28.544 19.7401 30 16.0001 30Z"
                  fill="#ABAFB1"
                />
                <path
                  d="M10.3431 22.656C10.0821 22.656 9.82606 22.553 9.63606 22.363C9.37406 22.101 9.27906 21.717 9.38706 21.363L12.0441 12.706C12.1411 12.389 12.3901 12.141 12.7071 12.043L21.3651 9.38597C21.7181 9.27597 22.1031 9.37297 22.3651 9.63497C22.6271 9.89697 22.7221 10.281 22.6141 10.635L19.9571 19.292C19.8591 19.609 19.6111 19.857 19.2941 19.955L10.6381 22.611C10.5401 22.642 10.4411 22.656 10.3431 22.656ZM13.8001 13.8L11.8521 20.147L18.1991 18.199L20.1471 11.852L13.8001 13.8Z"
                  fill="#ABAFB1"
                />
              </g>
              <defs>
                <clipPath id="clip0_954_16258">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="grow shrink basis-0 h-[42px] justify-start items-center gap-2 flex">
            <div className="grow shrink basis-0 h-[42px] flex-col justify-between items-start inline-flex">
              <div className="h-[42px] flex items-center self-stretch text-[#ABAFB1] text-[18px] font-normal ">
                Map checking status
              </div>
            </div>
          </div>
          <div className="w-6 h-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85383C4.07979 4.06253 2.66989 5.78049 1.83733 7.79048C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7886C11.9878 23.2131 14.1995 22.9952 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C23 9.08262 21.8411 6.28473 19.7782 4.22183C17.7153 2.15893 14.9174 1 12 1ZM17.707 9.707L10.707 16.707C10.5195 16.8945 10.2652 16.9998 10 16.9998C9.73484 16.9998 9.48053 16.8945 9.293 16.707L6.293 13.707C6.11085 13.5184 6.01005 13.2658 6.01233 13.0036C6.01461 12.7414 6.11978 12.4906 6.30519 12.3052C6.49059 12.1198 6.74141 12.0146 7.0036 12.0123C7.2658 12.01 7.5184 12.1108 7.707 12.293L10 14.586L16.293 8.293C16.4816 8.11084 16.7342 8.01005 16.9964 8.01233C17.2586 8.0146 17.5094 8.11977 17.6948 8.30518C17.8802 8.49059 17.9854 8.7414 17.9877 9.0036C17.99 9.2658 17.8892 9.5184 17.707 9.707Z"
                fill="#ABAFB1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInput;
