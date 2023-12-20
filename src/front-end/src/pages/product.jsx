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

  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto py-10 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div className="w-[900px] h-[690px] bg-white mx-auto rounded-xl overflow-hidden shadow-2xl flex">
          <div className="w-[450px] h-[690px] flex flex-col">
            <div className="w-[400px] h-[500px]">
              <PicItem />
            </div>
            <div className="w-[400px] h-[126px] flex mx-auto text-[16px] justify-center items-center text-justify my-auto px-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              aperiam sunt praesentium perspiciatis at deserunt velit architecto
              ipsa quis? Asperiores, excepturi? Eaque perferendis aspernatur
              beatae soluta neque omnis at autem!
            </div>
          </div>
          <div className="w-[450px] h-[690px] py-2 flex flex-col gap-2">
            <div className="w-fit h-fit flex mr-auto ml-2 mt-3">
              <Star rates={data.rate} />
            </div>
            <div className="w-fit flex ml-auto mr-4 mb-2">
              <ProductInfo
                productName={data.name}
                price={data.price}
                changeQuantityFunction={(quantity) => setQuantity(quantity)}
              />
            </div>
            <div className="w-[400px] h-[53px] ml-auto mr-4">
              <NoteHere />
            </div>
            <div className="w-[400px] h-[fit] ml-auto mr-4 rounded-lg border-[#F4F2EC] border mt-auto overflow-hidden">
              <div className="w-[400px] h-fit mx-auto">
                <SizeSelect
                  sizeSelectfunction={(data) => handleSizeSelect(data)}
                />
              </div>
              <div className="w-[400px] h-fit mx-auto -mt-2.5">
                <div className="w-400">
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
                        <path
                          d="M1 1H341"
                          stroke="#D9D9D9"
                          strokeLinecap="round"
                        />
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
                        <path
                          d="M1 1H341"
                          stroke="#D9D9D9"
                          strokeLinecap="round"
                        />
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
            </div>
            <div className="w-[400px] mx-auto py-2 mr-2.5">
              <AddToCartButton
                onClick={() =>
                  handleAddToCartButton({
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
    </div>
  );
};

export default Product;
