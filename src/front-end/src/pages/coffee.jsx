import Story from "../components/story";
import HomeSlider from "../components/slider";
import items from "../api/items";
import stories from "../staticData/stories.json";
import Item from "../components/items/item";


const Coffee = (props) => {
  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-screen max-w-[2000px] h-[386px] mx-auto">
          <HomeSlider items={items} />
        </div>
        <div className="w-[930px] mx-auto">
          <div  clasName="h-[460px]">
            <Story
              reverse={true}
              image={stories[0].image}
              title={stories[0].title}
              subtitle={stories[0].subtitle}
              paragraph={stories[0].paragraph}
            />
          </div>
        </div>
        <div className="w-[930px] h-fit mx-auto py-4 grid grid-cols-4 grid-rows-3 gap-6">
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

export default Coffee;
