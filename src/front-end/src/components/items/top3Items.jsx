import Top3Item from "./top3Item";
import items from "../../api/items";

const Top3Items = () => {
  const top3Items = items.filter((item) => item.bestSeller === "Top");

  return (
    <div
      className="w-fit h-fit mx-auto flex flex-row
      xl:flex-col xl:gap-4"
    >
      <div className="w-auto flex flex-row sm:flex-col xl:gap-4 ">
        {top3Items.slice(0, 2).map((item) => (
          <div className="mx-2 xl:mx-0">
            <Top3Item
              id={item.id}
              name={item.name}
              price={item.price}
              rate={item.rate}
              image={item.image}
            />
          </div>
        ))}
      </div>
      <div className="mx-2 xl:mx-0 xl:col-span-2">
        <Top3Item
          id={top3Items[2].id}
          name={top3Items[2].name}
          price={top3Items[2].price}
          rate={top3Items[2].rate}
          image={top3Items[2].image}
        />
      </div>
    </div>
  );
};
export default Top3Items;
