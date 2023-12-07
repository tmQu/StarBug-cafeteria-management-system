import Item from "../components/items/item";

const ItemsMobileContainer = (props) => {
  return (
    <div
      className="w-fit h-auto mx-auto grid grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center animate-item-show
    "
    >
      {props.items.map((item) => (
        <Item
          id={item.id}
          name={item.name}
          price={item.price}
          rate={item.rate}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ItemsMobileContainer;
