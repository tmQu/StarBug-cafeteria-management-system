const Promotions = (props) => {
  const { images } = props; // Sửa ở đây

  return (
    <div className="flex flex-row">
      {images.length !== 0 &&
        images.map((image) => (
          <img
            key={image.id}
            className="w-[445px] h-[220px] mx-4 rounded-xl shadow-xl"
            alt="promotions"
            src={image.path}
          />
        ))}
    </div>
  );
};

export default Promotions;
