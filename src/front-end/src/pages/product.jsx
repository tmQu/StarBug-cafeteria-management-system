import SizeSelect from "../components/sizeSelect";
import ToppingSelect from "../components/toppingSelect";
import AddToCartButton from "../components/addToCartButton";
import NoteHere from "../components/noteHere";
import Star from "../components/star";
import PicItem from "../components/picItem";
import ProductInfo from "../components/productInfo";

const Product = () => {
  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto py-10 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-[900px] h-[690px] bg-white mx-auto rounded-xl overflow-hidden shadow-2xl flex">
          <div className="w-[450px] h-[690px] flex flex-col">
            <div className="w-[400px] h-[500px]">
              <PicItem />
            </div>
            <div className="w-[400px] h-[126px] flex mx-auto text-[16px] justify-center items-center text-justify my-auto px-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              aperiam sunt praesentium perspiciatis at deserunt velit architecto
              ipsa quis? Asperiores, excepturi? Eaque perferendis aspernatur
              beatae soluta neque omnis at autem!
            </div>
          </div>
          <div className="w-[450px] h-[690px] py-2 flex flex-col">
            <div className="w-fit h-fit flex mr-auto ml-2 mt-3">
              <Star />
            </div>
            <div className="w-fit flex ml-auto mr-4 my-2">
              <ProductInfo />
            </div>
            <div className="w-[400px] h-[53px] ml-auto mr-4">
              <NoteHere />
            </div>
            <div className="w-[400px] h-[fit] ml-auto mr-4 rounded-lg border-[#F4F2EC] border mt-auto overflow-hidden">
              <div className="w-[400px] h-fit mx-auto">
                <SizeSelect />
              </div>
              <div className="w-[400px] h-fit mx-auto -mt-2.5">
                <ToppingSelect />
              </div>
            </div>
            <div className="w-[400px] mx-auto py-2 mr-2.5">
              <AddToCartButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
