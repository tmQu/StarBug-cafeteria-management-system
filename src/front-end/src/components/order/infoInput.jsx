import React, { useState } from "react";

const InfoInput = () => {
  return (
    <div className="h-full flex-grow relative">
      <div className="pb-2 pt-4">
        <input
          className="w-[473px] sm:w-full h-[45px] px-4 pt-0.5 bg-transparent border-2 border-[#0E3746] rounded placeholder:text-[#0E3746]"
          placeholder="Full Name"
        />
      </div>

      <div className="py-2">
        <input
          className="w-[473px] sm:w-full h-[45px] px-4 pt-0.5 bg-transparent border-2 border-[#0E3746] rounded placeholder:text-[#0E3746]"
          placeholder="Phone Number"
        />
      </div>

      <div className="py-2">
        <input
          className="w-[473px] sm:w-full h-[45px] px-4 pt-0.5 bg-transparent border-2 border-[#0E3746] rounded placeholder:text-[#0E3746]"
          placeholder="Delivery note"
        />
      </div>
    </div>
  );
};

export default InfoInput;
