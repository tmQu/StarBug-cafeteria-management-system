const Story = ({ reverse = "false", image, title, subtitle, paragraph }) => {
  return (
    <div
      className={`w-[90%] h-full animate-item-show flex justify-center gap-12 mx-auto ${
        reverse ? "flex-row-reverse" : "flex-row"
      } sm:flex-col sm:gap-4`}
    >
      <div className="w-[50%] sm:w-full h-[460px] sm:h-fit sm:pb-5 text-[#0D3745] flex flex-col justify-center">
        <p className="text-2xl font-bold">{title}</p>
        <p className="max-w-[420px] text-7xl sm:text-5xl font-bold">
          {subtitle}
        </p>
        <p className="h-auto text-justify">{paragraph}</p>
      </div>
      <img
        className="w-[50%] sm:w-full h-[460px] sm:h-[400px] object-cover bg-white shadow-lg"
        src={image}
        alt="img"
      />
    </div>
  );
};
export default Story;
