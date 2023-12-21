// import React from "react";

// const SearchBar = () => {
//   return (
//     <form className="w-[390px] h-[50px] flex relative">
//       <div className="border flex rounded-lg bg-[#F4F2EC] hover:border-[#BFBFBF]">
//         <input
//           type="search"
//           id="search-dropdown"
//           className="w-[85%] px-1 pl-[10px] border-none rounded-l-lg bg-[#F4F2EC] focus:outline-[#BFBFBF]"
//           placeholder="Search for your favor"
//           required
//         />
//         <button type="submit" className="w-[15%] h-[100%] relative">
//           <div className="absolute left-0 top-2 h-[16px] w-px bg-[#BFBFBF]"></div>
//           <div className="absolute left-0 bottom-2 h-[16px] w-px bg-[#BFBFBF]"></div>
//           <div className="pl-2 text-[#BFBFBF]">
//             <svg
//               className="w-4 h-4"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//             <span className="sr-only">Search</span>
//           </div>
//         </button>
//       </div>
//     </form>
//   );
// };

import { useForm } from "react-hook-form";
import { useState, useMemo } from "react";

const SearchBar = (props) => {
  const { register, handleSubmit, reset, setValue, setFocus } = useForm({
    defaultValues: { search: "" },
  });
  const onSubmit = (data) => {
    addItems(data.search);
    reset();
  };

  // Suggestions: W store the list of pre-search in the past items in the state
  // and suggest them to the user at the search later
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return String(item).toLowerCase().includes(String(query).toLowerCase());
    });
  }, [items, query]);

  const addItems = (data) => {
    const value = data;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
  };

  return (
    <div className="w-[340px] h-[40px] z-40 relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-row justify-start rounded-3xl overflow-hidden border-none"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        // FocusEvent={(e) => {}}
      >
        <input
          className="w-full pl-4 -mt-0.5 pt-1 text-lg border-none outline-none "
          type="text"
          placeholder="Search product"
          autoComplete="off"
          {...register("search")}
          onBlur={() => {
            setFocus("search");
            setQuery("");
          }}
        />
        <div className="w-[61px] flex flex-row bg-[#F3F2ED]">
          <div className="border w-[1px] my-1.5 rounded relative right-[1px]"></div>
          <button type="submit">
            <img
              className="h-5 w-5 ml-2"
              alt="search-icon"
              src="./assets/search-icon.png"
            ></img>
          </button>
        </div>
      </form>
      {query !== "" && filteredItems !== 0 && (
        <div className="absolute h-auto w-full mt-1 z-50 rounded-xl overflow-hidden shadow-xl bg-[#eeefef]">
          <div
            className="h-10 rounded-lg bg-[#EAE8DC] pl-2 font-normal pt-2"
            onMouseEnter={() => {
              setValue("search", "");
            }}
          >
            Suggested items:
          </div>
          {filteredItems.map((item, index) => (
            <div key={index} onClick={() => console.log("cl")}>
              <div
                className="h-9 px-2 pt-1.5 rounded-md font-light overflow-hidden whitespace-nowrap overflow-ellipsis hover:cursor-pointer"
                onMouseEnter={() => {
                  console.log("set ", item);
                  setValue("search", item);
                }}
              >
                {item}
              </div>
              {item !== filteredItems[filteredItems.length - 1] && (
                <hr className="h-[1.5px] mt-1 w-[80%] ml-2"></hr>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
