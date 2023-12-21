import Voucher from "./voucher";
import { RoundedButton } from "../buttons/button";
import formatCurrencyWithCommas from "../../utils/formatCurrency";

const OrderTotal = ({ total, fee, voucher }) => {
  let discount = 0;
  return (
    <div className="w-[473px] sm:w-full mx-auto h-fit p-4">
      <div className="w-full text-[#0E3746] text-lg font-semibold pt-[1em]">
        Total
      </div>
      <hr className="w-[50px] border-[1px] border-[#BE2623]" />
      <div className="w-full h-[50px] flex justify-between items-center my-2">
        <div className="text-[#0E3746] text-sm">Bill</div>
        <div className="text-[#0E3746] text-sm">
          {formatCurrencyWithCommas(total)}
        </div>
      </div>
      <hr className="w[433px] sm:w-full border-[1px] border-gray-500" />
      <div className="w-full h-[50px] flex justify-between items-center mt-2">
        <div className="text-[#0E3746] text-sm">Delivery fee</div>
        <div className="text-[#0E3746] text-sm">
          {formatCurrencyWithCommas(fee)}
        </div>
      </div>
      <div className="w-full h-fit flex justify-between items-center mb-4">
        <div className="text-[#0E3746] text-sm">Voucher discount</div>
        <div className="text-[#0E3746] text-sm">
          {formatCurrencyWithCommas((discount = total * voucher))}
        </div>
      </div>
      <hr className="w-full border-[1px] border-gray-500" />
      <div className="py-4">
        <Voucher />
      </div>
      <div className="w-full h-[78px] bg-[#BE2623] px-4 rounded-b-xl">
        <div className="w-full h-[78px] flex justify-between mx-auto">
          <div className="my-auto flex-col">
            <div className="text-white text-sm font-semibold">Total</div>
            <div className="text-white text-sm font-semibold">
              {formatCurrencyWithCommas(total + fee - discount)} VND
            </div>
          </div>
          <RoundedButton className="my-auto pt-0.5" name="Order" />
        </div>
      </div>
    </div>
  );
};

export default OrderTotal;
