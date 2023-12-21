import { motion } from "framer-motion";

const SliderManagement = () => {
  const sliderImages = [
    { image: "/assets/Slider_files/Slider1.png" },
    { image: "/assets/Slider_files/Slider2.png" },
    { image: "/assets/Slider_files/Slider3.png" },
    { image: "/assets/Slider_files/Slider4.png" },
    { image: "/assets/Slider_files/Slider5.png" },
  ];

  const promotionImages = [
    { image: "/assets/Promotion_files/Promotion1.png" },
    { image: "/assets/Promotion_files/Promotion2.png" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-screen h-fit"
    >
      <div className="flex flex-col gap-4 py-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-[950px] xl:w-[96%] h-fit mx-auto bg-[#F4F2EC] rounded-lg overflow-hidden shadow-xl text-[#BE2623]">
          <div className="w-full h-[92px] bg-[#EAE8DC] px-6 flex flex-row justify-between items-center">
            <h1 className="text-3xl pt-1 font-bold text-[#BE2623]">SLIDER</h1>
            <button className="w-[108px] h-[40px] mr-10 xl:mr-2 rounded-full bg-[#BE2623] text-[#EAE8DC] font-semibold pt-1">
              ADD
            </button>
          </div>
          <div className="bg-[#F4F2EC] px-4">
            {sliderImages.map((image) => (
              <div className="my-4 flex flex-row sm:flex-col justify-between items-center">
                <img
                  className="shadow-lg w-[700px] xl:w-[600px]"
                  alt="Slider"
                  src={image.image}
                ></img>
                <div className="w-full flex justify-center items-center sm:mt-4">
                  <button className="text-[#0E3746] font-semibold">
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[950px] xl:w-[96%] h-fit mx-auto bg-[#F4F2EC] rounded-lg overflow-hidden shadow-xl text-[#BE2623]">
          <div className="w-full h-[92px] bg-[#EAE8DC] px-6 flex flex-row justify-between items-center">
            <h1 className="text-3xl pt-1 font-bold text-[#BE2623]">
              PROMOTION
            </h1>
            <button className="w-[108px] h-[40px] mr-10 xl:mr-2 rounded-full bg-[#BE2623] text-[#EAE8DC] font-semibold pt-1">
              ADD
            </button>
          </div>
          <div className="bg-[#F4F2EC] px-4 pt-4 grid grid-cols-2 gap-4 xl:flex xl:flex-col xl:gap-0">
            {promotionImages.map((image) => (
              <div className="mb-4 flex flex-col gap-4 mx-auto">
                <img
                  className="shadow-lg w-[400px] xl:w-[500px]"
                  alt="Promotion"
                  src={image.image}
                ></img>
                <div className="w-full flex justify-center items-center">
                  <button className="text-[#0E3746] font-semibold">
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderManagement;
