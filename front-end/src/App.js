import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/header";
import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-auto grid grid-areas-app grid-cols-app grid-rows-app">
      <div className="">
        <Header />
      </div>
      <div className="">
        <NavigationBar />
      </div>
      <div className="grid-in-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
