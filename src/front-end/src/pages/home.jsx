import Item from "../components/items/item";
import IntroCards from "../components/cards/introCards";
import Top3Items from "../components/items/top3Items";
import HomeSlider from "../components/slider";
import Promotions from "../components/promotions";
import ShowAllButton from "../components/buttons/showAllButton";
import ItemsMobileContainer from "../responsive/itemsContainer";

import items from "../api/items";
import images from "../api/images";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { motion } from "framer-motion";

const Home = () => {
  // we will fetch items data from serverconst apiUrl = `https://fakestoreapi.com/products?limit=12`;

  // const apiUrl = `http://localhost:4000/item/all`;
  // const { data } = useQuery({
  //   queryKey: ["items"],
  //   queryFn: () => axios.get(apiUrl).then((res) => res),
  //   staleTime: 1000 * 5,
  //   retry: 3,
  // });
  // console.log(data);

  const shuffledItems = items.sort(() => Math.random() - 0.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-screen h-fit mx-auto"
    >
      <div className="w-screen mx-auto flex flex-col gap-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-screen max-w-[2000px] h-[386px] mx-auto">
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
        <div className="w-fit h-fit mx-auto xl:hidden">
          <div className="w-full flex flex-col gap-6">
            <div className="w-auto h-auto mx-auto flex flex-row gap-6">
              {shuffledItems.slice(0, 4).map((item) => (
                <Item
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  rate={item.rate}
                  image={item.image}
                />
              ))}
            </div>

            <div className="w-fit h-fit flex flex-row gap-6">
              {shuffledItems.slice(4, 8).map((item) => (
                <Item
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  rate={item.rate}
                  image={item.image}
                />
              ))}
            </div>
            <div className="w-fit h-fit flex flex-row gap-6">
              {shuffledItems.slice(8, 12).map((item) => (
                <Item
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  rate={item.rate}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-fit h-fit mx-auto hidden xl:block">
          <ItemsMobileContainer items={items} />
        </div>
        <div className="pb-6 pt-3">
          <ShowAllButton />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
