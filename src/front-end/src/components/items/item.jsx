import { useDispatch } from "react-redux";
import { addCart } from "../../reduxActions/cart";

const Item = (props) => {
  const { id, name, price, rate, image } = props;

  const dispatch = useDispatch();
  const handleAddButton = (data) => {
    dispatch(addCart(data));
  };

  return (
    <div className="group w-[210px] h-[288px] sm:w-[170px] sm:h-[240px] bg-[#DBDBDB] hover:bg-[#0D3746] rounded-xl shadow-lg">
      <div className="w-full h-fit p-1.5 pb-0">
        <img
          className="w-full h-[155px] mx-auto sm:h-[134px] rounded-lg object-fill"
          alt={id}
          src={image}
        ></img>
      </div>
      <div className="w-full flex flex-col items-between px-3 mt-1 hover:cursor-pointer">
        <p className="h-12 flex flex-col text-lg font-medium break-words line-clamp-2 leading-6 overflow-ellipsis text-[#0D3746] group-hover:text-white">
          {name}
        </p>
        <div>
          <p className="font-light text-[#D63431]">{price} VND</p>
          <div className="w-full -mt-1 flex flex-row justify-between items-center">
            <div className="w-fit h-fit flex flex-row justify-start items-center">
              <div className="text-[#FFC107]">{rate}</div>
              <img
                className="w-3.5 -mt-1 mx-1"
                alt={`rate-item-${id}`}
                src="/assets/star.png"
              ></img>
            </div>
            <button onClick={() => handleAddButton(props)}>
              <img
                className="w-4"
                alt="add-icon"
                src="/assets/add-icon.png"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
