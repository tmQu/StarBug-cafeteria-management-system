import InfoBox from "./infobox";
import useAuth from "../../hooks/useAuth";

const handleCancle = () => {
  console.log("Cancle");
};

const handleSave = () => {
  console.log("Save");
};

const SetBasicInfo = () => {
  const { auth } = useAuth();

  return (
    <div className="w-full h-fit mx-auto mt-12">
      <div className="w-full flex justify-between mx-auto">
        <span className="text-2xl font-bold text-[#0E3746]">BASIC INFO</span>
        <div className="w-[338px] flex justify-between gap-2">
          <button
            className="w-32 h-8 pt-0.5 border-2 border-[#BE2623] rounded-lg text-[#0E3746] text-lg"
            type="reset"
            onClick={handleCancle}
          >
            CANCEL
          </button>
          <button
            className="w-32 h-8 pt-0.5 bg-[#BE2623] rounded-lg text-[#F3F2ED] text-lg"
            type="submit"
            onClick={handleSave}
          >
            SAVE
          </button>
        </div>
      </div>
      <div className="py-4 mx-auto">
        <hr className="w-[96%] mx-auto border-[1px] border-[#9F9FA8]" />
      </div>
      <div className="w-full flex flex-row xl:flex-col justify-between xl:items-center mx-auto">
        <InfoBox
          className="w-[400px] h-8"
          title="First Name"
          info={auth.name}
        />
        <InfoBox className="w-[400px] h-8" title="Last Name" info={auth.name} />
      </div>
      <div className="w-full flex flex-row xl:flex-col justify-between xl:items-center mx-auto">
        <InfoBox
          className="w-[400px] h-8"
          title="Phone Number"
          info="Phone Number"
        />
        <InfoBox className="w-[400px] h-8" title="Email" info={auth.email} />
      </div>
    </div>
  );
};

export default SetBasicInfo;
