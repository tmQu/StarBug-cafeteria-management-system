import { useForm, useEffect, useRef, set } from "react-hook-form";
import { useState, useMemo } from "react";

const SearchBar = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const { register, handleSubmit, reset, setValue, setFocus } = useForm({
    defaultValues: { search: "" },
  });
  const onSubmit = (data) => {
    // call api search
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
        className="h-full flex flex-row justify-start rounded-3xl overflow-hidden"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        FocusEvent={(e) => {}}
      >
        <input
          className="w-full pl-4 pt-0.5 text-lg focus:outline-none"
          type="text"
          placeholder="Search product"
          autoComplete="off"
          {...register("search")}
          onFocus={() => {
            setShowPopup(true);
          }}
          onBlur={() => {
            setShowPopup(false);
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

      {showPopup === true && query != "" && filteredItems != "" && (
        <div className="absolute h-auto w-full mt-1 z-50 rounded-lg overflow-hidden shadow-xl bg-[#eeefef]">
          <div
            className="h-8 rounded-t-lg bg-[#EAE8DC] pl-2 font-normal pt-1.5"
            onMouseEnter={() => {
              setValue("search", "");
            }}
          >
            Suggested items:
          </div>
          {filteredItems.map((item, index) => (
            <div key={index} onClick={() => console.log("cl")}>
              <div
                className="h-8 px-2 pt-1 pl-3 rounded-md font-light overflow-hidden whitespace-nowrap overflow-ellipsis hover:cursor-pointer hover:bg-gray-300"
                onMouseEnter={() => {
                  console.log("set ", item);
                  setValue("search", item);
                }}
              >
                {item}
              </div>
              {item !== filteredItems[filteredItems.length - 1] && (
                <hr className="w-[96%] h-[1.5px] bg-[#d0d1d2] px-2 mx-auto"></hr>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
