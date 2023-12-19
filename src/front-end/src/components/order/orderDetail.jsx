import { BorderButton } from "../buttons/button";
import CustomerOrder from "./customerOrder";
import OrderTotal from "./orderTotal";

import { useSelector } from "react-redux";

// order = [total + item]
// order item = {name, size, amount, price, topping, note}

const OrderDetail = (prop) => {
  const { order } = prop;

  const { cartList, totalPrice, totalFee, totalVoucher } = useSelector(
    (state) => state.cartReducer
  );
  // order item = {name, size, amount, price, topping, note}

  const handleAdd = () => {
    // Change direct to product page
    console.log("Add");
  };

  return (
    <div className="w-[472px] h-fit bg-[#F4F2EC] flex flex-col rounded-xl shadow-[1px_6px_10px_4px_rgba(0,0,0,0.15);] pt-[1em]">
      <div className="w-[433px] flex justify-between items-center mx-auto">
        <div className="text-[#0E3746] text-lg font-semibold">Your order</div>
        <BorderButton
          className="w-[90px] h-[34.1px] pt-0.5"
          name="Add more"
          onClick={handleAdd()}
        />
      </div>
      <div className="w-[472px] h-[fit] mx-auto mt-4 overflow-y-auto">
        {totalPrice === 0 ? (
          <div className="p-4 pb-3 pt-0 text-[#0E3746] text-base font-normal">
            You didn't select any product.
          </div>
        ) : (
          <div>
            <hr className="ml-[20px] w-[50px] border-[1px] border-[#BE2623]" />
            <div className="max-h-[310px] overflow-y-auto">
              {cartList.map((item) => (
                <CustomerOrder order={item} />
              ))}
            </div>
            <OrderTotal
              total={totalPrice}
              fee={totalFee}
              voucher={totalVoucher}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
