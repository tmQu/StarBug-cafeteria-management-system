const Item = (props) => {
  const name = props.name;
  const price = props.price;
  const image = props.image;
  return (
    <div className="w-[210px] h-[260px] bg-[#DBDBDB] rounded-xl">
      <div>{image}</div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default Item;
