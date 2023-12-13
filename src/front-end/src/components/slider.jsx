import { Carousel } from "@material-tailwind/react";
import items from "../api/slider.js";

const HomeSlider = () => {
  const itemsData = items.items
  return (
    <Carousel
      transition={{ duration: 1 }}
      className="animate-item-show"
      navigation={() => <div></div>}
    >
      {itemsData.map((item) => (
        <img
          key={item.id} // Added a unique key for each image
          src={item.image}
          alt="slider-img"
          className="h-full w-full object-fill"
        />
      ))}
    </Carousel>
  );
};

export default HomeSlider;
