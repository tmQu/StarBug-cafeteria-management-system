const SetAvatar = ({ user }) => {

  const handleAvatar = () => {
    console.log("Change avatar popup to change avatar");
  };

  return (
    <div className="w-[1050px] mx-auto pb-[25px]">
      <div className="w-[995px] flex mx-auto items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://i.imgur.com/1qB7B9F.png" // {user.avatar} here
            alt="avatar"
            className="w-[200px] h-[200px] rounded-full border-solid border-[#DADADA] border-8"
          />
          <span className="font-bold text-[48px] text-[#0E3746] ml-4">
            Setting
          </span>
        </div>
        <button
          className="w-[338px] h-[60px] bg-[#BE2623] text-[#F3F2ED] font-bold text-[24px] rounded-lg px-[30px] py-[10px]"
          onClick={handleAvatar()}
        >
          Upload new avatar
        </button>
      </div>
    </div>
  );
};

export default SetAvatar;
