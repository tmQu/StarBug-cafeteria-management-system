import IntroCards from "../components/cards/introCards";
import Top3Items from "../components/items/top3Items";
import HomeSlider from "../components/slider";
import Promotions from "../components/promotions";
import ItemsContainer from "../components/items/itemsContainer";
import ShowAllButton from "../components/buttons/showAllButton";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const location = useLocation();
  const [showAllItems, setShowAllItems] = useState(false);

  const handleShowAll = () => {
    setShowAllItems(!showAllItems);
  }

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-screen h-fit mx-auto"
    >
      <div className="w-screen mx-auto flex flex-col gap-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-screen max-w-[2000px] h-[386px] sm:h-[280px] mx-auto">
          <HomeSlider />
        </div>
        <div className="h-[160px] sm:h-[390px]">
          <div className="w-full flex items-center justify-center">
            <Promotions />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col justify-center items-center">
          <p className="mb-5 text-3xl font-semibold text-[#0D3746]">
            Our values
          </p>
          <IntroCards />
        </div>
        <div className="w-full h-fit py-2 flex flex-row justify-center items-center">
          <p className="pt-1 text-3xl font-semibold text-[#0D3746]">
            Best sellers
          </p>
        </div>
        <div className="w-full h-fit">
          <Top3Items />
        </div>
        <div className="w-full h-fit py-2 flex flex-row justify-center items-center">
          <p className="pt-2 text-3xl font-semibold text-[#0D3746]">
            Our products
          </p>
        </div>
        <div className="w-fit h-fit mx-auto">
          {showAllItems ? (
            <ItemsContainer route={location.pathname} limit={Infinity} />
          ) : (
            <ItemsContainer route={location.pathname} limit={12} />
          )}
        </div>
        <div className="pb-6 pt-3">
          <ShowAllButton showAll={!showAllItems} onClick={handleShowAll} />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
