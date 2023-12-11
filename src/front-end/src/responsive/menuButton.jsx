const MenuButtonMobile = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };
  return (
    <button type="button" onClick={onClickHandler}>
      <img
        className="h-6 w-6 mt-1"
        alt="search-icon"
        src="./assets/menu-icon.png"
      ></img>
    </button>
  );
};

export default MenuButtonMobile;
