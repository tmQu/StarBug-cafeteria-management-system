import Item from "../components/item";
import Promotions from "../components/promotions";

const Home = () => {
  // we will fetch items data from server

  const images = [
    {
      id: 1,
      image: "#"
    },
    {
      id: 2,
      image: "#"
    },
  ];

  const items = [
    { name: "item1", price: 1, image: "image1" },
    { name: "item2", price: 2, image: "image2" },
    { name: "item3", price: 3, image: "image3" },
    { name: "item4", price: 4, image: "image4" },
    { name: "item5", price: 5, image: "image5" },
    { name: "item6", price: 6, image: "image6" },
    { name: "item7", price: 7, image: "image7" },
    { name: "item8", price: 8, image: "image8" },
    { name: "item9", price: 9, image: "image9" },
    { name: "item10", price: 10, image: "image10" },
    { name: "item11", price: 11, image: "image11" },
    { name: "item12", price: 12, image: "image12" },
  ];
  return (
    <div className="w-screen h-fit mx-auto py-2 bg-blue-400">
      <div className="w-[1120px] mx-auto bg-[#F4F2EC]">
        <div className="w-full h-[300px] bg-slate-400">slider here</div>
        <div className="w-930 h-[240px] flex items-center mx-[95px] justify-between mt-[-70px] ">
          {images.map((image) => (
            <Promotions image={image.image} />
          ))}
        </div>
        <div className="w-full h-[385px] mt-2 bg-yellow-300">
          {" "}
          Top 3 items here
        </div>
        <div className="w-[930px] h-fit mx-auto mt-2 bg-[whitesmoke] grid grid-cols-4 grid-rows-3 gap-6">
          {items.map((item) => (
            <Item name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
        <div className="w-[300px] h-[40px] mx-auto mt-2 bg-lime-400">
          Xem tat ca san pham button
        </div>
      </div>
    </div>
  );
};

export default Home;
