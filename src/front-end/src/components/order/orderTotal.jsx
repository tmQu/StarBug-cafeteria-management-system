import Voucher from "./voucher";
import { RoundedButton } from "../buttons/button";

const OrderTotal = ({ total, fee, voucher }) => {
  let discount = 0;
  return (
    <div className="w-[433px] mx-auto h-fit">
      <div className="text-[#0E3746] text-lg font-semibold pt-[1em]">Total</div>
      <hr className="w-[50px] border-[1px] border-[#BE2623]" />
      <div className="w-[433px] h-[50px] flex justify-between items-center my-2">
        <div className="text-[#0E3746] text-sm">Bill</div>
        <div className="text-[#0E3746] text-sm">{total}</div>
      </div>
      <hr className="w-[433px] border-[1px] border-gray-500" />
      <div className="w-[433px] h-[50px] flex justify-between items-center mt-2">
        <div className="text-[#0E3746] text-sm">Delivery fee</div>
        <div className="text-[#0E3746] text-sm">{fee}</div>
      </div>
      <div className="w-[433px] h-fit flex justify-between items-center mb-4">
        <div className="text-[#0E3746] text-sm">Voucher discount</div>
        <div className="text-[#0E3746] text-sm">
          {(discount = total * voucher)}
        </div>
      </div>
      <hr className="w-[433px] border-[1px] border-gray-500" />
      <div className="py-4">
        <Voucher />
      </div>
      <div className="w-[472px] h-[78px] bg-[#BE2623] ml-[-19.5px] rounded-b-xl">
        <div className="w-[433px] h-[78px] flex justify-between mx-auto">
          <div className="my-auto flex-col">
            <div className="text-white text-sm font-semibold">Total</div>
            <div className="text-white text-sm font-semibold">
              {total + fee - discount}
            </div>
          </div>
          <RoundedButton className="my-auto pt-0.5" name="Order" />
        </div>
      </div>
    </div>
  );
};

export default OrderTotal;
