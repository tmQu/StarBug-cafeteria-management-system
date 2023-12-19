
import fs from "fs";
const items = [
    {
        id: 1,
        image: "https://star-bug-cafeteria-management-system.vercel.app/db/Promotion_files/Promotion1.png",
    },
    {
        id: 2,
        image: "https://star-bug-cafeteria-management-system.vercel.app/db/Promotion_files/Promotion2.png",
    }
];

fs.writeFile(
    "promotion.json",
    JSON.stringify(items, null, 4),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );

export default { items };
