// Main pages
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/layouts/header";
import NavigationBar from "./components/layouts/navigationBar";
import Footer from "./components/layouts/footer";
import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./components/authen/requiredAuth";
import PersistLogin from "./components/authen/persistLogin";
import useAuth from "./hooks/useAuth";

// Category Pages
import Tea from "./pages/tea";
import MilkTea from "./pages/milktea";
import Coffee from "./pages/coffee";
import Cake from "./pages/cake";
import Reset from "./pages/reset";

// Staff Pages
import Product from "./pages/product";
import Setting from "./pages/setting";

// Management Pages
import UserOrderHistory from "./pages/management/userOrderHistory";
import OrderManagement from "./pages/management/orderManagement";
import ProductManagement from "./pages/management/productManagement";
import StaffManagement from "./pages/management/staffManagement";
import SliderManagement from "./pages/management/sliderManagement";
import StatisticReport from "./pages/management/statisticReport";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

// Redux
import { useSelector } from "react-redux";
import PaymentDetail from "./pages/payment";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  const { auth } = useAuth();
  const {
    isOpenLoginPopUp,
    isOpenPaymentPopUp,
    isOpenSignUpPopUp,
    isOpenForgotPasswordPopUp,
    isOpenNewPasswordPopUp,
  } = useSelector((state) => state.popUpReducer);
  return (
    <div className="w-screen h-auto flex flex-col gap-0 overflow-hidden">
      <QueryClientProvider client={queryClient}>
        <div className="w-full z-40">
          <div className="h-[60px]">
            <Header />
          </div>
          <div className="h-fit">
            {/* if login successful -> isAdmin = true */}
            <NavigationBar isAdmin={auth.role === 'manager' ? true : false} />
          </div>
        </div>
        <div
          className={`${isOpenLoginPopUp ||
              isOpenPaymentPopUp ||
              isOpenSignUpPopUp ||
              isOpenForgotPasswordPopUp ||
              isOpenNewPasswordPopUp
              ? "blur"
              : ""
            }`}
        >
          <AnimatePresence>
            <Routes>
              {/* Public users */}
              <Route element={<PersistLogin />}>
                <Route path="/" element={<Home />} />
                <Route path="/tea" element={<Tea />} />
                <Route path="/milktea" element={<MilkTea />} />
                <Route path="/coffee" element={<Coffee />} />
                <Route path="/cake" element={<Cake />} />
                <Route path="/about" element={<About />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/payment" element={<PaymentDetail />}></Route>
                <Route path="/reset" element={<Reset />}></Route>

                <Route
                  element={
                    <RequiredAuth
                      allowedRoles={["customer", "staff", "manager"]}
                    />
                  }
                >
                  <Route path="/setting" element={<Setting />} />
                </Route>
                <Route
                  element={
                    <RequiredAuth
                      allowedRoles={["customer", "staff", "manager"]}
                    />
                  }
                >
                  <Route path="/order-history" element={<UserOrderHistory />} />
                </Route>
                <Route
                  element={<RequiredAuth allowedRoles={["staff", "manager"]} />}
                >
                  <Route
                    path="/order-management"
                    element={<OrderManagement />}
                  />
                </Route>
                <Route element={<RequiredAuth allowedRoles={["manager"]} />}>
                  <Route
                    path="/staff-management"
                    element={<StaffManagement />}
                  />
                </Route>
                <Route element={<RequiredAuth allowedRoles={["manager"]} />}>
                  <Route
                    path="/product-management"
                    element={<ProductManagement />}
                  />
                </Route>
                <Route element={<RequiredAuth allowedRoles={["manager"]} />}>
                  <Route
                    path="/slider-management"
                    element={<SliderManagement />}
                  />
                </Route>
                <Route
                  path="/report-management"
                  element={<StatisticReport />}
                ></Route>
              </Route>
            </Routes>
          </AnimatePresence>
        </div>
        <div className="">
          <Footer isAdmin={false} />
        </div>
      </QueryClientProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
