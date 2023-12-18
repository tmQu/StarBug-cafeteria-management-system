import Story from "../components/story";
import HomeSlider from "../components/slider";
import items from "../api/items";
import stories from "../staticData/stories.json";
import Item from "../components/items/item";
import ItemsMobileContainer from "../responsive/itemsContainer";

import { motion } from "framer-motion";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const apiUrl = `dbUrl + '/item/filter?category=Tên category đó'`;
// const { data } = useQuery({
//   queryKey: ["coffees"],
//   queryFn: () => axios.get(apiUrl).then((res) => res),
//   staleTime: 1000 * 5,
//   retry: 3,
// });

const Coffee = (props) => {
  const coffeeItems = items.filter((item) => item.category === "Coffee");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-screen h-fit mx-auto"
    >
      <div className="w-screen mx-auto pb-8 flex flex-col gap-8 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-screen max-w-[2000px] h-[386px] mx-auto">
          <HomeSlider />
        </div>
        <div className="w-[930px] xl:w-screen mx-auto">
          <div clasName="h-fit">
            {
              <Story
                reverse={true}
                image={stories[0].image}
                title={stories[0].title}
                subtitle={stories[0].subtitle}
                paragraph={stories[0].paragraph}
              />
            }
          </div>
        </div>
        <div className="w-[930px] h-fit mx-auto xl:hidden">
          <div className="flex flex-col gap-6">
            <div
              className="w-fit h-fit flex flex-row flex-wrap gap-6"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
            >
              {coffeeItems.map((item) => (
                <div key={item.id}>
                  <Item
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    rate={item.rate}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-fit h-fit mx-auto sm:mt-8 hidden xl:block">
          <ItemsMobileContainer items={items} />
        </div>
      </div>
    </motion.div>
  );
};

export default Coffee;
