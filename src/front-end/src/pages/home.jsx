import Item from "../components/item";
import IntroCards from "../components/introCards";
import Top3Items from "../components/top3Items";
import HomeSlider from "../components/slider";
import Promotions from "../components/promotions";
import ShowAllButton from "../components/showAllButton";

import items from "../api/items";
import images from "../api/images";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//import { useInView } from "react-intersection-observer";

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

  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-screen max-w-[2000px] h-[386px] mx-auto">
          <HomeSlider items={items} />
        </div>
        <div className="h-[160px]">
          <div className="w-[930px] h-[210px] flex items-center mx-auto justify-between relative -top-12">
            <Promotions images={images} />
          </div>
        </div>
        <div className="w-full h-[320px] px-5 mt-2 flex flex-col justify-center items-center">
          <p className="my-2 text-3xl font-semibold text-[#0D3746]">
            Our values
          </p>
          <IntroCards />
        </div>
        <div className="w-full h-10 mt-4 flex flex-row justify-center items-center">
          <p className="pt-2 my-2 text-3xl font-semibold text-[#0D3746]">
            Best sellers
          </p>
        </div>
        <div className="w-full h-[385px] mt-4">
          <Top3Items />
        </div>
        <div className="w-full h-10 mt-4 flex flex-row justify-center items-center">
          <p className="pt-2 my-2 text-3xl font-semibold text-[#0D3746]">
            Our products
          </p>
        </div>
        <div className="w-[930px] h-fit mx-auto mt-4 grid grid-cols-4 grid-rows-3 gap-6">
          {items.map((item) => (
            <Item
              id={item.id}
              name={item.name}
              price={item.price}
              rate={item.rate}
              image={item.image}
            />
          ))}
        </div>
        <div className="py-4">
          <ShowAllButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
