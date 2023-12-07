const MemberCard = (props) => {
  const { id, name, role, image } = props;
  return (
    <div
      className="w-[300px] xl:w-[240px] h-[385px] xl:h-[330px] bg-[#E3E0CC] px-2 rounded-xl shadow-xl flex flex-col items-center
    [transition:transform_0.5s_ease] hover:cursor-pointer hover:scale-[1.01] animate-item-show"
    >
      <img
        className="w-full h-48 xl:h-40 m-2 rounded-lg object-cover"
        alt="member img"
        src={image}
      ></img>
      <div className="w-fit h-fit mb-1 pt-4 flex flex-col justify-center items-center">
        <p className="w-fit text-xl mx-auto text-[#0D3745] font-semibold">
          {name}
        </p>
        <p className="w-fit -mt-1 text-base mx-auto text-[#0D3745] font-medium">
          {role}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
