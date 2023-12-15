import SizeSelect from "../itemsDetail/sizeSelect";
import ToppingSelect from "../itemsDetail/toppingSelect";
import AddToCartButton from "../buttons/addToCartButton";
import NoteHere from "../itemsDetail/noteHere";
import ProductInfo from "../itemsDetail/productInfo";

const AddToCartPopup = () => {
  return (
    <div className="w-[500px] h-fit p-4 rounded-lg shadow-lg flex flex-col gap-4 pb-4 bg-[#F3F2ED]">
      <div className="w-full h-fit flex flex-row justify-between pb-2 border-b-2 border-b-[#D9D9D9]">
        <img
          className="w-5 h-5"
          alt="close-button"
          src="/assets/gray-close-icon.png"
        ></img>
        <h2 className="w-full text-center pr-5 font-semibold">Add to Cart</h2>
      </div>
      <div className="h-fit flex flex-row justify-center items-center">
        <div className="w-1/2 h-fit flex justify-center">
          <img
            className="w-32 object-cover shadow-lg rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.01]"
            src="./assets/StarBug_files/StarBug_square.jpg"
            alt="pop-up-img"
          />
        </div>
        <div className="w-1/2 h-fit flex mx-auto text-sm justify-center items-center my-auto px-2">
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            aperiam sunt praesentium perspiciatis at deserunt velit architecto
            ipsa quis?
          </p>
        </div>
      </div>
      <div className="w-full flex px-6">
        <ProductInfo />
      </div>
      <div className="w-full h-fit flex justify-center">
        <NoteHere />
      </div>
      <div className="w-full h-fit flex flex-col justify-center rounded-lg border-[#F4F2EC] border mt-auto overflow-hidden">
        <div className="w-[400px] h-fit mx-auto">
          <SizeSelect />
        </div>
        <div className="w-[400px] h-fit mx-auto -mt-2.5">
          <ToppingSelect />
        </div>
      </div>
      <div className="w-[400px] mx-auto">
        <AddToCartButton />
      </div>
    </div>
  );
};

export default AddToCartPopup;
