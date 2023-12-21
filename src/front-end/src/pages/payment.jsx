import OrderDetail from "../components/order/orderDetail";
import OrderPayment from "../components/order/orderPayment";
import { motion } from "framer-motion";

const PaymentDetail = () => {
  return (
    <div className="w-screen h-fit mx-auto py-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
      <motion.div
        initial={{ opacity: 0.5, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-[1045px] xl:w-fit sm:w-[90%] sm:overflow-hidden mx-auto h-fit bg-[#F4F2EC] shadow-[0px_4px_10px_5px_rgba(0,0,0,0.25)] flex flex-row xl:flex-col rounded-2xl justify-between xl:items-center xl:gap-6 p-4"
      >
        <div className="w-[473px] sm:w-full h-fit bg-[blue] ">
          <OrderPayment />
        </div>
        <OrderDetail />
      </motion.div>
    </div>
  );
};

export default PaymentDetail;
