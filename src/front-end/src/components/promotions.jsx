import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Promotions = () => {
  const apiUrl = `https://star-bug-cafeteria-management-system.vercel.app/promotion/all`;

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["promotions"],
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
      const maxWidth = 445;
      const width = windowWidth < maxWidth ? windowWidth - 60 : maxWidth - 90;
      setSkeletonWidth(width);
    };

    updateSkeletonWidth();

    window.addEventListener("resize", updateSkeletonWidth);

    return () => {
      window.removeEventListener("resize", updateSkeletonWidth);
    };
  }, []);

  return (
    <div className="relative -top-16 xl:-top-20 sm:!-top-16 flex flex-row sm:flex-col justify-center items-center gap-6 sm:gap-4">
      {isLoading ? (
        <>
          <div
            className="h-fit bg-[#D8D4BA] py-1 rounded-xl z-50"
            style={{ width: skeletonWidth }}
          >
            <Skeleton
              baseColor="#6d8790"
              borderRadius={12}
              height={56}
              width={skeletonWidth}
              style={{ scale: "0.95" }}
              count={3}
            />
          </div>
          <div
            className="w-fit h-fit bg-[#D8D4BA] py-1 rounded-xl z-50"
            style={{ width: skeletonWidth }}
          >
            <Skeleton
              baseColor="#6d8790"
              borderRadius={12}
              height={56}
              width={skeletonWidth}
              style={{ scale: "0.95" }}
              count={3}
            />
          </div>
        </>
      ) : (
        <>
          {isSuccess === true &&
            data?.data.map((image) => (
              <img
                key={image._id}
                className="w-[445px] h-[220px] xl:w-[350px] rounded-xl shadow-xl"
                alt="promotions"
                src={image.image}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default Promotions;
