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
import PaymentDetail from "./pages/payment";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LogInPopUp from "./components/popUps/logInPopUp";
import SignUpPopUp from "./components/popUps/signUpPopUp";
import NewPassword from "./components/popUps/newPassword";
import ForgotPassword from "./components/popUps/forgotPassword";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="w-screen h-auto flex flex-col gap-0 overflow-hidden">
      <QueryClientProvider client={queryClient}>
        <div className="w-full z-40">
          <div className="h-[60px]">
            <Header />
          </div>
          <div className="h-fit">
            <NavigationBar />
          </div>
        </div>
        {/* <div className="absolute left-[calc((100vw_-_400px)_/_2)] top-6 left- grid-in-content z-50"> */}
        {/* <AddToCartPopup /> */}
        {/* <LogInPopUp/> */}
        {/* <SignUpPopUp/> */}
        {/* <NewPassword/> */}
        {/* <ForgotPassword /> */}
        {/* </div> */}
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tea" element={<Tea />} />
            <Route path="/milktea" element={<MilkTea />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/payment" element={<PaymentDetail />}></Route>
          </Routes>
        </div>
        <div className="">
          <Footer />
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
