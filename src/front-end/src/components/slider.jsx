import { Carousel } from "@material-tailwind/react";
import { useState, useEffect } from "react";
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

  const [skeletonWidth, setSkeletonWidth] = useState(445); // Initial width for the skeleton

  useEffect(() => {
    const updateSkeletonWidth = () => {
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const maxWidth = 1200;
      const width = windowWidth < maxWidth ? windowWidth - 30 : maxWidth;
      setSkeletonWidth(width);
    };

    updateSkeletonWidth();

    window.addEventListener("resize", updateSkeletonWidth);

    return () => {
      window.removeEventListener("resize", updateSkeletonWidth);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <div className="w-fit h-[370px] mx-auto flex flex-row gap-1 bg-[#506e79] mt-2 p-3 pt-2 rounded-lg relative">
            <Skeleton
              baseColor="#6d8790"
              borderRadius={12}
              height={340}
              width={skeletonWidth - skeletonWidth / 20}
              count={1}
            />
          </div>
        </>
      ) : (
        <Carousel
          className="w-full max-w-[1600px] mx-auto shadow-xl sm:h-[180px]"
          transition={{ duration: 1 }}
          navigation={() => <div></div>}
        >
          {isSuccess &&
            data?.data.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt="Slider"
                className="h-full w-full object-fill sm:object-cover"
              />
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default HomeSlider;
