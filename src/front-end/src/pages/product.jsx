import SizeSelect from "../components/itemsDetail/sizeSelect";
import AddToCartButton from "../components/buttons/addToCartButton";
import NoteHere from "../components/itemsDetail/noteHere";
import Star from "../components/itemsDetail/star";
import PicItem from "../components/items/picItem";
import ProductInfo from "../components/itemsDetail/productInfo";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Topping from "../components/itemsDetail/topping";
import { useDispatch } from "react-redux";
import { addCart } from "../reduxActions/cart";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  // quantity function
  const [quantity, setQuantity] = useState(0);

  // size function
  const [sizeSelect, setSizeSelect] = useState({ size: "Small", sizePrice: 0 });

  const handleSizeSelect = (size) => {
    setSizeSelect({
      size: size,
      sizePrice: size === "Small" ? 0 : size === "Medium" ? 5000 : 10000,
    });
  };

  // topping function
  const [blackPearl, setBlackPearl] = useState({});
  const [whitePearl, setWhitePearl] = useState({});
  const [jelly, setJelly] = useState({});

  const handleChangeBlackPearl = (data) => {
    setBlackPearl({ name: "Black Pearl", quantity: data });
  };
  const handleChangeWhitePearl = (data) => {
    setWhitePearl({ name: "White Pearl", quantity: data });
  };
  const handleChangeJelly = (data) => {
    setJelly({ name: "Jelly", quantity: data });
  };

  const topping = [blackPearl, whitePearl, jelly];

  // cart function
  const handleAddToCartButton = (data) => {
    dispatch(addCart(data));
    navigate("/");
  };

  const notify = () => {
    toast("Your product has been added successfully");
    localStorage.setItem('addedToCartMessage', 'Your product has been added successfully');
    return true;
  };

  return (
    <div className="w-screen h-fit mx-auto py-6 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
      <div className="w-[900px] xl:w-fit sm:!w-[96%] h-fit bg-white mx-auto rounded-xl overflow-hidden shadow-2xl flex flex-row xl:flex-col xl:items-center">
        <div className="w-[450px] xl:w-full h-[690px] xl:h-fit flex flex-col items-center">
          <div className="w-full px-8 sm:px-4 mt-8 hidden xl:block">
            <div className="w-fit h-fit flex">
              <Star rates={data.rate} />
            </div>
            <div className="w-full flex mb-2 sm:mt-2">
              <ProductInfo
                productName={data.name}
                price={data.price}
                changeQuantityFunction={(quantity) => setQuantity(quantity)}
              />
            </div>
          </div>
          <div className="w-fit xl:w-full h-fit">
            <PicItem image={data.image} />
          </div>
          <div className="w-[400px] sm:w-full h-fit xl:h-fit mt-4 flex mx-auto text-[16px] justify-center items-center text-justify px-2 sm:px-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            aperiam sunt praesentium perspiciatis at deserunt velit architecto
            ipsa quis? Asperiores, excepturi? Eaque perferendis aspernatur
            beatae soluta neque omnis at autem!
          </div>
        </div>
        <div className="w-[450px] xl:w-[400px] sm:w-full h-[690px] xl:mxauto xl:h-fit xl:mt-2 py-2 sm:px-4 flex flex-col justify-center items-start gap-2">
          <div className="ml-5 w-full xl:hidden flex flex-col items-start justify-start">
            <div className="w-fit h-fit mt-3">
              <Star rates={data.rate} />
            </div>
            <div className="w-fit flex mb-2 mt-2">
              <ProductInfo
                productName={data.name}
                price={data.price}
                changeQuantityFunction={(quantity) => setQuantity(quantity)}
              />
            </div>
          </div>
          <div className="w-full px-5 sm:px-4 h-[53px] mx-auto sm:m-0">
            <NoteHere />
          </div>
          <div className="w-[400px] xl:w-full sm:!w-[90%] h-fit mx-auto rounded-lg border-[#F4F2EC] border overflow-hidden">
            <div className="w-full h-fit">
              <SizeSelect
                sizeSelectfunction={(data) => handleSizeSelect(data)}
              />
            </div>
            <div className="w-full h-fit mx-auto -mt-2.5">
              <div className="flex items-center bg-[#D9D9D9] h-[40px] text-[#666] font-Source-Sans-3 text-[20px] font-normal pl-3">
                Topping
              </div>
              <div className="flex flex-col justify-center items-center bg-[#F3F2ED]">
                <Topping
                  toppingName="Black Pearl"
                  price="15.000"
                  changeFunction={(quantity) =>
                    handleChangeBlackPearl(quantity)
                  }
                />
                <div className="w-[340px] stroke-[1px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="342"
                    height="2"
                    viewBox="0 0 342 2"
                    fill="none"
                  >
                    <path d="M1 1H341" stroke="#D9D9D9" strokeLinecap="round" />
                  </svg>
                </div>
                <Topping
                  toppingName="Whited Pearl"
                  price="15.000"
                  changeFunction={(quantity) =>
                    handleChangeWhitePearl(quantity)
                  }
                />
                <div className="w-[340px] stroke-[1px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="342"
                    height="2"
                    viewBox="0 0 342 2"
                    fill="none"
                  >
                    <path d="M1 1H341" stroke="#D9D9D9" strokeLinecap="round" />
                  </svg>
                </div>
                <Topping
                  toppingName="Jelly"
                  price="15.000"
                  changeFunction={(quantity) => handleChangeJelly(quantity)}
                />
              </div>
            </div>
          </div>
          <div className="w-[400px] xl:w-full mx-auto pb-2 sm:px-4">
            <AddToCartButton
              onClick={() =>
                notify() && handleAddToCartButton({
                  ...data,
                  topping,
                  size: sizeSelect,
                  quantity: quantity,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
