import { BorderButton } from "../buttons/button";
import OrderDelivery from "./orderDelivery";
import PaymentMethod from "./paymentMethod";

const OrderPayment = (props) => {
  return (
    <div className="w-[473px] h-fit bg-[#F4F2EC] flex flex-col pt-[1em]">
      <div className="w-[473px] flex justify-between items-center mx-auto">
        <div className="text-[#0E3746] text-lg font-semibold">Delivery</div>
        <BorderButton className="w-[130px] h-[40px]" name="Change address" />
      </div>
      <div className=" h-fit">
        <OrderDelivery />
        <PaymentMethod />
      </div>
    </div>
  );
};

export default OrderPayment;
