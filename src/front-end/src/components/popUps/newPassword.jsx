import LargeButton from "../buttons/largeButton";

const NewPassword = () => {
    return (
        <div className="w-[380px] h-[270px] flex flex-col justify-center items-center rounded-[10px] bg-[#F4F2EC] shadow-xl mx-auto gap-[20px]">
            <div className="w-[24px] h-[24px] -mt-6 mr-auto pl-3">
                <button className="hover:scale-110 transition-transform duration-500 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07996" stroke="#0E3746" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
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
                        placeholder="CONFIRM"
                    />
                </div>
            </div>
            <div className="w-[300px] h-[44px] flex justify-center items-center">
                <LargeButton name="CONFIRM" />
            </div>
        </div>
    )
}

export default NewPassword;