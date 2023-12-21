import { useState, useEffect } from "react";
import formatCurrencyWithCommas from "../../utils/formatCurrency";

const ProductInfo = ({
  productName = "Tên sản phẩm",
  price = "9999",
  changeQuantityFunction,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    changeQuantityFunction(quantity);
  }, [quantity]);

  return (
    <div>
      <div className="w-fit h-[40px] sm:h-fit font-Source-Sans-3 leading-8 text-[32px] text-[#BE2622] font-semibold flex-inline">
        {productName}
      </div>
      <div className="flex items-center w-full h-[35px] flex-row py-3">
        <div className="w-fit h-[28] font-Source-Sans-3 text-[22px] font-normal flex-inline pt-3 text-[#0D3745] ">
          {formatCurrencyWithCommas(price)} VND
        </div>
        <div className="flex pt-3 ml-auto gap-2 pl-12">
          <svg
            width="35"
            height="35"
            viewBox="0 0 30 30"
            fill="#BE2623"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-2 cursor-pointer ${quantity === 0 && "invisible"}`}
            onClick={handleDecrement}
          >
            <circle cx="15" cy="15" r="14" stroke="#BFBFBF" />
            <path d="M8 15H22" stroke="#F3F2ED" strokeWidth="2" />
          </svg>
          {quantity >= 0 && (
            <div className="w-[14px] h-[34px] mr-2 font-Source-Sans-3 text-[27px] font-normal flex justify-center items-center">
              {quantity}
            </div>
          )}
          <svg
            width="32"
            height="32"
            viewBox="0 0 30 30"
            fill="#BE2623"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleIncrement}
            className="cursor-pointer"
          >
            <circle cx="15" cy="15" r="14" stroke="#BFBFBF" />
            <path d="M8 15H22" stroke="#F3F2ED" strokeWidth="2" />
            <path d="M15 8V22" stroke="#F3F2ED" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
