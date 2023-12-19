import Top3Item from "./top3Item";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Top3Items = () => {
  const apiUrl = `https://star-bug-cafeteria-management-system.vercel.app/item/filter?topItem=true`;

  const { data } = useQuery({
    queryKey: ["top-3-items"],
    queryFn: () => axios.get(apiUrl).then((res) => res),
    staleTime: 1000 * 10,
    retry: 3,
  });

  // console.log("tops3", data?.data);

  return (
    <div
      className="w-fit h-fit mx-auto flex flex-row
      xl:flex-col xl:gap-4"
    >
      <div className="w-auto flex flex-row sm:flex-col xl:gap-4 ">
        {data?.data.slice(0, 2).map((item, index) => (
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
      <div className="mx-2 xl:mx-0 xl:col-span-2">
        <Top3Item
          id={data?.data[2].id}
          name={data?.data[2].name}
          price={data?.data[2].price}
          rate={data?.data[2].avgRate}
          image={data?.data[2].img}
        />
      </div>
    </div>
  );
};
export default Top3Items;
