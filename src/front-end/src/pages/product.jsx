import SizeSelect from "../components/sizeSelect";
import ToppingSelect from "../components/toppingSelect";
import AddToCartButton from "../components/addToCartButton";

const Product = () => {
    return (
        <div className="w-screen h-fit mx-auto">
            <div className="w-screen mx-auto bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
                <div className="w-[900px] h-[690px] bg-white mx-auto rounded-xl shadow-2xl">
                    <div className="w-[400px] h-[fit] ml-auto mr-4 rounded-lg border-[#F4F2EC] border mt-auto overflow-hidden">
                        <div className="w-[400px] h-[100px] mx-auto p-0">
                            <SizeSelect />
                        </div>
                        <div className="w-[400px] h-fit mx-auto -mt-2.5 p-0">
                            <ToppingSelect />
                        </div>
                    </div>
                    <div className="w-[400px] mx-auto py-2">
                        <AddToCartButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;