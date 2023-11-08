const MemberCard = (props) => {
  const { id, name, role, image } = props;
  return (
    <div
      className="w-[300px] h-[385px] bg-[#E3E0CC] rounded-lg shadow-xl flex flex-col items-center
    [transition:transform_0.5s_ease] hover:cursor-pointer hover:scale-[1.04]"
    >
      <img
        className="w-full h-[75%] rounded-t-lg object-cover"
        alt="member img"
        src={image}
      ></img>
      <div className="w-fit mt-3">
        <p className="w-fit text-2xl mx-auto font-semibold">{name}</p>
        <p className="w-fit -mt-1 text-base mx-auto font-medium">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
