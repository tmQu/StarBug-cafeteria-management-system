import { Carousel } from "@material-tailwind/react";
import items from "../api/slider.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HomeSlider = () => {
  const itemsData = items.items;

  const apiUrl = `https://star-bug-cafeteria-management-system.vercel.app/slider/all`;
  const { data } = useQuery({
    queryKey: ["sliders"],
    queryFn: () => axios.get(apiUrl).then((res) => res),
    staleTime: 1000 * 10,
    retry: 3,
  });
  console.log(data?.data);

  return (
    <Carousel transition={{ duration: 1 }} navigation={() => <div></div>}>
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
