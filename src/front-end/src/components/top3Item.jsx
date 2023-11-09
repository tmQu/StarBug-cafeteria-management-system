const Top3Item = (props) => {
  const { id, name, price, feature, image } = props;
  return (
    <div
      className="w-[300px] h-[385px] bg-[#D8D4BA] rounded-xl shadow-xl
    [transition:transform_0.5s_ease] hover:scale-[1.02] hover:bg-[#0D3745]"
    >
      <div className="pt-3">
        <img
          className="w-[267px] h-[230px] object-cover mx-auto rounded-lg
          [transition:transform_0.5s_ease] hover:cursor-pointer hover:scale-[1.04]"
          alt={id}
          src={image}
        ></img>
      </div>
      <div className="flex flex-col items-center mt-1.5 hover:cursor-pointer">
        <p className="text-xl font-light text-[#0D3745]">{feature}</p>
        <hr className="w-4/5 h-[1px] rounded mx-auto border-none bg-[#0D3745]"></hr>
        <p className="text-3xl font-light mt-1 text-[#0D3745]">{name}</p>
        <p className="text-2xl font-normal -mt-1 text-[#0D3745]">{price}</p>
      </div>
    </div>
  );
};
export default Top3Item;
