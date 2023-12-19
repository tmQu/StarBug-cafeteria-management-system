import Item from "./item";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ItemsContainer = ({ route }) => {
  //page home have 12 items, other pages have 16 items
  const limit = route === "/" ? 12 : 16;

  const apiUrl = `https://star-bug-cafeteria-management-system.vercel.app/item/filter?topItem=false`;
  const { data } = useQuery({
    queryKey: [`${route}-items-container`], // unique for each page
    queryFn: () => axios.get(apiUrl).then((res) => res),
    staleTime: 1000 * 10,
    retry: 3,
  });
  // console.log("items container", data?.data);

  return (
    <div
      className="w-auto h-auto mx-auto grid grid-cols-4 gap-6
      xl:w-fit xl:h-auto xl:mx-auto xl:grid xl:grid-cols-3 xl:gap-4 xl:justify-items-center
      sm:grid sm:!grid-cols-2 
    "
    >
      {data?.data.slice(0, limit).map((item) => (
        <Item
          id={item.id}
          name={item.name}
          price={item.price}
          rate={item.avgRate}
          image={item.img}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
