const AddToCartButton = ({ onClick }) => {
  return (
    <button
      className="w-[370px] h-[40px] pt-0.5 text-white bg-[#BE2623] border rounded-xl mx-auto flex flex-row justify-center items-center"
      onClick={onClick}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
