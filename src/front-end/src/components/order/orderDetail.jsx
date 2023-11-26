import { BorderButton } from "../button";
import CustomerOrder from "./customerOrder";
import OrderTotal from "./orderTotal";

// order = [total + item]
// order item = {name, size, amount, price, topping, note}

const handleAdd = () => {
  // Change direct to product page
  console.log("Add");
}

const OrderDetail = (prop) => {
  const { order } = prop;

  return (
    <div className="w-[472px] h-fit bg-[#F4F2EC] flex flex-col rounded-xl shadow-[1px_6px_10px_4px_rgba(0,0,0,0.15);] pt-[1em]">
      <div className="w-[433px] flex justify-between items-center mx-auto">
        <div className="text-[#0E3746] text-lg font-semibold">Your order</div>
        <BorderButton className="w-[90px] h-[34.1px]" name="Add more" onClick={handleAdd()} />
      </div>
      <div className="w-[472px] h-[fit] mx-auto mt-4 overflow-y-auto">
        <hr className="ml-[20px] w-[50px] border-[1px] border-[#BE2623]" />
        <CustomerOrder order={order} />
        <OrderTotal total={100000} fee={10000} voucher={0.1} />
      </div>
    </div>
  );
};

export default OrderDetail;
