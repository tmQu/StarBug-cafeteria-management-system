import { Link, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { useDispatch } from "react-redux";
import { toggleAvatarLogin } from "../../reduxActions/popUp";
import useAuth from "../../hooks/useAuth";

const UserPopUp = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const dispatch = useDispatch();
  const { auth } = useAuth();

  const handleLogout = async () => {
    await logout();
    dispatch(toggleAvatarLogin(false));
    navigate("/");
  };

  return (
    <div className="w-[305px] h-fit flex flex-col bg-[#F4F2EC] mx-auto px-[8px] py-[10px] rounded-[8px] shadow-xl">
      <div className="h-[80px] py-[16px] pt-[18px] ml-[6px] border-b-[0.7px] border-solid border-[#CECECE] hover:cursor-pointer">
        <div className="w-[274px] pr-[68px] pb-[18px] gap-[12px] flex items-center flex-row">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={auth.avatar || "./assets/noname.png"}
            alt="Avatar"
          ></img>
          <div className="w-full flex flex-col">
            <div className="w-fit h-[22px] text-[#0E3746] font-medium text-[18px]">
              {auth.name || "FULLNAME"}
            </div>
            <div className="w-fit h-[22px] text-[16px] font-medium text-[#999]">
              {auth.email}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60px] flex flex-row py-[15px] gap-[12px] items-center my-0 hover:cursor-pointer">
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
      <div className="h-[60px] flex flex-row py-[15px] gap-[12px] items-center my-0 hover:cursor-pointer">
        <div className="pl-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.8438 16.25C14.4986 16.25 14.2188 16.5298 14.2188 16.875V18.4375H1.71875V1.5625H14.2188V1.875C14.2188 2.22015 14.4986 2.5 14.8438 2.5C15.1889 2.5 15.4688 2.22015 15.4688 1.875V0.9375C15.4688 0.592346 15.1889 0.3125 14.8438 0.3125H1.09375C0.748596 0.3125 0.46875 0.592346 0.46875 0.9375V19.0625C0.46875 19.4077 0.748596 19.6875 1.09375 19.6875H14.8438C15.1889 19.6875 15.4688 19.4077 15.4688 19.0625V16.875C15.4688 16.5298 15.1889 16.25 14.8438 16.25Z"
              fill="#0E3746"
            />
            <path
              d="M13.5938 3.4375C10.3198 3.4375 7.65625 6.10107 7.65625 9.375C7.65625 12.6489 10.3198 15.3125 13.5938 15.3125C16.8677 15.3125 19.5312 12.6489 19.5312 9.375C19.5312 6.10107 16.8677 3.4375 13.5938 3.4375ZM13.5938 14.0625C11.0089 14.0625 8.90625 11.9597 8.90625 9.375C8.90625 6.79031 11.0089 4.6875 13.5938 4.6875C16.1786 4.6875 18.2812 6.79031 18.2812 9.375C18.2812 11.9597 16.1786 14.0625 13.5938 14.0625Z"
              fill="#0E3746"
            />
            <path
              d="M14.4211 9.26087L15.3638 7.84668C15.5552 7.55951 15.4777 7.17148 15.1905 6.97998C14.903 6.78787 14.5151 6.866 14.3238 7.15332L13.0738 9.02832C12.8983 9.29138 12.9471 9.64386 13.187 9.84955L15.3745 11.7245C15.4923 11.8256 15.637 11.875 15.781 11.875C15.9571 11.875 16.1323 11.801 16.2559 11.6568C16.4805 11.3947 16.4503 11.0001 16.1881 10.7755L14.4211 9.26087Z"
              fill="#0E3746"
            />
            <path
              d="M3.59375 6.875H5.78125C6.1264 6.875 6.40625 6.59515 6.40625 6.25C6.40625 5.90485 6.1264 5.625 5.78125 5.625H3.59375C3.2486 5.625 2.96875 5.90485 2.96875 6.25C2.96875 6.59515 3.2486 6.875 3.59375 6.875Z"
              fill="#0E3746"
            />
            <path
              d="M3.59375 9.375H4.53125C4.8764 9.375 5.15625 9.09515 5.15625 8.75C5.15625 8.40485 4.8764 8.125 4.53125 8.125H3.59375C3.2486 8.125 2.96875 8.40485 2.96875 8.75C2.96875 9.09515 3.2486 9.375 3.59375 9.375Z"
              fill="#0E3746"
            />
            <path
              d="M3.59375 11.875H5.15625C5.5014 11.875 5.78125 11.5952 5.78125 11.25C5.78125 10.9048 5.5014 10.625 5.15625 10.625H3.59375C3.2486 10.625 2.96875 10.9048 2.96875 11.25C2.96875 11.5952 3.2486 11.875 3.59375 11.875Z"
              fill="#0E3746"
            />
            <path
              d="M3.59375 14.375H7.34375C7.6889 14.375 7.96875 14.0952 7.96875 13.75C7.96875 13.4048 7.6889 13.125 7.34375 13.125H3.59375C3.2486 13.125 2.96875 13.4048 2.96875 13.75C2.96875 14.0952 3.2486 14.375 3.59375 14.375Z"
              fill="#0E3746"
            />
          </svg>
        </div>
        <div className="text-[#0E3746] font-medium text-[20px]">
          <Link to="/order-history">Order History</Link>
        </div>
      </div>
      <div className="h-[60px] flex flex-row py-[15px] gap-[12px] items-center my-0 border-b-[0.7px] border-solid border-[#CECECE] hover:cursor-pointer">
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
      <div className="h-[70px] flex flex-row gap-[14px] py-[16px] items-center">
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
        <div className="text-[#0E3746] font-medium text-[20px]">
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default UserPopUp;
