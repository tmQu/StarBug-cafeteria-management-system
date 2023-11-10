import Item from "../components/item";
import Top3Items from "../components/top3Items";
import HomeSlider from "../components/slider";
import Promotions from "../components/promotions";
import ShowAllButton from "../components/showAllButton";

import items from "../api/items";
import images from "../api/images";

const Home = () => {
  // we will fetch items data from server

  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto bg-[#F4F2EC]">
        <div className="w-screen max-w-[2000px] h-[386px] mx-auto">
          <HomeSlider items={items} />
        </div>
        <div className="h-[160px]">
          <div className="w-[930px] h-[210px] flex items-center mx-auto justify-between relative -top-12">
            <Promotions images={images} />
          </div>
        </div>
        <div className="w-full h-[385px] mt-2">
          <Top3Items />
        </div>
        <div className="w-[930px] h-fit mx-auto mt-2 grid grid-cols-4 grid-rows-3 gap-6">
          {items.map((item) => (
            <Item
              id={item.id}
              name={item.name}
              price={item.price}
              feature={item.feature}
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
