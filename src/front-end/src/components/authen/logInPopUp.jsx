import LargeButton from "../buttons/largeButton";

const SignInPopUp = () => {
    return (
        <div className="w-[380px] h-[270px] flex flex-col justify-center items-center rounded-[10px] bg-[#F4F2EC] shadow-xl mx-auto gap-[20px]">
            <div className="w-[300px] h-[45px] border border-solid border-[#0E3746] flex flex-row mx-auto justify-center items-center rounded-[5px]">
                <div className="w-[40px] h-[40px] flex justify-center items-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M16.9163 17.5V15.8333C16.9163 14.9493 16.5651 14.1014 15.94 13.4763C15.3149 12.8512 14.4671 12.5 13.583 12.5H6.91634C6.03229 12.5 5.18444 12.8512 4.55932 13.4763C3.9342 14.1014 3.58301 14.9493 3.58301 15.8333V17.5" stroke="#0E3746" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.2503 9.16667C12.0913 9.16667 13.5837 7.67428 13.5837 5.83333C13.5837 3.99238 12.0913 2.5 10.2503 2.5C8.40938 2.5 6.91699 3.99238 6.91699 5.83333C6.91699 7.67428 8.40938 9.16667 10.2503 9.16667Z" stroke="#0E3746" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="w-full h-full flex relative justify-center items-center">
                    <input
                        className="w-full text-[18px] font- font-Source-Sans-3 text-[#0E3746] bg-[#F4F2EC] placeholder:text-[#0E3746] outline-none"
                        placeholder="USERNAME/GMAIL"
                    />
                </div>
            </div>
            <div className="w-[300px] h-[45px] border border-solid border-[#0E3746] flex flex-row mx-auto justify-center items-center rounded-[5px]">
                <div className="w-[40px] h-[40px] flex justify-center items-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M16.0833 9.16663H4.41667C3.49619 9.16663 2.75 9.91282 2.75 10.8333V16.6666C2.75 17.5871 3.49619 18.3333 4.41667 18.3333H16.0833C17.0038 18.3333 17.75 17.5871 17.75 16.6666V10.8333C17.75 9.91282 17.0038 9.16663 16.0833 9.16663Z" stroke="#0E3746" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.08301 9.16663V5.83329C6.08301 4.72822 6.52199 3.66842 7.3034 2.88701C8.0848 2.10561 9.14461 1.66663 10.2497 1.66663C11.3547 1.66663 12.4146 2.10561 13.196 2.88701C13.9774 3.66842 14.4163 4.72822 14.4163 5.83329V9.16663" stroke="#0E3746" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="w-full h-full flex relative justify-center items-center">
                    <input
                        className="w-full text-[18px] font-extralight font-Source-Sans-3 text-[#0E3746] bg-[#F4F2EC] placeholder:text-[#0E3746] outline-none"
                        placeholder="PASSWORD"
                    />
                </div>
            </div>
            <div className="w-[300px] h-[44px] flex justify-center items-center">
                <LargeButton name="LOGIN" />
            </div>
            <div className="w-[300px] flex flex-row">
                <button
                    className="w-fit h-[25px] text-[#0E3746] text-[20px] font-normal flex items-center mr-auto hover:scale-105 transition-transform duration-500 ease-in-out"
                    href="#"
                >
                    Sign up
                </button>
                <button
                    className="w-fit h-[25px] text-[#0E3746] text-[20px] font-normal flex items-center ml-auto hover:scale-105 transition-transform duration-500 ease-in-out"
                    href="#"
                >
                    Forgot password?
                </button>
            </div>
        </div>
    )
}

export default SignInPopUp;