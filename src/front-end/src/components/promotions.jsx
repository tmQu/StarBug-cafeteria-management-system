import { useQuery } from "@tanstack/react-query";
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

  return (
    <div className="relative -top-16 flex flex-row sm:flex-col justify-center items-center gap-6 sm:gap-4">
      {isLoading ? (
        <>
          <div className="w-fit h-fit bg-[#254b58] p-2 pt-1 rounded-xl">
            <Skeleton
              baseColor="#6d8790"
              borderRadius={12}
              height={56}
              width={445}
              count={3}
            />
          </div>
          <div className="w-fit h-fit bg-[#254b58] p-2 pt-1 rounded-xl">
            <Skeleton
              baseColor="#6d8790"
              borderRadius={12}
              height={56}
              width={445}
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
