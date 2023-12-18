import Logo from "./logo";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(`/${route}`);
  };
  return (
    <div className="w-screen h-[410px] flex flex-col justify-center items-center bg-[#EAE8DC]">
      <div className="w-[307px] py-2 mx-auto text-[#183942] text-center text-[15px] opacity-[0.6] font-Source-Sans-3 font-bold line-height:normal tracking-[.25em]">
        WE SERVE YOUR FAVOR
      </div>
      <div className="w-[1120px] py-2 mx-auto text-[#183942] text-center text-[50px] font-Source-Sans-3 font-bold line-height:normal">
        Request More Information
      </div>
      <div className="py-3 mx-auto">
        <button
          onClick={() => handleNavigation("about")}
          className="w-[198px] h-[60px] py-1 text-[#F4F2EC] bg-[#183942] px-6 rounded-[30px] text-xl font-Source-Sans-3 font-bold cursor-pointer transition-transform ease-in-out duration-500 hover:bg-[#0a181c] hover:scale-[1.05]"
        >
          About us
        </button>
      </div>
      <div className="mx-auto py-2 w-[139px] text-[#183942] text-center font-black text-[16px]">
        @Intech .Co, Ltd
      </div>
      <div className="flex justify-center items-center my-3">
        <hr className="w-[1120px] border-[1px] border-gray-600" />
      </div>
      <div className="w-[1120px] mx-auto flex flex-row justify-between items-center">
        <div className="flex mr-auto">
          <Logo />
        </div>
        <div className="flex w-[460px] h-[20px] justify-between">
          {["Coffee", "Tea", "Milktea", "Cake"].map((item, index) => (
            <button
              className="text-[#183942] text-center font-black text-[18px] cursor-pointer"
              onClick={() => handleNavigation(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex w-[255px] h-[45px] ml-auto justify-between">
          <a className="transition-transform duration-500 ease-in-out cursor-pointer hover:scale-[1.1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                opacity="0.25"
                d="M43.875 22.5C43.875 34.3051 34.3051 43.875 22.5 43.875C10.6949 43.875 1.125 34.3051 1.125 22.5C1.125 10.6949 10.6949 1.125 22.5 1.125C34.3051 1.125 43.875 10.6949 43.875 22.5Z"
                stroke="#183942"
                stroke-width="2.25"
              />
              <path
                d="M17.6875 19.375C18.6195 19.375 19.375 18.6195 19.375 17.6875C19.375 16.7555 18.6195 16 17.6875 16C16.7555 16 16 16.7555 16 17.6875C16 18.6195 16.7555 19.375 17.6875 19.375Z"
                fill="#183942"
              />
              <path
                d="M19.0938 20.5H16.2812C16.126 20.5 16 20.626 16 20.7812V29.2188C16 29.374 16.126 29.5 16.2812 29.5H19.0938C19.249 29.5 19.375 29.374 19.375 29.2188V20.7812C19.375 20.626 19.249 20.5 19.0938 20.5Z"
                fill="#183942"
              />
              <path
                d="M27.4733 20.1125C26.2712 19.7007 24.7677 20.0624 23.866 20.711C23.8351 20.59 23.7248 20.5 23.5938 20.5H20.7812C20.626 20.5 20.5 20.626 20.5 20.7813V29.2188C20.5 29.374 20.626 29.5 20.7812 29.5H23.5938C23.749 29.5 23.875 29.374 23.875 29.2188V23.155C24.3295 22.7635 24.9151 22.6387 25.3943 22.8423C25.8589 23.0386 26.125 23.5178 26.125 24.1563V29.2188C26.125 29.374 26.251 29.5 26.4062 29.5H29.2188C29.374 29.5 29.5 29.374 29.5 29.2188V23.5898C29.4679 21.2785 28.3806 20.423 27.4733 20.1125Z"
                fill="#183942"
              />
            </svg>
          </a>
          <a className="transition-transform duration-500 ease-in-out cursor-pointer hover:scale-[1.1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                opacity="0.25"
                d="M44 22.5C44 34.3741 34.3741 44 22.5 44C10.6259 44 1 34.3741 1 22.5C1 10.6259 10.6259 1 22.5 1C34.3741 1 44 10.6259 44 22.5Z"
                stroke="#183942"
                stroke-width="2"
              />
              <path
                d="M20.699 29.393L20.6786 23.0961H18V20.3974H20.6786V18.5983C20.6786 16.1702 22.171 15 24.3209 15C25.3507 15 26.2358 15.0772 26.4937 15.1118V17.6493L25.0026 17.65C23.8334 17.65 23.607 18.2097 23.607 19.0312V20.3974H26.9286L26.0357 23.0961H23.607V29.393H20.699Z"
                fill="#183942"
              />
            </svg>
          </a>
          <a className="transition-transform duration-500 ease-in-out cursor-pointer hover:scale-[1.1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                opacity="0.25"
                d="M44 22.5C44 34.3741 34.3741 44 22.5 44C10.6259 44 1 34.3741 1 22.5C1 10.6259 10.6259 1 22.5 1C34.3741 1 44 10.6259 44 22.5Z"
                stroke="#183942"
                stroke-width="2"
              />
              <path
                d="M25.8678 19.9422C26.2986 19.9422 26.6478 19.593 26.6478 19.1622C26.6478 18.7314 26.2986 18.3822 25.8678 18.3822C25.437 18.3822 25.0878 18.7314 25.0878 19.1622C25.0878 19.593 25.437 19.9422 25.8678 19.9422Z"
                fill="#183942"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.25 22.5C19.25 24.2924 20.7076 25.75 22.5 25.75C24.2924 25.75 25.75 24.2924 25.75 22.5C25.75 20.7076 24.2924 19.25 22.5 19.25C20.7076 19.25 19.25 20.7076 19.25 22.5ZM20.875 22.5C20.875 21.6038 21.6038 20.875 22.5 20.875C23.3962 20.875 24.125 21.6038 24.125 22.5C24.125 23.3962 23.3962 24.125 22.5 24.125C21.6038 24.125 20.875 23.3962 20.875 22.5Z"
                fill="#183942"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.25 29H25.75C27.4205 29 29 27.4205 29 25.75V19.25C29 17.5795 27.4205 16 25.75 16H19.25C17.5795 16 16 17.5795 16 19.25V25.75C16 27.4205 17.5795 29 19.25 29ZM17.625 19.25C17.625 18.4903 18.4903 17.625 19.25 17.625H25.75C26.5097 17.625 27.375 18.4903 27.375 19.25V25.75C27.375 26.5097 26.5097 27.375 25.75 27.375H19.25C18.4757 27.375 17.625 26.5243 17.625 25.75V19.25Z"
                fill="#183942"
              />
            </svg>
          </a>
          <a className="transition-transform duration-500 ease-in-out cursor-pointer hover:scale-[1.1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                opacity="0.25"
                d="M44 22.5C44 34.3741 34.3741 44 22.5 44C10.6259 44 1 34.3741 1 22.5C1 10.6259 10.6259 1 22.5 1C34.3741 1 44 10.6259 44 22.5Z"
                stroke="#183942"
                stroke-width="2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.2659 17.3431C29.951 17.5244 30.4906 18.0559 30.6745 18.7295C31.0159 19.9588 30.9999 22.522 30.9999 22.522C30.9999 22.522 30.9975 25.071 30.6665 26.2996C30.4803 26.9724 29.9382 27.5031 29.2539 27.6836C28.002 28.0055 22.9935 28 22.9935 28C22.9935 28 17.9987 27.9945 16.734 27.6569C16.0481 27.4756 15.5084 26.9441 15.3246 26.2713C14.9968 25.0545 15 22.4921 15 22.4921C15 22.4921 15.0032 19.9423 15.3334 18.713C15.5188 18.0402 16.0736 17.4969 16.7452 17.3172C17.9979 16.9945 23.0055 17 23.0055 17C23.0055 17 28.014 17.0055 29.2659 17.3431ZM21.4075 20.1441L21.4035 24.8543L25.5701 22.5031L21.4075 20.1441Z"
                fill="#183942"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
