
const LargeButton = ({ name = "LOGIN", type = "text", onClick = () => {} }) => {
    return (
        <div
            className="w-[300px] h-[44px] flex flex-inline justify-center items-center rounded-[4px] bg-[#FFF] shadow-xl
            hover:scale-105 transition-transform duration-500 ease-in-out"
        >
            <button type={type} className="w-fit h-full flex justify-center items-center text-[#0E3746] text-[20px] font-Source-Sans-3 font-bold" onClick={onClick}>
                {name}
            </button>
        </div>
    )
}

export default LargeButton;