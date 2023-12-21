const searchButtonMobile = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };

  return (
    <button type="button" onClick={onClickHandler}>
      <img
        className="h-7 w-7 mt-0.5"
        alt="search-icon"
        src="./assets/white-search-icon.png"
      ></img>
    </button>
  );
};

export default searchButtonMobile;
