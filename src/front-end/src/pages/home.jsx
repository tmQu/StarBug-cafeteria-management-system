import Item from "../components/items/item";
import IntroCards from "../components/cards/introCards";
import Top3Items from "../components/items/top3Items";
import HomeSlider from "../components/slider";
import Promotions from "../components/promotions";
import ShowAllButton from "../components/buttons/showAllButton";

import items from "../api/items";
import images from "../api/images";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useInView } from "react-intersection-observer";

const Home = () => {
  // we will fetch items data from serverconst apiUrl = `https://fakestoreapi.com/products?limit=12`;

  // const apiUrl = `http://localhost:4000/item/all`;
  // const { data } = useQuery({
  //   queryKey: ["items"],
  //   queryFn: () => axios.get(apiUrl).then((res) => res),
  //   staleTime: 1000 * 5,
  //   retry: 3,
  // });
  // console.log(data);

  const { ref: sliderRef, inView: sliderVisible } = useInView();
  const { ref: promotionRef, inView: promotionVisible } = useInView();
  const { ref: introCardsRef, inView: introCardsVisible } = useInView();
  const { ref: bestSellerTitleRef, inView: bestSellerTitleVisible } =
    useInView();
  const { ref: top3ItemsRef, inView: top3ItemsVisible } = useInView();
  const { ref: ourProductTitleRef, inView: ourProductTitleVisible } =
    useInView();
  const { ref: itemsRef1, inView: itemsVisible1 } = useInView();
  const { ref: itemsRef2, inView: itemsVisible2 } = useInView();
  const { ref: itemsRef3, inView: itemsVisible3 } = useInView();
  const { ref: showButtonRef, inView: showButtonVisible } = useInView();

  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div
          className="w-screen max-w-[2000px] h-[386px] mx-auto"
          ref={sliderRef}
        >
          {sliderVisible && <HomeSlider items={items} />}
        </div>
        <div className="h-[160px]">
          <div
            className="w-[930px] h-[210px] flex items-center mx-auto justify-between relative -top-12"
            ref={promotionRef}
          >
            {promotionVisible && <Promotions images={images} />}
          </div>
        </div>
        <div
          className="w-full h-[320px] px-5 mt-2 flex flex-col justify-center items-center"
          ref={introCardsRef}
        >
          {introCardsVisible && (
            <p className="my-2 text-3xl font-semibold text-[#0D3746] animate-item-show">
              Our values
            </p>
          )}
          {introCardsVisible && <IntroCards />}
        </div>
        <div
          className="w-full h-10 mt-4 flex flex-row justify-center items-center"
          ref={bestSellerTitleRef}
        >
          {bestSellerTitleVisible && (
            <p className="pt-2 my-2 text-3xl font-semibold text-[#0D3746] animate-item-show">
              Best sellers
            </p>
          )}
        </div>
        <div className="w-full h-[385px] mt-4" ref={top3ItemsRef}>
          {top3ItemsVisible && <Top3Items />}
        </div>
        <div
          className="w-full h-10 mt-4 flex flex-row justify-center items-center"
          ref={ourProductTitleRef}
        >
          {ourProductTitleVisible && (
            <p className="pt-2 my-2 text-3xl font-semibold text-[#0D3746] animate-item-show">
              Our products
            </p>
          )}
        </div>
        <div className="w-[930px] h-fit mx-auto mt-4 ">
          <div className="flex flex-col gap-6">
            <div ref={itemsRef1}>
              {itemsVisible1 && (
                <div className="w-fit h-fit flex flex-row gap-6 animate-item-show">
                  {items.slice(0, 4).map((item) => (
                    <Item
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      rate={item.rate}
                      image={item.image}
                    />
                  ))}
                </div>
              )}
            </div>
            <div ref={itemsRef2}>
              {itemsVisible2 && (
                <div className="w-fit h-fit flex flex-row gap-6 animate-item-show">
                  {items.slice(4, 8).map((item) => (
                    <Item
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      rate={item.rate}
                      image={item.image}
                    />
                  ))}
                </div>
              )}
            </div>
            <div ref={itemsRef3}>
              {itemsVisible3 && (
                <div className="w-fit h-fit flex flex-row gap-6 animate-item-show">
                  {items.slice(8, 12).map((item) => (
                    <Item
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      rate={item.rate}
                      image={item.image}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="py-6" ref={showButtonRef}>
          {showButtonVisible && <ShowAllButton />}
        </div>
      </div>
    </div>
  );
};

export default Home;
