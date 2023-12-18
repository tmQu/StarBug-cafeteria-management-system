import Story from "../components/about/story";
import HomeSlider from "../components/slider";
import items from "../api/items";
import stories from "../staticData/stories.json";
import ItemsContainer from "../components/items/itemsContainer";

import { motion } from "framer-motion";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Coffee = (props) => {
  // const apiUrl = `dbUrl + '/item/filter?category=Tên category đó'`;
  // const { data } = useQuery({
  //   queryKey: ["coffees"],
  //   queryFn: () => axios.get(apiUrl).then((res) => res),
  //   staleTime: 1000 * 5,
  //   retry: 3,
  // });

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-screen h-fit mx-auto"
    >
      <div className="w-screen mx-auto pb-8 flex flex-col gap-8 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-screen max-w-[2000px] h-[386px] mx-auto">
          <HomeSlider />
        </div>
        <div className="w-[930px] h-fit xl:w-screen mx-auto">
          <Story
            reverse={true}
            image={stories[0].image}
            title={stories[0].title}
            subtitle={stories[0].subtitle}
            paragraph={stories[0].paragraph}
          />
        </div>
        <div className="w-fit h-fit mx-auto">
          <ItemsContainer isHome={false} />
        </div>
      </div>
    </motion.div>
  );
};

export default Coffee;
