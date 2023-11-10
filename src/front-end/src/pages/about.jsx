import MemberCard from "../components/memberCard";
import Story from "../components/story";
import HomeSlider from "../components/slider";

import stories from "../staticData/stories.json";
import members from "../staticData/members.json";

import items from "../api/items";

const About = () => {
  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-[1120px] mx-auto bg-[#F4F2EC]">
        <div className="w-[1120px] h-[300px]">
          <HomeSlider items={items} />
        </div>
        <div className="w-[1120px] h-[101px] my-3 py-4 flex items-center justify-center text-[70px] font-bold font-Source-Sans-3  text-[#0D3745]">
          STORY BEHIND THE FAVOR
        </div>
        <div className="w-[1120px] h-fit px-4 mx-auto py-2">
          {stories.map((story, index) => (
            <Story
              key={index}
              reverse={index % 2 === 0 ? false : true}
              image={story.image}
              title={story.title}
              subtitle={story.subtitle}
              paragraph={story.paragraph}
            />
          ))}
        </div>
        <div className="flex justify-center items-center my-3 pt-8">
          <hr className="w-[792px] border-[1px] border-[#0D3745]" />
        </div>
        <div className="w-[1120px] h-[101px] py-4 flex items-center justify-center text-[80px] font-bold font-Source-Sans-3  text-[#0D3745]">
          Loyal Customer
        </div>
        <div className="w-[1120px] h-fit px-4 p-8 mx-auto">
          <div className="flex flex-row justify-center gap-4">
            {members.slice(0, 2).map((member) => (
              <MemberCard
                id={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
          <div className="flex flex-row justify-center mt-6 gap-4">
            {members.slice(2, 5).map((member) => (
              <MemberCard
                id={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
