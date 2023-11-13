const Item = (props) => {
  const { id, name, price, rate, image } = props;

  return (
    <div className="w-[210px] h-[260px] bg-[#6A6A6A] rounded-lg shadow-lg">
      <img className="h-3/5 rounded-t-lg" alt={id} src={image}></img>
      <div className="w-5/6 mt-1.5 mx-auto">
        <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis text-[#F4F2EC]">
          {feature}
        </p>
        <p className="text-xl text-[#F4F2EC] -mt-1 flex justify-center mx-auto overflow-hidden whitespace-nowrap overflow-ellipsis">
          {name}
        </p>
        <hr className="w-full h-[1px] mt-0.5 rounded mx-auto border-none  bg-[#F4F2EC]"></hr>
        <p className="text-base mt-0.5 flex justify-center mx-auto overflow-hidden text-[#F4F2EC] whitespace-nowrap overflow-ellipsis">
          {price} VND
        </p>
      </div>
    </div>
  );
};

export default Item;
