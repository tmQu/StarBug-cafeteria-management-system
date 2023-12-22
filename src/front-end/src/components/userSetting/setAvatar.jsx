import useAuth from "../../hooks/useAuth";

const SetAvatar = () => {
  const { auth } = useAuth();

  const handleAvatar = () => {
    console.log("Change avatar popup to change avatar");
  };

  return (
    <div className="w-full mx-auto">
      <span className="w-fit font-bold hidden sm:block mb-2 mx-auto text-2xl text-[#0E3746]">
        Setting
      </span>
      <div className="w-full flex flex-row mx-auto items-center justify-between">
        <div className="flex items-center">
          <img
            src={auth.avatar !== "" ? auth.avatar : "./assets/noname.png"}
            alt="avatar"
            className="w-[100px] h-[100px] rounded-full border-solid border-[#DADADA] border-8"
          />
          <span className="font-bold sm:hidden text-2xl text-[#0E3746] ml-4">
            Setting
          </span>
        </div>
        <button
          className="w-32 h-8 bg-[#BE2623] text-[#F3F2ED] text-lg rounded-lg px-[30px] pt-1"
          onClick={handleAvatar()}
        >
          Upload new avatar
        </button>
      </div>
    </div>
  );
};

export default SetAvatar;
