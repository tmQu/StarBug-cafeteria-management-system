import { Carousel } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const HomeSlider = () => {
  const apiUrl = `https://star-bug-cafeteria-management-system.vercel.app/slider/all`;
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["sliders"],
    queryFn: () => axios.get(apiUrl).then((res) => res),
    staleTime: 1000 * 10,
    retry: 3,
  });

  return (
    <div>
      {isLoading ? (
        <div className="w-fit h-[370px] mx-auto flex flex-row gap-1 bg-[#506e79] mt-2 p-3 pt-2 rounded-lg">
          <Skeleton
            baseColor="#6d8790"
            borderRadius={12}
            height={270}
            width={300}
            count={1}
          />
          <div>
            <Skeleton
              baseColor="#6d8790"
              borderRadius={12}
              height={50}
              width={800}
              count={2}
            />
            <Skeleton
              baseColor="#6d8790"
              borderRadius={12}
              height={160}
              width={800}
              count={1}
            />
          </div>
        </div>
      ) : (
        <Carousel
          className="w-full max-w-[1500px] mx-auto shadow-xl"
          transition={{ duration: 1 }}
          navigation={() => <div></div>}
        >
          {isSuccess &&
            data?.data.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt="Slider"
                className="h-full w-full object-fill"
              />
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default HomeSlider;
