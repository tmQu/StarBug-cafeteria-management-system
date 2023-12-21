import InfoBox from "./infoBox";

const handleCancle = () => {
  console.log("Cancle");
};

const handleSave = () => {
  console.log("Save");
};

const SetPassword = () => {
  return (
    <div className="w-full h-fit mx-auto mt-12 sm:mt-6">
      <div className="w-full flex justify-between mx-auto">
        <span className="text-2xl flex justify-start items-center font-bold text-[#0E3746]">
          BASIC INFO
        </span>
        <div className="w-[338px] sm:w-full flex flex-row sm:flex-col sm:items-end justify-between gap-2">
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
      <div className="w-full xl:flex xl:flex-col justify-between xl:items-center mx-auto">
        <InfoBox
          className="w-[400px] sm:w-full h-8"
          title="Recent Password"
          info="Recent Password"
          hidden="true"
          type="password"
        />
        <InfoBox
          className="w-[400px] sm:w-full h-8"
          title="New Password"
          info="New Password"
          hidden="true"
          type="password"
        />
        <InfoBox
          className="w-[400px] sm:w-full h-8"
          title="Confirm New Password"
          info="Confirm New Passwor"
          hidden="true"
          type="password"
        />
      </div>
    </div>
  );
};

export default SetPassword;
