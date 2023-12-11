const Promotions = (props) => {
  const { images } = props;

  return (
    <div className="relative -top-16 flex flex-row sm:flex-col justify-center items-center gap-6 sm:gap-4 animate-item-show">
      {images.length !== 0 &&
        images.map((image) => (
          <img
            key={image.id}
            className="w-[445px] h-[220px] xl:w-[350px] rounded-xl shadow-xl"
            alt="promotions"
            src={image.path}
          />
        ))}
    </div>
  );
};

export default Promotions;
