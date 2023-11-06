import { Carousel } from "@material-tailwind/react";

const HomeSlider = (props) => {
  const items = props.items;

  return (
    <Carousel
      transition={{ duration: 1 }}
      className=""
      navigation={() => <div></div>}
    >
      {items.map((item) => (
        <img
          src={item.image}
          alt="slider-img"
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
};

export default HomeSlider;
