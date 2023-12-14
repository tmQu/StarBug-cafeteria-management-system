import Topping from "./topping";

const ToppingSelect = () => {
  return (
    <div className="w-400">
      <div className="flex items-center bg-[#D9D9D9] h-[40px] text-[#666] font-Source-Sans-3 text-[20px] font-normal pl-3">
        Topping
      </div>
      <div className="flex flex-col justify-center items-center bg-[#F3F2ED]">
        <Topping />
        <div className="w-[340px] stroke-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="342"
            height="2"
            viewBox="0 0 342 2"
            fill="none"
          >
            <path d="M1 1H341" stroke="#D9D9D9" strokeLinecap="round" />
          </svg>
        </div>
        <Topping />
        <div className="w-[340px] stroke-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="342"
            height="2"
            viewBox="0 0 342 2"
            fill="none"
          >
            <path d="M1 1H341" stroke="#D9D9D9" strokeLinecap="round" />
          </svg>
        </div>
        <Topping />
        <div className="w-[340px] stroke-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="342"
            height="2"
            viewBox="0 0 342 2"
            fill="none"
          >
            <path d="M1 1H341" stroke="#D9D9D9" strokeLinecap="round" />
          </svg>
        </div>
        <Topping />
      </div>
    </div>
  );
};

export default ToppingSelect;
