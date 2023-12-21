const PicItem = ({ image }) => {
  return (
    <div className="w-[450px] xl:w-full h-fit flex flex-col justify-center items-center">
      <div className="w-[400px] sm:w-[90%] h-[320px] flex justify-center items-center mt-[60px]">
        <img
          className="w-[370px] h-[370px] object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.01]"
          src={image}
          alt="Product"
        />
      </div>
      <div className="flex flex-row h-[80px] w-[400px] overflow-hidden gap-2 mt-[38px] justify-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <img
            key={i}
            className="w-[80px] h-[80px] object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.01]"
            src={image}
            alt="Product"
          />
        ))}
      </div>
    </div>
  );
};

export default PicItem;
