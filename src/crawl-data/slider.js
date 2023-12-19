
import fs from "fs";
const items = [
    {
        id: 1,
        image: "https://star-bug-cafeteria-management-system.vercel.app/db/Slider_files/Slider1.png",
    },
    {
        id: 2,
        image: "https://star-bug-cafeteria-management-system.vercel.app/db/Slider_files/Slider2.png",
    },
    {
        id: 3,
        image: "https://star-bug-cafeteria-management-system.vercel.app/db/Slider_files/Slider3.png",
    },
    {
        id: 4,
        image: "https://star-bug-cafeteria-management-system.vercel.app/db/Slider_files/Slider4.png",
    },
    {
        id: 5,
        image: "/assets/Slider_files/Slider5.png",
    },

];
fs.writeFile(
    "slider.json",
    JSON.stringify(items, null, 4),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
export default { items };
