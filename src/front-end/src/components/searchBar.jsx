import React from "react";

const SearchBar = () => {
    return (
        <form className="w-390 h-50 flex relative">
            <div className="border flex rounded-lg bg-[#F4F2EC] hover:border-[#BFBFBF]">
                <input
                    type="search"
                    id="search-dropdown"
                    className="w-[85%] px-1 border-none rounded-l-lg bg-[#F4F2EC] focus:outline-[#BFBFBF]"
                    placeholder="Search for your favor"
                    required
                />
                <button
                    type="submit"
                    className="w-[15%] h-[100%] relative"
                >
                    <div className="absolute left-0 top-2 h-[16px] w-px bg-[#BFBFBF]"></div>
                    <div className="absolute left-0 bottom-2 h-[16px] w-px bg-[#BFBFBF]"></div>
                    <div className="pl-2 text-[#BFBFBF]">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </div>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;