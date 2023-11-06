import SearchBar from "./searchBar";
import CartButton from "./cartButton";
import { LoginButton as Login } from "./button";
import Logo from "./logo";

const Header = () => {
  // call search bar and some reusable button for login
  // create circle button for cart icon

  const handleLogin = () => {
    alert("Login");
  }

  return (
    <div className="w-screen pt-2 h-full grid-in-header bg-[#be2623] bg-slate-300">
      <div className="w-[1120px] mx-auto flex flex-row justify-between">
        <div className="w-fit flex flex-row gap-2">
          <div><Logo /></div>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="w-fit flex flex-row gap-2">
          <div>
            <CartButton />
          </div>
          <div>
            <Login onClick={() => handleLogin()} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
