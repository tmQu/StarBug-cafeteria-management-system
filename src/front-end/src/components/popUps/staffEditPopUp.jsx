import { useForm } from "react-hook-form";

const StaffEditPopUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className="w-[400px] h-fit bg-[#F4F2EC] rounded-lg p-4 flex flex-col">
      <span className="w-full text-[#BE2623] font-semibold flex flex-row justify-between">
        <h className="text-lg">STAFF EDIT</h>
        <img
          className="w-5 h-5"
          src="/assets/gray-close-icon.png"
          alt="Close"
        ></img>
      </span>
      <span className="w-full text-center my-2 text-[#0E3746] font-semibold">
        STAFF INFORMATION
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="STAFF NAME"
          name="name"
          onChange={(e) => {}}
          required
        />
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="EMAIL"
          name="email"
          onChange={(e) => {}}
          required
        />
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="BIRTH DAY"
          name="birthday"
          onChange={(e) => {}}
          required
        />
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="BRANCH"
          name="branch"
          onChange={(e) => {}}
          required
        />
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="SENIORITY"
          name="seniority"
          onChange={(e) => {}}
          required
        />
      </form>
      <span className="w-full text-center my-2 text-[#0E3746] font-semibold">
        STAFF ACCOUNT
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="EMAIL"
          name="email"
          onChange={(e) => {}}
          required
        />
        <input
          className="border-[1px] border-[#0E3746] bg-[#F4F2EC] rounded-lg px-2 pb-1 pt-2 my-2 text-[#0E3746]"
          placeholder="PASSWORD"
          name="password"
          onChange={(e) => {}}
          required
        />
      </form>
    </div>
  );
};

export default StaffEditPopUp;
