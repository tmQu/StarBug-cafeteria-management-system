const PicItem = () => {
    return (
        <div className="w-[450px] h-fit flex flex-col gap-[16px] justify-center items-center">
            <div className="w-[400px] h-[320px] flex justify-center items-center mt-[60px]">
                <img
                    className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.01]"
                    src="./assets/StarBug_files/StarBug_square.jpg"
                    alt="Product Picture"
                />
            </div>
            <div className="flex flex-row h-[80px] w-[400px] overflow-hidden gap-[16px] mt-[38px] mx-auto justify-center">
                <img
                    className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.01] w-1/8"
                    src="./assets/StarBug_files/StarBug_square.jpg"
                    alt="Product Picture"
                />
                <img
                    className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.01] w-1/8"
                    src="./assets/StarBug_files/StarBug_square.jpg"
                    alt="Product Picture"
                />
                <img
                    className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.01] w-1/8"
                    src="./assets/StarBug_files/StarBug_square.jpg"
                    alt="Product Picture"
                />
                <img
                    className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.01] w-1/8"
                    src="./assets/StarBug_files/StarBug_square.jpg"
                    alt="Product Picture"
                />
            </div>

        </div>
    )
};

export default PicItem;