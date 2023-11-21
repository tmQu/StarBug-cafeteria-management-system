const AddToCartButton = ({ Price = "0" }) => {
  return (
    <button className="w-[370px] h-[40px] text-white bg-[#BE2623] border rounded-full mx-auto flex flex-row justify-center items-center">
      {Price} VND - Add to cart
    </button>
  );
};

export default AddToCartButton;
