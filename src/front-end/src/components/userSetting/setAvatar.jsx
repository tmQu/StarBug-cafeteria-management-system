import useAuth from "../../hooks/useAuth";

const SetAvatar = () => {
  const { auth } = useAuth();

  const handleAvatar = () => {
    console.log("Change avatar popup to change avatar");
  };

  return (
    <div className="w-full mx-auto">
      <div className="w-full flex mx-auto items-center justify-between">
        <div className="flex items-center">
          <img
            src={auth.avatar !== "" ? auth.avatar : "./assets/noname.png"}
            alt="avatar"
            className="w-[100px] h-[100px] rounded-full border-solid border-[#DADADA] border-8"
          />
          <span className="font-bold text-2xl text-[#0E3746] ml-4">
            Setting
          </span>
        </div>
        <button
          className="w-36 h-10 bg-[#BE2623] text-[#F3F2ED] font-bold text-xl rounded-lg px-[30px] py-[10px]"
          onClick={handleAvatar()}
        >
          Upload new avatar
        </button>
      </div>
    </div>
  );
};

export default SetAvatar;
