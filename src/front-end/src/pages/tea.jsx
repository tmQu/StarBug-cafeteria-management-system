import Story from "../components/about/story";
import HomeSlider from "../components/slider";
import stories from "../staticData/stories.json";
import ItemsContainer from "../components/items/itemsContainer";
import { motion } from "framer-motion";

const Coffee = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-screen h-fit mx-auto"
    >
      <div className="w-screen mx-auto pb-8 flex flex-col gap-8 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-screen max-w-[2000px] h-fit mx-auto">
          <HomeSlider />
        </div>
        <div className="w-[930px] h-fit xl:w-screen mx-auto">
          <Story
            reverse={true}
            image={stories[2].image}
            title={stories[2].title}
            subtitle={stories[2].subtitle}
            paragraph={stories[2].paragraph}
          />
        </div>
        <div className="w-fit h-fit mx-auto">
          <ItemsContainer route={"tea"} />
        </div>
      </div>
    </motion.div>
  );
};

export default Coffee;
