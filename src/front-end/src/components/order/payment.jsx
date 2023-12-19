import OrderDetail from "./orderDetail";
import OrderPayment from "./orderPayment";

import { motion } from "framer-motion";

const PaymentDetail = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-[1045px] mx-auto h-[825px] bg-[#F4F2EC] shadow-[0px_4px_10px_5px_rgba(0,0,0,0.25)] flex rounded-2xl justify-between p-4"
    >
      <div className="w-[473px] h-[386px] bg-[blue] ">
        <OrderPayment />
      </div>
      <OrderDetail />
    </motion.div>
  );
};

export default PaymentDetail;
