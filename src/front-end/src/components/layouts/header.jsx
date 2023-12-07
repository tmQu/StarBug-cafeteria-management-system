import SearchBar from "./searchBar";
import CartButton from "../buttons/cartButton";
import LoginButton from "../buttons/loginButton";
import Logo from "../logo";
import SearchButtonMobile from "../../responsive/searchButton";
import MenuButtonMobile from "../../responsive/menuButton";

const Header = () => {
  const handleLogin = () => {
    alert("Login");
  };

  return (
    <div className="w-screen pt-2 content-center h-full grid-in-header bg-[#BE2623]">
      <div className="w-[1120px] xl:w-screen h-[40px] mx-auto xl:px-4 sm:px-2 flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <div className="hidden sm:block">
            <MenuButtonMobile onClick={() => {}} />
          </div>
          <Logo />
        </div>
        <div className="sm:hidden">
          <SearchBar />
        </div>

        <div className="flex flex-row gap-3">
          <div className="hidden sm:block">
            <SearchButtonMobile onClick={() => {}} />
          </div>
          <CartButton />
          <div className="sm:hidden">
            <LoginButton onClick={() => handleLogin()} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
