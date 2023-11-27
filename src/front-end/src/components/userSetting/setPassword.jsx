import InfoBox from "./infobox";

const handleCancle = () => {
  console.log("Cancle");
}

const handleSave = () => {
  console.log("Save");
}

const SetPassword = () => {
  return (
    <div className="w-[1050px] h-[502px] mx-auto mt-16 mb-8">
      <div className="w-[995px] flex justify-between mx-auto">
        <span className="text-[38px] font-bold text-[#0E3746]">BASIC INFO</span>
        <div className="w-[338px] flex justify-between">
          <button
            className="w-[158px] h-[60px] border-2 border-[#BE2623] rounded-lg text-[#0E3746] text-[28px]"
            type="reset"
            onClick={handleCancle}
          >
            CANCEL
          </button>
          <button
            className="w-[158px] h-[60px] bg-[#BE2623] rounded-lg text-[#F3F2ED] text-[28px]"
            type="submit"
            onClick={handleSave}
          >
            SAVE
          </button>
        </div>
      </div>
      <div className="py-4 mx-auto">
        <hr className="ml-[27px] w-[995px] border-[1px] border-[#9F9FA8]" />
      </div>
      <div className="w-[995px] justify-between mx-auto">
        <InfoBox className="w-full h-[69px]" title="Recent Password" info="Recent Password" hidden="true" type="password" />
        <InfoBox className="w-full h-[69px]" title="New Password" info="New Password"  hidden="true" type="password"/>
        <InfoBox className="w-full h-[69px]" title="Confirm New Password" info="Confirm New Passwor" hidden="true" type="password" />
      </div>
    </div>
  );
}

export default SetPassword;