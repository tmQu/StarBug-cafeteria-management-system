import SearchBar from "./searchBar";

const Header = () => {
  // call search bar and some reusable button for login
  // create circle button for cart icon
  return (
    <div className="w-screen pt-4 h-full grid-in-header  bg-[#BE2623]">
      <div className="w-[1120px] mx-auto flex flex-row justify-between">
        <div className="w-fit flex flex-row gap-2">
          <div>Logo</div>
          <div>StarBug</div>
        </div>
        <div>
          <SearchBar/>
        </div>
        <div className="w-fit flex flex-row gap-2">
          <div>Cart button</div>
          <div>Login button</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
