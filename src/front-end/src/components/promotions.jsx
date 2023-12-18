import promotion from "../api/promotion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Promotions = () => {
  const itemsData = promotion.items;

  const apiUrl = `https://star-bug-cafeteria-management-system.vercel.app/promotion/all`;
  const { data } = useQuery({
    queryKey: ["promotions"],
    queryFn: () => axios.get(apiUrl).then((res) => res),
    staleTime: 1000 * 10,
    retry: 3,
  });
  console.log(data?.data);

  return (
    <div className="relative -top-16 flex flex-row sm:flex-col justify-center items-center gap-6 sm:gap-4">
      {itemsData.length !== 0 &&
        itemsData.map((image) => (
          <img
            key={image.id}
            className="w-[445px] h-[220px] xl:w-[350px] rounded-xl shadow-xl"
            alt="promotions"
            src={image.image}
          />
        ))}
    </div>
  );
};

export default Promotions;
