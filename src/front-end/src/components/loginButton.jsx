const LoginButton = (props) => {
  const { onClick } = props;

  return (
    <button
      className="w-[140px] h-[50px] bg-[#F4F2EC] 
      text-[#0D3745] font-semibold rounded-lg ml-[20px]
      hover:bg-[#E5E5E5] transition-transform duration-500 ease-in-out hover:scale-[1.02]"
      onClick={onClick}
    >
      Login
    </button>
  );
};

export default LoginButton;
