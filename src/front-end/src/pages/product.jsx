import SizeSelect from "../components/sizeSelect";
import ToppingSelect from "../components/toppingSelect";
import AddToCartButton from "../components/addToCartButton";

const Product = () => {
    return (
        <div className="w-screen h-fit mx-auto">
            <div className="w-screen mx-auto bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
                <div className="w-[900px] h-[690px] bg-white mx-auto rounded-xl shadow-2xl">
                    <div className="w-[400px] h-[53px] ml-auto mr-2.5 gap-[14px] my-4 flex">
                        <div className="w-[52px] h-[52px] bg-[#D9D9D9] flex justify-center items-center rounded-tl-[5px] rounded-bl-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                                <g opacity="0.5">
                                    <path d="M10.2264 2.6257V3.85151H5.32324V2.6257V1.3999H10.2264V2.6257Z" stroke="black" stroke-width="1.36203" stroke-linejoin="round" />
                                    <path d="M5.32253 2.62573H1.03223V11.8192V19.787H14.516V17.3354" stroke="black" stroke-width="1.36203" stroke-linejoin="round" />
                                    <path d="M10.2256 2.62573H14.5159V11.8192V14.8838" stroke="black" stroke-width="1.36203" stroke-linejoin="round" />
                                    <path d="M7.16211 17.3354H14.5169H16.9685V14.8838H14.5169H7.16211V17.3354Z" stroke="black" stroke-width="1.36203" stroke-linejoin="round" />
                                    <path d="M7.16021 14.8838L4.0957 16.1096L7.16021 17.3354" stroke="black" stroke-width="1.36203" stroke-linejoin="round" />
                                    <path d="M2.87012 6.91602H12.6765" stroke="black" stroke-width="1.36203" stroke-linejoin="round" />
                                    <path d="M2.87012 9.36768H12.6765" stroke="black" stroke-width="1.36203" stroke-linejoin="round" />
                                    <path d="M2.87012 11.8191H12.6765" stroke="black" stroke-width="1.36203" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div className="h-[52px] border-none layout-none px-0 mx-0 hover:border-[blue]">
                            <input
                                className="w-[348px] h-[52px] border-none layout-none text-[16px] px-4 mx-0 placeholder-[Note here]"
                            />
                        </div>
                    </div>
                    <div className="w-[400px] h-[fit] ml-auto mr-4 rounded-lg border-[#F4F2EC] border mt-auto overflow-hidden">
                        <div className="w-[400px] h-[100px] mx-auto p-0">
                            <SizeSelect />
                        </div>
                        <div className="w-[400px] h-fit mx-auto -mt-2.5 p-0">
                            <ToppingSelect />
                        </div>
                    </div>
                    <div className="w-[400px] mx-auto py-2 mr-2.5">
                        <AddToCartButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;