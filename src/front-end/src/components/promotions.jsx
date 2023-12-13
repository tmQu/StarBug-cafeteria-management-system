import promotion from "../api/promotion";

const Promotions = () => {
  const itemsData = promotion.items

  return (
    <div className="relative -top-16 flex flex-row sm:flex-col justify-center items-center gap-6 sm:gap-4 animate-item-show">
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
