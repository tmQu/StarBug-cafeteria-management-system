import Item from "./item";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import items from "../../api/items";

const ItemsContainer = ({ route }) => {
  const limit = route === "/" ? 12 : 16;
  const apiUrl = `http://localhost:4000/item/all`;

  const { data } = useQuery({
    queryKey: [`${limit} ${route} items`],
    queryFn: () => axios.get(apiUrl).then((res) => res),
    staleTime: 1000 * 5,
    retry: 3,
  });
  console.log(data);

  const shuffledItems = items.sort(() => Math.random() - 0.5);

  return (
    <div
      className="w-auto h-auto mx-auto grid grid-cols-4 gap-6
      xl:w-fit xl:h-auto xl:mx-auto xl:grid xl:grid-cols-3 xl:gap-4 xl:justify-items-center
      sm:grid sm:!grid-cols-2 
    "
    >
      {shuffledItems.slice(0, limit).map((item) => (
        <Item
          id={item.id}
          name={item.name}
          price={item.price}
          rate={item.rate}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
