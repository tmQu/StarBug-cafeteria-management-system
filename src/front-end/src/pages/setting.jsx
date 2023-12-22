import SetAvatar from "../components/userSetting/setAvatar";
import SetBasicInfo from "../components/userSetting/setBasicInfo";
import SetPassword from "../components/userSetting/setPassword";
import { motion } from "framer-motion";

const Setting = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-screen mx-auto overflow-hidden bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]"
    >
      <div className="w-[950px] xl:w-[96%] bg-[#F4F2EC] my-4 p-8 mx-auto rounded-lg overflow-hidden shadow-lg">
        <SetAvatar />
        <SetBasicInfo />
        <SetPassword />
      </div>
    </motion.div>
  );
};

export default Setting;
