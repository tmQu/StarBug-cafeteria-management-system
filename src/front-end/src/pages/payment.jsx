import OrderDetail from "../components/order/orderDetail";
import OrderPayment from "../components/order/orderPayment";
import { motion } from "framer-motion";

const PaymentDetail = () => {
  return (
    <div className="w-screen h-hit mx-auto py-4 flex flex-col gap-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
      <motion.div
        initial={{ opacity: 0.5, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-[1045px] mx-auto h-[825px] bg[#F4F2EC] shadow-[0px_4px_10px_5px_rgba(0,0,0,0.25)] flex rounded-2xl justify-between p-4"
      >
        <div className="w-[473px] h-[386px] bg-[blue] ">
          <OrderPayment />
        </div>
        <OrderDetail />
      </motion.div>
    </div>
  );
};

export default PaymentDetail;
