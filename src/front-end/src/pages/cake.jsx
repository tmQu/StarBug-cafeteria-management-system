import Story from "../components/story";
import HomeSlider from "../components/slider";
import items from "../api/items";
import stories from "../staticData/stories.json";
import Item from "../components/item";
import ShowAllButton from "../components/showAllButton";


const Cake = (props) => {
  return (
    <div className="w-screen h-fit mx-auto py-3 my-3">
      <div className="w-[1120px] flex-col mx-auto bg-[#F4F2EC]">
        <div className="w-[1120px] h-[300px]">
          <HomeSlider items={items} />
        </div>
        <div className="w-[930px] mx-auto">
          <div  clasName="h-[460px]">
            <Story
              reverse={false}
              image={stories[0].image}
              title={stories[0].title}
              subtitle={stories[0].subtitle}
              paragraph={stories[0].paragraph}
            />
          </div>
        </div>
        <div className="w-[930px] h-fit mx-auto my-4 grid grid-cols-4 grid-rows-3 gap-6">
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
      </div>
    </div>
  );
};

export default Cake;
