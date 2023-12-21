import { Link, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { useDispatch } from "react-redux";
import { toggleAvatarLogin } from '../../reduxActions/popUp';

const ManagerPopUp = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(toggleAvatarLogin(false));
    navigate("/");
  } 

  return (
    <div className="w-[305px] h-fit flex flex-col bg-[#F4F2EC] mx-auto px-[8px] py-[10px] rounded-[8px] shadow-xl">
      <div className="h-[80px] py-[16px] pt-[18px] ml-[6px] border-b-[0.7px] border-solid border-[#CECECE]">
        <div className="w-[274px] pr-[68px] pb-[18px] gap-[12px] flex items-center flex-row">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="./assets/StarBug_files/StarBug_square.jpg"
          ></img>
          <div className="w-full flex flex-col">
            <div className="w-fit h-[22px] text-[#0E3746] font-medium text-[18px]">
              Full name
            </div>
            <div className="w-fit h-[22px] text-[16px] font-medium text-[#999]">
              Gmail here
            </div>
          </div>
        </div>
      </div>

      <div className="h-[60px] flex flex-row py-[15px] gap-[12px] items-center my-0 hover:bg-[#DEDAD0] hover:rounded-[14px]">
        <div className="pl-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.75 2.75C6.75 2.33579 6.41421 2 6 2C5.58579 2 5.25 2.33579 5.25 2.75V4.00879C3.43368 4.13698 2 5.65106 2 7.5V8.5C2 10.3489 3.43368 11.863 5.25 11.9912L5.25 17.25C5.25 17.6642 5.58579 18 6 18C6.41421 18 6.75 17.6642 6.75 17.25L6.75 11.9912C8.56632 11.863 10 10.3489 10 8.5V7.5C10 5.65106 8.56632 4.13698 6.75 4.00879V2.75ZM8.5 7.5C8.5 6.39543 7.60457 5.5 6.5 5.5H5.5C4.39543 5.5 3.5 6.39543 3.5 7.5V8.5C3.5 9.60457 4.39543 10.5 5.5 10.5H6.5C7.60457 10.5 8.5 9.60457 8.5 8.5V7.5Z"
              fill="#0E3746"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.25 2.75L13.25 8.00879C11.4337 8.13698 10 9.65106 10 11.5V12.5C10 14.3489 11.4337 15.863 13.25 15.9912L13.25 17.25C13.25 17.6642 13.5858 18 14 18C14.4142 18 14.75 17.6642 14.75 17.25L14.75 15.9912C16.5663 15.863 18 14.3489 18 12.5V11.5C18 9.65106 16.5663 8.13698 14.75 8.00879L14.75 2.75C14.75 2.33579 14.4142 2 14 2C13.5858 2 13.25 2.33579 13.25 2.75ZM13.5 9.5C12.3954 9.5 11.5 10.3954 11.5 11.5V12.5C11.5 13.6046 12.3954 14.5 13.5 14.5H14.5C15.6046 14.5 16.5 13.6046 16.5 12.5V11.5C16.5 10.3954 15.6046 9.5 14.5 9.5H13.5Z"
              fill="#0E3746"
            />
          </svg>
        </div>
        <div className="text-[#0E3746] font-medium text-[20px]">
        <Link to="/setting">Profile Settings</Link>
        </div>
      </div>
      <div className="h-[60px] flex flex-row py-[15px] gap-[12px] items-center my-0 hover:bg-[#DEDAD0] hover:rounded-[14px]">
        <div className="pl-[14px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1565 9.34155H5.7002V10.3704H15.1565V9.34155Z"
              fill="#0E3746"
            />
            <path
              d="M15.1565 5.88477H5.7002V6.91357H15.1565V5.88477Z"
              fill="#0E3746"
            />
            <path
              d="M15.1565 12.8395H5.7002V13.8683H15.1565V12.8395Z"
              fill="#0E3746"
            />
            <path
              d="M3.06425 0.0411524L2.99835 0.123457L0 3.86831L0.329489 4.27984L0.362438 4.32099L0.428336 4.40329L0.494234 4.4856L2.76771 1.60494V14.4033H3.22899H3.29489H3.36079H3.45964V1.60494L5.73311 4.4856L5.89786 4.27984L6.0626 4.07407L6.09555 4.03292L6.16145 3.95062L6.22735 3.86831L3.13015 0L3.06425 0.0411524Z"
              fill="#0E3746"
            />
            <path
              d="M19.868 15.9259L19.8351 15.8848L19.6703 15.7201L19.5715 15.5555L19.5385 15.5144L17.2321 18.3539V5.55554H17.0674H17.0015H16.639H16.5402V18.3539L14.2667 15.5144L14.1349 15.6378L14.102 15.7201L13.7725 16.0905L16.7708 19.8354L16.8367 19.9177L16.9026 20L16.9685 19.9177L19.9998 16.0905L19.868 15.9259Z"
              fill="#0E3746"
            />
          </svg>
        </div>
        <div className="text-[#0E3746] font-medium text-[20px]">
        <Link to="/order-management">Order Manager</Link>
        </div>
      </div>
      <div className="h-[60px] flex flex-row py-[15px] gap-[12px] items-center my-0 hover:bg-[#DEDAD0] hover:rounded-[14px]">
        <div className="pl-[14px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1415_3959)">
              <path
                d="M9.99968 8.75002C9.17559 8.75002 8.37001 8.50565 7.6848 8.04781C6.9996 7.58997 6.46554 6.93923 6.15018 6.17787C5.83481 5.41651 5.7523 4.57873 5.91307 3.77048C6.07384 2.96223 6.47068 2.2198 7.0534 1.63708C7.63612 1.05436 8.37855 0.657522 9.1868 0.49675C9.99505 0.335978 10.8328 0.418492 11.5942 0.733857C12.3555 1.04922 13.0063 1.58327 13.4641 2.26848C13.922 2.95368 14.1663 3.75927 14.1663 4.58336C14.1663 5.68842 13.7274 6.74823 12.946 7.52963C12.1646 8.31103 11.1047 8.75002 9.99968 8.75002ZM9.99968 2.08336C9.50522 2.08336 9.02187 2.22998 8.61075 2.50468C8.19963 2.77938 7.8792 3.16983 7.68998 3.62665C7.50076 4.08346 7.45125 4.58613 7.54771 5.07108C7.64418 5.55603 7.88228 6.00149 8.23191 6.35112C8.58154 6.70075 9.027 6.93886 9.51195 7.03532C9.9969 7.13178 10.4996 7.08227 10.9564 6.89305C11.4132 6.70384 11.8036 6.3834 12.0784 5.97228C12.3531 5.56116 12.4997 5.07781 12.4997 4.58336C12.4997 3.92031 12.2363 3.28443 11.7674 2.81559C11.2986 2.34675 10.6627 2.08336 9.99968 2.08336Z"
                fill="#0E3746"
              />
              <path
                d="M17.5003 19.5833H2.50033C2.27931 19.5833 2.06735 19.4955 1.91107 19.3392C1.75479 19.183 1.66699 18.971 1.66699 18.75V16.25C1.66699 14.4819 2.36937 12.7862 3.61961 11.5359C4.86986 10.2857 6.56555 9.58331 8.33366 9.58331H11.667C13.4351 9.58331 15.1308 10.2857 16.381 11.5359C17.6313 12.7862 18.3337 14.4819 18.3337 16.25V18.75C18.3337 18.971 18.2459 19.183 18.0896 19.3392C17.9333 19.4955 17.7213 19.5833 17.5003 19.5833ZM3.33366 17.9166H16.667V16.25C16.667 14.9239 16.1402 13.6521 15.2025 12.7144C14.2648 11.7768 12.9931 11.25 11.667 11.25H8.33366C7.00758 11.25 5.73581 11.7768 4.79813 12.7144C3.86044 13.6521 3.33366 14.9239 3.33366 16.25V17.9166Z"
                fill="#0E3746"
              />
            </g>
            <defs>
              <clipPath id="clip0_1415_3959">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-[#0E3746] font-medium text-[20px]">
        <Link to="/staff-management">Staff Manager</Link>
        </div>
      </div>
      <div className="h-[60px] flex flex-row py-[15px] gap-[12px] items-center my-0 border-b-[0.7px] border-solid border-[#CECECE] hover:bg-[#DEDAD0] hover:rounded-[14px]">
        <div className="pl-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.12318 7.95119C4.52295 4.95005 6.81842 2.15002 9.87899 2.15002H10.4998C13.1864 2.15002 15.3498 4.35886 15.3498 7.02935C15.3498 8.52272 14.6614 9.95117 13.4774 10.872L10.9077 12.8707C10.8711 12.8991 10.8498 12.9428 10.8498 12.9891V13.5C10.8498 13.9695 10.4692 14.35 9.99978 14.35C9.53033 14.35 9.14978 13.9695 9.14978 13.5V12.9891C9.14978 12.4182 9.41335 11.8793 9.86399 11.5288L12.4337 9.53015C13.1984 8.93537 13.6498 8.0047 13.6498 7.02935C13.6498 5.28156 12.2314 3.85002 10.4998 3.85002H9.87899C7.8912 3.85002 6.40032 5.6686 6.79016 7.61779L6.83327 7.83333C6.92533 8.29365 6.6268 8.74145 6.16647 8.83352C5.70615 8.92558 5.25835 8.62705 5.16628 8.16672L5.12318 7.95119Z"
              fill="#0E3746"
            />
            <circle
              cx="9.9998"
              cy="16.7"
              r="0.6"
              stroke="#0E3746"
              strokeWidth="1.2"
            />
          </svg>
        </div>
        <div className="text-[#0E3746] font-medium text-[20px]">
          Help Center
        </div>
      </div>
      <div className="h-[70px] flex flex-row gap-[14px] py-[16px] items-center hover:bg-[#DEDAD0] hover:rounded-[14px]">
        <div className="pl-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13 10.7C13.3866 10.7 13.7 10.3866 13.7 10C13.7 9.6134 13.3866 9.3 13 9.3L13 10.7ZM2.50503 9.50502C2.23166 9.77839 2.23166 10.2216 2.50503 10.495L6.9598 14.9497C7.23316 15.2231 7.67638 15.2231 7.94975 14.9497C8.22311 14.6764 8.22311 14.2332 7.94975 13.9598L3.98995 10L7.94975 6.0402C8.22312 5.76683 8.22312 5.32362 7.94975 5.05025C7.67638 4.77688 7.23317 4.77688 6.9598 5.05025L2.50503 9.50502ZM13 9.3L3 9.3L3 10.7L13 10.7L13 9.3Z"
              fill="#0E3746"
            />
            <path
              d="M10 6.5V5.5C10 4.11929 11.1193 3 12.5 3H14.5C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H12.5C11.1193 17 10 15.8807 10 14.5V14"
              stroke="#0E3746"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-[#0E3746] font-medium text-[20px]"><button onClick={handleLogout}>Sign Out</button></div>
      </div>
    </div>
  );
};

export default ManagerPopUp;
