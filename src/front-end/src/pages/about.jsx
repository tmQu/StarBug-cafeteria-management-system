import MemberCard from "../components/cards/memberCard";
import Story from "../components/story";
import HomeSlider from "../components/slider";
import stories from "../staticData/stories.json";
import members from "../staticData/members.json";
import items from "../api/items";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: sliderRef, inView: sliderVisible } = useInView();

  const { ref: storyTitleRef, inView: storyTitleVisible } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: story1Ref, inView: story1Visible } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: story2Ref, inView: story2Visible } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: story3Ref, inView: story3Visible } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: story4Ref, inView: story4Visible } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: peopleTitleRef, inView: peopleTitleVisible } = useInView();
  const { ref: people1Ref, inView: people1Visible } = useInView();
  const { ref: people2Ref, inView: people2Visible } = useInView();

  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto pb-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div
          className="w-screen max-w-[2000px] h-[386px] mx-auto"
          ref={sliderRef}
        >
          {sliderVisible && <HomeSlider items={items} />}
        </div>
        <div
          className="w-full h-fit mt-1 pt-4 flex items-center justify-center text-[50px] font-bold font-Source-Sans-3  text-[#0D3745]"
          ref={storyTitleRef}
        >
          {storyTitleVisible && (
            <h2 className="text-center animate-item-show">
              STORY BEHIND THE FAVOR
            </h2>
          )}
        </div>
        <div className="w-[1120px] h-fit px-4 mx-auto">
          <div ref={story1Ref}>
            {story1Visible && (
              <Story
                reverse={false}
                image={stories[0].image}
                title={stories[0].title}
                subtitle={stories[0].subtitle}
                paragraph={stories[0].paragraph}
              />
            )}
          </div>
          <div ref={story2Ref}>
            {story2Visible && (
              <Story
                reverse={true}
                image={stories[1].image}
                title={stories[1].title}
                subtitle={stories[1].subtitle}
                paragraph={stories[1].paragraph}
              />
            )}
          </div>
          <div ref={story3Ref}>
            {story3Visible && (
              <Story
                reverse={false}
                image={stories[2].image}
                title={stories[2].title}
                subtitle={stories[2].subtitle}
                paragraph={stories[2].paragraph}
              />
            )}
          </div>
          <div ref={story4Ref}>
            {story4Visible && (
              <Story
                reverse={true}
                image={stories[3].image}
                title={stories[3].title}
                subtitle={stories[3].subtitle}
                paragraph={stories[3].paragraph}
              />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center my-3 pt-8">
          <hr className="w-[792px] border-[1px] border-[#0D3745]" />
        </div>
        <div
          className="w-[1120px] h-[100px] py-4 flex items-center justify-center text-[50px] font-bold font-Source-Sans-3  text-[#0D3745]"
          ref={peopleTitleRef}
        >
          {peopleTitleVisible && (
            <p className="animate-item-show">Loyal Customer</p>
          )}
        </div>
        <div className="w-[1120px] h-fit pb-6 mx-auto">
          <div className="flex flex-row justify-center gap-4" ref={people1Ref}>
            {members.slice(0, 2).map((member) => (
              <div>
                {people1Visible && (
                  <MemberCard
                    id={member.id}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                  />
                )}
              </div>
            ))}
          </div>
          <div
            className="flex flex-row justify-center mt-6 gap-4"
            ref={people2Ref}
          >
            {members.slice(2, 5).map((member) => (
              <div>
                {people2Visible && (
                  <MemberCard
                    id={member.id}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
