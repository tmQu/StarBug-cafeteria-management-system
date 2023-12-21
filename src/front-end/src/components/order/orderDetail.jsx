import { BorderButton } from "../buttons/button";
import CustomerOrder from "./customerOrder";
import OrderTotal from "./orderTotal";
import { useSelector } from "react-redux";

const OrderDetail = () => {
  const { cartList, totalPrice, totalFee, totalVoucher } = useSelector(
    (state) => state.cartReducer
  );

  const handleAdd = () => {
    // Change direct to product page
  };

  return (
    <div className="w-[472px] sm:w-full h-fit bg-[#F4F2EC] flex flex-col rounded-xl shadow-[1px_6px_10px_4px_rgba(0,0,0,0.15);] pt-[1em]">
      <div className="w-[433px] sm:w-[90%] flex justify-between items-center mx-auto">
        <div className="text-[#0E3746] text-lg font-semibold">Your order</div>
        <BorderButton
          className="w-[90px] h-[34.1px] pt-0.5"
          name="Add more"
          onClick={handleAdd()}
        />
      </div>
      <div className="w-full h-[fit] mx-auto mt-4 overflow-y-auto">
        {totalPrice === 0 ? (
          <div className="p-4 pb-3 pt-0 text-[#0E3746] text-base font-normal">
            You didn't select any product.
          </div>
        ) : (
          <div>
            <hr className="ml-[20px] w-[50px] border-[1px] border-[#BE2623]" />
            <div className="max-h-[310px] overflow-y-auto sm:my-1">
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
