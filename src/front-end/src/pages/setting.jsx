import SetAvatar from "../components/userSetting/setAvatar";
import SetBasicInfo from "../components/userSetting/setBasicInfo";
import SetPassword from "../components/userSetting/setPassword";

const Setting = () => {
  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto py-10 bg-[#F4F2EC]">
        <div className="w-min-[1050px] h-fit mx-auto">
          <SetAvatar />
          <SetBasicInfo />
          <SetPassword />
        </div>
      </div>
    </div>
  );
};

export default Setting;
