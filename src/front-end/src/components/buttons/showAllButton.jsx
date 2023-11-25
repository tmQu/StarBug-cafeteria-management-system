const ShowAllButton = (props) => {
  const { onClick } = props;
  return (
    <div className="w-[400px] h-[50px] mx-auto rounded-md shadow-lg bg-[#E8E8E8] pt-0.5 flex items-center justify-center text-lg animate-item-show">
      <button onClick={onClick}>Show all products</button>
    </div>
  );
};

export default ShowAllButton;
