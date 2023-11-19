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
            <div className="w-screen mx-auto bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
                <div className="w-[900px] h-[690px] bg-white mx-auto rounded-xl shadow-2xl flex">
                    <div className="w-[450px] h-[690px] flex flex-col">
                        <div className="w-[400px] h-[500px]">
                            <PicItem />
                        </div>
                    </div>
                    <div className="w-[450px] h-[690px] py-2 flex flex-col">
                        <div className="w-[135px] h-[20px] flex mr-auto ml-2">
                            <Star />
                        </div>
                        <div className="w-fit flex ml-auto mr-4 py-2">
                            <ProductInfo/>
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
