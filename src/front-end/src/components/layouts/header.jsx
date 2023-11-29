import SearchBar from "./searchBar";
import CartButton from "../buttons/cartButton";
import LoginButton from "../buttons/loginButton";
import Logo from "../logo";

const Header = () => {
  const handleLogin = () => {
    alert("Login");
  };

  return (
    <div className="w-screen pt-2 content-center h-full grid-in-header bg-[#BE2623]">
      <div className="w-[1120px] h-[40px] mx-auto flex flex-row justify-between">
        <div className="w-fit flex flex-row gap-2">
          <div>
            <Logo />
          </div>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="w-fit flex flex-row gap-2">
          <div>
            <CartButton />
          </div>
          <div>
            <LoginButton onClick={() => handleLogin()} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
