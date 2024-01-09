import { useDispatch } from "react-redux";
import { removeCart } from "../../reduxActions/cart";
import formatCurrencyWithCommas from "../../utils/formatCurrency";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { calculateToppingPrice } from "../../utils/cartCalculate";

const CustomerOrder = (prop) => {
  const dispatch = useDispatch();

  const { order } = prop;
  // order item = {name, size, amount, price, topping, note}
  // use order.map for this

  const handleEdit = () => {
    // Change direct to product popup
  };

  const handleDelete = (id, itemSize, itemTopping) => {
    const deleteId =
      id.toString() + itemSize.toString() + itemTopping.toString();
    dispatch(removeCart(deleteId));
  };

  const deleteNotify = () => {
    toast("Your product has been removed from cart");
    localStorage.setItem(
      "addedToCartMessage",
      "Your product has been removed from cart"
    );
    return true;
  };

  return (
    <div className="w-[433px] sm:w-full h-fit mx-auto mt-4 flex">
      <div className="w-[32px] h-[56px] flex-col items-center gap-2 mt-2 flex justify-center mr-2 sm:ml-6 sm:mr-2">
        <button onClick={() => handleEdit()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M12.3952 2.50045L10.4996 0.604842C10.2708 0.376006 9.96654 0.25 9.64293 0.25C9.31936 0.25 9.01513 0.376006 8.78632 0.604834L0.851244 8.53988C0.775927 8.6152 0.727376 8.71315 0.713064 8.8187L0.254426 12.1976C0.233983 12.3483 0.285091 12.4999 0.392628 12.6074C0.484548 12.6993 0.608652 12.75 0.73689 12.75C0.758645 12.75 0.78054 12.7485 0.802413 12.7456L4.18128 12.287C4.28684 12.2726 4.38479 12.2241 4.4601 12.1488L12.3952 4.21373C12.624 3.98492 12.75 3.68068 12.75 3.3571C12.75 3.03349 12.624 2.72926 12.3952 2.50045ZM3.88761 11.344L1.30545 11.6945L1.65594 9.11237L7.27895 3.48939L9.5106 5.72106L3.88761 11.344ZM11.7066 3.52511L10.1992 5.03245L7.96755 2.80078L9.47489 1.29345C9.53547 1.23288 9.60617 1.22383 9.64293 1.22383C9.67969 1.22383 9.75039 1.23288 9.81098 1.29345L11.7066 3.18906C11.7671 3.24961 11.7762 3.32033 11.7762 3.35708C11.7762 3.39383 11.7671 3.46454 11.7066 3.52511Z"
              fill="#BE2623"
            />
          </svg>
        </button>
        <button
          onClick={() =>
            deleteNotify() &&
            handleDelete(
              order.id,
              order.size.size,
              order.topping[0].name +
                order.topping[1].name +
                order.topping[2].name
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
          >
            <g clipPath="url(#clip0_1315_982)">
              <path
                d="M15.2658 7.63975H9.03662C8.88784 7.63975 8.76709 7.51918 8.76709 7.37022V6.4707C8.76709 5.8267 9.29106 5.30273 9.93506 5.30273H14.3674C15.0114 5.30273 15.5354 5.8267 15.5354 6.4707V7.37022C15.5354 7.51918 15.4146 7.63975 15.2658 7.63975ZM9.30615 7.10069H14.9963V6.4707C14.9963 6.12391 14.7142 5.8418 14.3674 5.8418H9.93506C9.58826 5.8418 9.30615 6.12391 9.30615 6.4707V7.10069Z"
                fill="#EE3E36"
              />
              <path
                d="M9.04053 17.8875C8.89175 17.8875 8.771 17.7669 8.771 17.618V11.7456C8.771 11.5966 8.89175 11.4761 9.04053 11.4761C9.18931 11.4761 9.31006 11.5966 9.31006 11.7456V17.618C9.31006 17.7668 9.18931 17.8875 9.04053 17.8875Z"
                fill="#EE3E36"
              />
              <path
                d="M12.1533 17.8875C12.0045 17.8875 11.8838 17.7669 11.8838 17.618V11.7456C11.8838 11.5966 12.0045 11.4761 12.1533 11.4761C12.3021 11.4761 12.4229 11.5966 12.4229 11.7456V17.618C12.4229 17.7668 12.3021 17.8875 12.1533 17.8875Z"
                fill="#EE3E36"
              />
              <path
                d="M15.2661 17.8875C15.1173 17.8875 14.9966 17.7669 14.9966 17.618V11.7456C14.9966 11.5966 15.1173 11.4761 15.2661 11.4761C15.4149 11.4761 15.5356 11.5966 15.5356 11.7456V17.618C15.5356 17.7668 15.4149 17.8875 15.2661 17.8875Z"
                fill="#EE3E36"
              />
              <path
                d="M17.5648 9.83178H6.73792C6.15411 9.83178 5.6792 9.30781 5.6792 8.66381V8.26868C5.6792 7.62468 6.15411 7.10071 6.73792 7.10071H17.5648C18.1486 7.10071 18.6235 7.62468 18.6235 8.26868V8.66381C18.6235 9.30781 18.1486 9.83178 17.5648 9.83178ZM6.73792 7.63977C6.45132 7.63977 6.21826 7.92188 6.21826 8.26868V8.66381C6.21826 9.01061 6.45132 9.29272 6.73792 9.29272H17.5648C17.8514 9.29272 18.0845 9.01061 18.0845 8.66381V8.26868C18.0845 7.92188 17.8514 7.63977 17.5648 7.63977H6.73792Z"
                fill="#313335"
              />
              <path
                d="M16.4579 19.9083H7.84461C7.24518 19.9083 6.75732 19.3843 6.75732 18.7403V9.56226C6.75732 9.41329 6.87807 9.29272 7.02686 9.29272H17.2755C17.4243 9.29272 17.545 9.41329 17.545 9.56226V18.7403C17.5452 19.3843 17.0574 19.9083 16.4579 19.9083ZM7.29639 9.83179V18.7403C7.29639 19.0871 7.5422 19.3692 7.84461 19.3692H16.4579C16.7603 19.3692 17.0062 19.0871 17.0062 18.7403V9.83179H7.29639Z"
                fill="#313335"
              />
            </g>
            <defs>
              <clipPath id="clip0_1315_982">
                <rect
                  width="23"
                  height="23"
                  fill="white"
                  transform="translate(0 0.75)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="w-[410px] sm:w-full h-fit mx-auto ">
        <div className="w-full h-[fit] text-[#0E3746] text-sm font-semibold">
          {order.name || "Product Name"}
        </div>
        <div className="w-full h-[fit] flex justify-between">
          <div className="w-[322px] sm:w-[90%] h-[fit] text-[#0E3746] text-sm pr-[10px]">
            Size: {order.size.size || "Small"}
          </div>
          <div className="w-[80px] sm:hidden text-[#0E3746] text-base text-right pr-0.5">
            {formatCurrencyWithCommas(
              order.price +
                order.size.sizePrice +
                calculateToppingPrice(order.topping)
            ) || ""}
          </div>
        </div>
        <div className="-mt-1 flex flex-row gap-1 justify-start">
          <div className="w-fit text-[#0E3746] text-sm ">
            Quantity: {order.quantity || "1"}
          </div>
          <div className="h-4"></div>
          {order.topping[0].quantity > 0 ||
          order.topping[1].quantity > 0 ||
          order.topping[2].quantity > 0 ? (
            <div className="w-fit text-[#0E3746] text-sm">
              {order.topping[0].quantity > 0 && order.topping[0].name}{" "}
              {order.topping[1].quantity > 0 && order.topping[1].name}{" "}
              {order.topping[2].quantity > 0 && order.topping[2].name}{" "}
            </div>
          ) : (
            <></>
          )}
          {order.note && (
            <>
              <div className="h-4 border-r-2 border-[#0E3746]"></div>
              <div className="w-fit text-[#0E3746] text-sm ">{order.note}</div>
            </>
          )}
        </div>
        <div className="w-[80px] text-[#0E3746] text-base text-left">
          {formatCurrencyWithCommas(
            order.price +
              order.size.sizePrice +
              calculateToppingPrice(order.topping)
          ) || ""}
        </div>
      </div>
    </div>
  );
};

export default CustomerOrder;
