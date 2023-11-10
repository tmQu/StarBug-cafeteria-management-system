const Story = ({reverse='false', image, title, subtitle, paragraph}) => {

  return (
    <div className={`w-[960px] h-full flex justify-center gap-14 mx-auto py-8 ${reverse ? "flex-row-reverse ":"flex-row"}`}>
      <div className="w-[400px] h-[460px] text-[#0D3745] flex flex-col justify-center">
        <p className="text-2xl font-bold">{title}</p>
        <p className="max-w-[420px] text-7xl font-bold">{subtitle}</p>
        <p className="h-auto text-justify">
          {paragraph}
        </p>
      </div>
      <img
        className="w-[460px] h-[460px] bg-white shadow-lg"
        src={image}
        alt="picture"
      />
      </div>
  );
};
export default Story;
