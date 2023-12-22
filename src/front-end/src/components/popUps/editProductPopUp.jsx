import { useForm } from "react-hook-form";
import { Checkbox } from "@material-tailwind/react";
import { motion } from "framer-motion";

const EditProductPopUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-[400px] h-fit bg-[#F4F2EC] rounded-lg p-4 flex flex-col"
    >
      <span className="w-full text-[#BE2623] font-semibold flex flex-row justify-between">
        <h className="text-lg">PRODUCT EDIT</h>
        <img
          className="w-5 h-5"
          src="/assets/gray-close-icon.png"
          alt="Close"
        ></img>
      </span>
      <span className="w-full text-center my-2 text-[#0E3746] font-semibold">
        PRODUCT INFORMATION
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="PRODUCT NAME"
          name="name"
          onChange={(e) => {}}
          required
        />
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="CATEGORY"
          name="category"
          onChange={(e) => {}}
          required
        />
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="PRICE"
          name="price"
          onChange={(e) => {}}
          required
        />
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="DESCRIPTION"
          name="description"
          onChange={(e) => {}}
          required
        />
        <button></button>
      </form>
      <span className="w-full text-center my-2 text-[#0E3746] font-semibold">
        BEST SELLER
      </span>
      <div className="w-full h-fit text-[#0E3746] flex flex-row gap-6 justify-center items-center">
        <div className="w-20 flex flex-row items-center">
          <Checkbox className="bg-[#F4F2EC]" /> <p className="pt-1">YES</p>
        </div>
        <div className="w-20 flex flex-row items-center">
          <Checkbox className="bg-[#F4F2EC]" /> <p className="pt-1">NO</p>
        </div>
      </div>
      <span className="w-full text-center my-2 text-[#0E3746] font-semibold">
        IMAGE
      </span>
      <div className="w-full flex flex-row gap-2 rounded-lg overflow-hidden">
        <div className="w-[50%] h-32 bg-[#BE2623]"></div>
        <div className="w-[50%] grid grid-cols-2 grid-rows-2 gap-2">
          <div className="bg-[#D9D9D9]"></div>
          <div className="bg-[#D9D9D9]"></div>
          <div className="bg-[#D9D9D9]"></div>
          <div className="bg-[#D9D9D9]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditProductPopUp;
