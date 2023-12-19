import { Carousel } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HomeSlider = () => {
  const apiUrl = `https://star-bug-cafeteria-management-system.vercel.app/slider/all`;
  const { data } = useQuery({
    queryKey: ["sliders"],
    queryFn: () => axios.get(apiUrl).then((res) => res),
    staleTime: 1000 * 10,
    retry: 3,
  });
  // console.log("sliders", data?.data);

  return (
    <Carousel transition={{ duration: 1 }} navigation={() => <div></div>}>
      {data?.data.map((item) => (
        <img
          key={item.id}
          src={item.image}
          alt="slider-img"
          className="h-full w-full object-fill"
        />
      ))}
    </Carousel>
  );
};

export default HomeSlider;
