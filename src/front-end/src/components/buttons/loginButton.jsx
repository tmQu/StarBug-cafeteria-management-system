const LoginButton = (props) => {
  const { onClick } = props;

  return (
    <button
      className="w-[100px] sm:w-[60px] h-[40px] p-[10px] bg-[#F4F2EC] justify-center items-center flex
      text-[#0D3745] font-bold rounded-lg ml-[20px] sm:text-sm
      hover:bg-[#E5E5E5] transition-transform duration-500 ease-in-out hover:scale-[1.02]"
      onClick={onClick}
    >
      Login
    </button>
  );
};

export default LoginButton;
