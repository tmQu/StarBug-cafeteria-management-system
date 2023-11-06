const ShowAllButton = (props) => {
  const { onClick } = props;
  return (
    <div className="w-[460px] h-[64px] mx-auto bg-[#E8E8E8] flex items-center justify-center text-xl">
      <button onClick={onClick}>Show all products</button>
    </div>
  );
};

export default ShowAllButton;
