const Item = (props) => {
  const { id, name, price, rate, image } = props;

  return (
    <div className="group w-[210px] h-[260px] bg-[#DBDBDB] hover:bg-[#0D3746] rounded-xl shadow-lg">
      <div className="w-fit h-fit p-1.5 pb-0">
        <img className="w-full h-[155px] rounded-lg" alt={id} src={image}></img>
      </div>
      <div className="flex flex-col items-start px-4 mt-1 hover:cursor-pointer">
        <p className="text-xl font-medium overflow-hidden whitespace-nowrap overflow-ellipsis text-[#0D3746] group-hover:text-white">
          {name}
        </p>
        <p className="font-light -mt-1 text-[#D63431]">{price} VND</p>
        <div className="w-full -mt-1 flex flex-row justify-between items-center">
          <div className="w-fit h-fit flex flex-row justify-start items-center">
            <div className="text-[#FFC107]">{rate}</div>
            <img
              className="w-3.5 -mt-1 mx-1"
              alt={`rate-item-${id}`}
              src="/assets/star.png"
            ></img>
          </div>
          <button onClick={() => {}}>
            <img
              className="w-4"
              alt="add-icon"
              src="/assets/add-icon.png"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
