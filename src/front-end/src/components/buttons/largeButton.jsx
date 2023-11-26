
const LargeButton = ({ name = "LOGIN" }) => {
    return (
        <div
            className="w-[300px] h-[44px] flex flex-inline justify-center items-center rounded-[4px] bg-[#FFF] shadow-xl
            hover:scale-110 transition-transform duration-500 ease-in-out"
        >
            <button className="w-fit h-full flex justify-center items-center text-[#0E3746] text-[20px] font-Source-Sans-3 font-bold">
                {name}
            </button>
        </div>
    )
}

export default LargeButton;