import OrderDetail from "../components/order/orderDetail";
import OrderPayment from "../components/order/orderPayment";

const PaymentDetail = () => {
  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto py-10 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-[1045px] mx-auto h-[825px] bg-[#F4F2EC] shadow-[0px_4px_10px_5px_rgba(0,0,0,0.25)] flex rounded-2xl justify-between px-[25px]">
          <div className="my-4 w-[473px] h-[386px] bg-[blue] ">
            <OrderPayment />
          </div>
          <div className="my-4">
            <OrderDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
