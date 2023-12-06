import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/layouts/header";
import NavigationBar from "./components/layouts/navigationBar";
import Footer from "./components/layouts/footer";
import { Routes, Route } from "react-router-dom";

import Tea from "./pages/tea";
import MilkTea from "./pages/milktea";
import Coffee from "./pages/coffee";
import Cake from "./pages/cake";
import Product from "./pages/product";
import Setting from "./pages/setting";
import PaymentDetail from "./pages/payment";
import OrderManagement from "./components/orderManagement/orderManagement";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LogInPopUp from "./components/popUps/logInPopUp";
import SignUpPopUp from "./components/popUps/signUpPopUp";
import NewPassword from "./components/popUps/newPassword";
import ForgotPassword from "./components/popUps/forgotPassword";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="w-screen h-auto grid grid-areas-app grid-cols-app grid-rows-app">
      <QueryClientProvider client={queryClient}>
        <div className="fixed top-0 w-full z-40">
          <div className="h-[60px]">
            <Header />
          </div>
          <div className="h-[60px] pt-0">
            <NavigationBar />
          </div>
        </div>
        <div className="absolute left-[calc((100vw_-_400px)_/_2)] top-6 left- grid-in-content z-50">
          {/* <AddToCartPopup /> */}
          {/* <LogInPopUp/> */}
          {/* <SignUpPopUp/> */}
          {/* <NewPassword/> */}
          {/* <ForgotPassword /> */}
        </div>
        <div className="grid-in-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tea" element={<Tea />} />
            <Route path="/milktea" element={<MilkTea />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/payment" element={<PaymentDetail />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/ordermanagement" element={<OrderManagement />}></Route>
          </Routes>
        </div>
        <div className="grid-in-footer">
          <Footer />
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
