import Story from "../components/about/story";
import HomeSlider from "../components/slider";
import stories from "../staticData/stories.json";
import People from "../components/about/people";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-screen h-fit mx-auto"
    >
      <div className="w-screen mx-auto flex flex-col pb-8 gap-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-screen max-w-[2000px] h-fit mx-auto">
          <HomeSlider />
        </div>
        <div className="w-full h-fit flex items-center justify-center text-[50px] font-bold font-Source-Sans-3 text-[#0D3745]">
          <h2 className="pt-2 px-8">STORY BEHIND THE FAVOR</h2>
        </div>
        <div className="w-[1120px] xl:w-screen h-fit px-4 mx-auto flex flex-col gap-8">
          <Story
            reverse={false}
            image={stories[0].image}
            title={stories[0].title}
            subtitle={stories[0].subtitle}
            paragraph={stories[0].paragraph}
          />
          <Story
            reverse={true}
            image={stories[1].image}
            title={stories[1].title}
            subtitle={stories[1].subtitle}
            paragraph={stories[1].paragraph}
          />
          <Story
            reverse={false}
            image={stories[2].image}
            title={stories[2].title}
            subtitle={stories[2].subtitle}
            paragraph={stories[2].paragraph}
          />
          <Story
            reverse={true}
            image={stories[3].image}
            title={stories[3].title}
            subtitle={stories[3].subtitle}
            paragraph={stories[3].paragraph}
          />
        </div>
        <div className="w-full flex justify-center mt-6 items-center">
          <hr className="w-[800px] xl:w-[80%] border-[1px] border-[#0D3745]" />
        </div>
        <div className="w-full fit flex items-center justify-center text-[50px] sm:text-[40px] font-bold font-Source-Sans-3  text-[#0D3745]">
          <p>Loyal Customer</p>
        </div>
        <div className="w-[1120px] xl:w-screen h-fit mx-auto">
          <People />
        </div>
      </div>
    </motion.div>
  );
};
export default About;
