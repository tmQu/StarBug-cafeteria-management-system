const LoginButton = (props) => {
  const { onClick } = props;

  return (
    <button
<<<<<<< HEAD:src/front-end/src/components/buttons/loginButton.jsx
      className="w-[100px] h-[40px] p-[10px] pt-[13px] bg-[#F4F2EC] justify-center items-center flex
      text-[#0D3745] font-bold rounded-lg 
      hover:bg-[#E5E5E5] transition-transform duration-500 ease-in-out hover:scale-[1.01]"
=======
      className="w-[100px] h-[40px] p-[10px] bg-[#F4F2EC] justify-center items-center flex
      text-[#0D3745] font-bold rounded-lg ml-[20px]
      hover:bg-[#E5E5E5] transition-transform duration-500 ease-in-out hover:scale-[1.02]"
>>>>>>> 85ded07 (Chuong - Header fix commit):src/front-end/src/components/loginButton.jsx
      onClick={onClick}
    >
      Login
    </button>
  );
};

export default LoginButton;
