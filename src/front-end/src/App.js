import Home from "./pages/home";
import Tea from "./pages/tea";
import MilkTea from "./pages/milktea";
import Coffee from "./pages/coffee";
import Cake from "./pages/cake";
import About from "./pages/about";
import Product from "./pages/product";

import Header from "./components/header";
import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        <div className="grid-in-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tea" element={<Tea />} />
            <Route path="/milktea" element={<MilkTea />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/product" element={<Product />}></Route>
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
