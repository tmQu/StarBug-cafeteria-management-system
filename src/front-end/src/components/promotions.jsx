import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Promotions = () => {
  const apiUrl = `https://star-bug-cafeteria-management-system.vercel.app/promotion/all`;

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["promotions"],
    queryFn: () => axios.get(apiUrl).then((res) => res),
    staleTime: 1000 * 10,
    retry: 3,
  });

  console.log("Loading", isLoading);
  console.log("Success", isSuccess);

  return (
    <div className="relative -top-16 flex flex-row sm:flex-col justify-center items-center gap-6 sm:gap-4">
      {isLoading ? (
        <SkeletonTheme
          baseColor="#5294e0"
          highlightColor="#96c7ff"
          borderRadius="0.5rem"
          duration={4}
        >
          <Skeleton height="100%" width="100%" count={2} />
        </SkeletonTheme>
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
