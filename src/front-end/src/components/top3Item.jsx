const Top3Item = (props) => {
  const { id, name, price, image, rate } = props;
  return (
    <div
      className="group w-[300px] h-[385px] bg-[#D8D4BA] hover:bg-[#183942] rounded-xl shadow-xl
    [transition:transform_0.5s_ease] hover:scale-[1.01]"
    >
      <div className="pt-3">
        <img
          className="w-[267px] h-[230px] object-cover mx-auto rounded-lg
          [transition:transform_0.5s_ease] hover:cursor-pointer hover:scale-[1.01]"
          alt={id}
          src={image}
        ></img>
      </div>
      <div className="flex flex-col items-start px-4 mt-1.5 hover:cursor-pointer">
        <p className="text-[30px] font-medium mt-1 overflow-hidden whitespace-nowrap overflow-ellipsis text-[#0D3746] group-hover:text-white">
          {name}
        </p>
        <p className="text-2xl font-light -mt-1 text-[#D63431]">{price} VND</p>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-fit h-fit flex flex-row justify-start items-center">
            <div className="text-xl text-[#FFC107]">{rate}</div>
            <img
              className="w-5 -mt-1 mx-1"
              alt={`rate-item-${id}`}
              src="/assets/star.png"
            ></img>
          </div>
          <button onClick={() => {}}>
            <img
              className="w-6"
              alt="add-icon"
              src="/assets/add-icon.png"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Top3Item;
