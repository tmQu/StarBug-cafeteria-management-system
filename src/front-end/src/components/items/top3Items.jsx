import Top3Item from "./top3Item";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const Top3Items = () => {
  const apiUrl = `https://star-bug-cafeteria-management-system.vercel.app/item/filter?topItem=true`;

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["top-3-items"],
    queryFn: () => axios.get(apiUrl).then((res) => res),
    staleTime: 1000 * 10,
    retry: 3,
  });

  return (
    <div className="w-fit mx-auto">
      {isLoading ? (
        <Top3ItemSkeleton />
      ) : (
        <div
          className="w-fit h-fit mx-auto flex flex-row
          xl:flex-col xl:gap-4"
        >
          <div className="w-auto flex flex-row xl:grid xl:!grid-cols-2 xl:gap-4 xl:!mx-0 sm:!flex sm:!flex-col">
            {isSuccess &&
              data?.data.slice(0, 3).map((item, index) => (
                <div className="mx-2 xl:mx-0">
                  <Top3Item
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    rate={item.avgRate}
                    image={item.img}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Top3Items;

const Top3ItemSkeleton = () => {
  const [skeletonWidth, setSkeletonWidth] = useState(445); // Initial width for the skeleton

  useEffect(() => {
    const updateSkeletonWidth = () => {
      const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const maxWidth = 290;
      const width = windowWidth < maxWidth ? windowWidth : maxWidth;
      setSkeletonWidth(width);
    };

    updateSkeletonWidth();

    window.addEventListener("resize", updateSkeletonWidth);

    return () => {
      window.removeEventListener("resize", updateSkeletonWidth);
    };
  }, []);

  return (
    <div className="w-fit flex flex-row gap-4 xl:grid xl:!grid-cols-2 xl:gap-4 xl:!mx-0 sm:!flex sm:!flex-col">
      <div className="w-fit h-fit flex mx-auto flex-col bg-[#D8D4BA] p-3 pt-2 rounded-xl">
        <Skeleton
          baseColor="#979482"
          borderRadius={12}
          height={276}
          width={skeletonWidth}
          count={1}
        />
        <Skeleton
          baseColor="#979482"
          borderRadius={12}
          height={42}
          width={skeletonWidth}
          count={3}
        />
      </div>
      <div className="w-fit h-fit flex flex-col bg-[#D8D4BA] p-3 pt-2 rounded-xl">
        <Skeleton
          baseColor="#979482"
          borderRadius={12}
          height={276}
          width={skeletonWidth}
          count={1}
        />
        <Skeleton
          baseColor="#979482"
          borderRadius={12}
          height={42}
          width={skeletonWidth}
          count={3}
        />
      </div>
      <div className="w-fit h-fit flex flex-col bg-[#D8D4BA] p-3 pt-2 rounded-xl">
        <Skeleton
          baseColor="#979482"
          borderRadius={12}
          height={276}
          width={skeletonWidth}
          count={1}
        />
        <Skeleton
          baseColor="#979482"
          borderRadius={12}
          height={42}
          width={skeletonWidth}
          count={3}
        />
      </div>
    </div>
  );
};
