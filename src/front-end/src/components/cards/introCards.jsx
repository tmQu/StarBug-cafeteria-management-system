import cards from "../../staticData/introCards";

const IntroCards = (props) => {
  const data = cards;

  return (
    <div className="w-full h-full flex flex-row gap-3 sm:flex-col sm:gap-4 justify-center items-center animate-item-show">
      {data.map((card) => (
        <div
          key={card.id}
          className="w-[200px] sm:w-[86%] h-fit pb-4 shadow-md rounded-xl border-2 border-[#0D3746]"
        >
          <img
            className="w-10 h-10 mx-auto mt-2 mb-1"
            alt={`img-card-${card.id}`}
            src={card.image}
          ></img>
          <h1 className="w-fit h-fit mx-auto text-[#0D3746] text-xl font-semibold">
            {card.title}
          </h1>
          <hr className="w-[90%] h-[1px] mx-auto border-none mt-1 mb-2 bg-[#0D3746]"></hr>
          <div className="w-full h-fit px-1">
            <p className="mx-auto sm:w-[90%] text-center text-[#0D3746] text-sm">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroCards;
