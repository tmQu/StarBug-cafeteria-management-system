const ShowAllButton = ({ onClick, showAll }) => {
  return (
     <>
        <button className="w-[400px] sm:w-44 h-[50px] mx-auto rounded-md shadow-lg bg-[#E8E8E8] pt-0.5 flex items-center justify-center text-lg animate-item-show" onClick={onClick}>
          {showAll ? "Show all products" : "Minimize view"}
        </button>
     </>
  );
};

export default ShowAllButton;
