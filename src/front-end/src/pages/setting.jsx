import SetAvatar from "../components/userSetting/setAvatar";
import SetBasicInfo from "../components/userSetting/setBasicInfo";
import SetPassword from "../components/userSetting/setPassword";

const Setting = () => {
  return (
    <div className="w-screen mx-auto overflow-hidden bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
      <div className="w-[950px] xl:w-[96%] bg-[#F4F2EC] my-4 p-8 mx-auto rounded-lg overflow-hidden shadow-lg">
        <SetAvatar />
        <SetBasicInfo />
        <SetPassword />
      </div>
    </div>
  );
};

export default Setting;
