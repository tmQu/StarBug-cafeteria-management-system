const AddToCartButton = ({ Price = "0" }) => {
  return (
    <button className="w-[370px] h-[40px] pt-0.5 text-white bg-[#BE2623] border rounded-xl mx-auto flex flex-row justify-center items-center">
      {Price} VND - Add to cart
    </button>
  );
};

export default AddToCartButton;
