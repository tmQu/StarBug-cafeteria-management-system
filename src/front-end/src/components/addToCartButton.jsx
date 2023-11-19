const AddToCartButton = ({ Price = '0' }) => {
    return (
        <div className="w-[370px] h-[40px] bg-[#BE2623] py-[10px] px-[124px] border rounded-full mx-auto justify-center items-center ">
            <div className="w-[120px] h-[20px] flex text-[#F2F3ED] text-[16px] font-Source-Sans-3 font-semibold mx-auto">
                <div>
                    ${Price} - Add to cart
                </div>
            </div>
        </div >
    )
};

export default AddToCartButton;