import Logo from "../logo";
import { useNavigate } from "react-router-dom";

const Footer = ({ isAdmin }) => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(`/${route}`);
  };

  const scrollToTopAndNavigate = (item) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    handleNavigation(item.toLowerCase());
  };

  return (
    <div className="w-screen bg-[#EAE8DC]">
      <div className="w-[1120px] xl:w-screen mx-auto h-fit py-3 sm:py-6 flex flex-col justify-center items-center ">
        <div className="w-fit py-2 mx-auto text-[#183942] text-center text-[15px] opacity-[0.6] font-Source-Sans-3 font-bold line-height:normal tracking-[.25em]">
          WE SERVE YOUR FAVOR
        </div>
        <div className="w-fit py-2 mx-auto text-[#183942] text-center text-[50px] sm:text-[40px] font-Source-Sans-3 font-bold line-height:normal">
          Request More Information
        </div>
        <div className="py-3 mx-auto">
          <button
            onClick={() => scrollToTopAndNavigate("about")}
            className="w-[198px] h-[60px] py-1 text-[#F4F2EC] bg-[#183942] px-6 rounded-[30px] text-xl font-Source-Sans-3 font-bold cursor-pointer transition-transform ease-in-out duration-500 hover:bg-[#0a181c] hover:scale-[1.05]"
          >
            About us
          </button>
        </div>
        <div className="mx-auto py-2 w-fit text-[#183942] text-center font-black text-[16px]">
          @Intech .Co
        </div>
        <div className="flex justify-center items-center my-3">
          <hr className="w-screen border-[1px] border-gray-600" />
        </div>
        <div className="w-full h-fit  px-4 flex flex-row sm:flex-col justify-between items-center sm:gap-4 sm:justify-center">
          <div className="w-fit mr-2">
            <Logo theme="dark" />
          </div>
          {isAdmin === true ? (
            <></>
          ) : (
            <div className="w-auto h-fit flex flex-row justify-between gap-12 xl:gap-6">
              {["Tea", "Milktea", "Coffee", "Cake"].map((item, index) => (
                <button
                  key={index}
                  className="text-[#183942] text-center font-black text-[18px] cursor-pointer"
                  onClick={() => scrollToTopAndNavigate(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
          <div className="w-auto h-fit flex flex-row justify-between gap-2">
            <a className="transition-transform duration-500 ease-in-out cursor-pointer hover:scale-[1.1]">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 512 512"
                preserveAspectRatio="xMidYMid meet"
                opacity="0.5"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#183942"
                  strokeWidth="2"
                >
                  <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -386 -193 -732 -501 -982 -872 -164 -244 -313 -599 -371 -882 -43 -212 -51 -295 -51 -530 0 -312 34 -526 126 -805 53 -159 173 -417 255 -545 205 -322 503 -620 824 -824 100 -64 351 -186 475 -232 129 -47 369 -107 515 -129 485 -70 1003 9 1448 221 286 136 489 280 718 508 217 218 355 408 488 677 309 621 350 1331 115 1993 -47 133 -163 373 -235 486 -211 333 -537 653 -856 843 -413 246 -871 371 -1338 365 -74 0 -151 -3 -170 -5z m406 -244 c677 -66 1280 -416 1681 -977 312 -437 465 -1010 412 -1548 -51 -529 -273 -1010 -642 -1391 -173 -179 -331 -301 -537 -417 -696 -390 -1537 -394 -2240 -10 -207 113 -343 215 -526 398 -229 230 -378 447 -497 728 -249 582 -247 1241 4 1825 121 283 287 521 518 745 329 320 718 525 1161 612 229 45 448 57 666 35z" />
                  <path d="M1305 3601 c-85 -21 -166 -84 -205 -160 -11 -22 -24 -71 -30 -108 -13 -90 -13 -1456 0 -1546 6 -37 19 -86 30 -108 27 -52 89 -111 148 -140 l47 -24 1265 0 1265 0 50 25 c100 49 158 132 175 247 5 39 10 364 10 773 0 409 -5 734 -10 773 -17 115 -75 198 -175 247 l-50 25 -1245 2 c-685 0 -1258 -2 -1275 -6z m2304 -238 c0 -10 -1039 -928 -1049 -928 -10 0 -1048 918 -1049 928 -1 4 472 7 1049 7 578 0 1050 -3 1049 -7z m-1876 -522 c207 -184 376 -335 374 -336 -1 -1 -175 -137 -387 -302 -212 -164 -391 -303 -397 -307 -10 -6 -13 128 -13 654 l0 661 23 -18 c12 -10 192 -168 400 -352z m2075 -622 l-3 -330 -145 112 c-80 63 -258 202 -397 310 l-251 196 396 352 397 351 3 -330 c1 -182 1 -479 0 -661z m-1417 38 c107 -95 125 -107 169 -107 44 0 62 12 169 107 51 45 96 83 100 83 6 0 716 -551 741 -576 12 -12 -116 -14 -1010 -14 -895 0 -1022 2 -1010 15 24 23 734 575 741 575 4 0 49 -38 100 -83z" />
                </g>
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
                  opacity="0.5"
                  d="M44 22.5C44 34.3741 34.3741 44 22.5 44C10.6259 44 1 34.3741 1 22.5C1 10.6259 10.6259 1 22.5 1C34.3741 1 44 10.6259 44 22.5Z"
                  stroke="#183942"
                  strokeWidth="2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.2659 17.3431C29.951 17.5244 30.4906 18.0559 30.6745 18.7295C31.0159 19.9588 30.9999 22.522 30.9999 22.522C30.9999 22.522 30.9975 25.071 30.6665 26.2996C30.4803 26.9724 29.9382 27.5031 29.2539 27.6836C28.002 28.0055 22.9935 28 22.9935 28C22.9935 28 17.9987 27.9945 16.734 27.6569C16.0481 27.4756 15.5084 26.9441 15.3246 26.2713C14.9968 25.0545 15 22.4921 15 22.4921C15 22.4921 15.0032 19.9423 15.3334 18.713C15.5188 18.0402 16.0736 17.4969 16.7452 17.3172C17.9979 16.9945 23.0055 17 23.0055 17C23.0055 17 28.014 17.0055 29.2659 17.3431ZM21.4075 20.1441L21.4035 24.8543L25.5701 22.5031L21.4075 20.1441Z"
                  fill="#183942"
                />
              </svg>
            </a>
            <a
              className="transition-transform duration-500 ease-in-out cursor-pointer hover:scale-[1.1]"
              href="https://github.com/LHSang6403/StarBug-cafeteria-management-system"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="none"
                viewBox="0 0 512 512"
              >
                <path
                  opacity="0.5"
                  clipRule="evenodd"
                  d="M192,368.004c0-8.844,7.156-16,16-16s16,7.156,16,16  s-7.156,16-16,16S192,376.848,192,368.004L192,368.004z M349.328,494.16c-4.266,1.219-8.672,2.094-13.328,2.094  c-26.516,0-48-21.484-48-48v-58.188c0-20.094,12.898-37.156,30.797-43.438C353.164,335.082,384,306.082,384,272.004V240  c0-15.164-6.188-29.285-16-41.367V162.5c0-17.668-14.328-23.719-32-13.496l-24.516,14.176C303.633,161.145,295.703,160,288,160h-64  c-7.699,0-15.633,1.145-23.484,3.18L176,149.004c-17.668-10.223-32-4.172-32,13.496v36.133c-9.812,12.082-16,26.203-16,41.367  v32.004c0,23.281,14.488,44.188,34.578,58.812l-0.02,0.031c4.172,2.859,6.945,7.688,6.945,13.156c0,8.828-7.176,16-16,16  c-4.52,0-8.574-1.891-11.48-4.906C115.004,334.629,96,305.035,96,272.004V240c0-18.523,6.012-35.977,16-51.375v-47.633  c0-35.336,28.645-47.438,64-26.996l27.461,15.887C210.309,128.719,217.172,128,224,128h64c6.828,0,13.688,0.719,20.539,1.883  L336,113.996c35.359-20.441,64-8.34,64,26.996v47.633c9.984,15.398,16,32.852,16,51.375v32.004  c0,47.609-39.25,88.141-85.531,104.359c-0.055,0.047-0.109,0.172-0.188,0.188c-6.016,2.312-10.281,8.125-10.281,14.953v56.75  c0,8.844,7.156,16,16,16c1.336,0,2.562-0.375,3.797-0.688C421.969,430.41,480,350.066,480,256c0-123.715-100.281-224-224-224  C132.285,32,32,132.285,32,256c0,97.41,62.254,180.066,149.121,210.895c0.445,0.047,0.852,0.234,1.316,0.234  c5.277,0,9.562-4.297,9.562-9.562c0-5.281-4.285-9.562-9.562-9.562c-0.113,0-0.113-0.094-0.191-0.141  c-53.16-1.422-53.219-63.859-70.246-63.859c-8.844,0-16-7.156-16-16s7.156-16,16-16c1.688,0,4.207,0,7.988,0  c32.02,0,27.445,64,72.012,64c17.668,0,32,14.328,32,32v28c0,15.453-12.527,28-28.004,28c-1.688,0-3.277-0.344-4.887-0.656  C81.203,474.613,0,374.926,0,256C0,114.617,114.617,0,256,0s256,114.617,256,256C512,364.41,444.508,456.848,349.328,494.16  L349.328,494.16z"
                  fill="#183942"
                  fillRule="evenodd"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
