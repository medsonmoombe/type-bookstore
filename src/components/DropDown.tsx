import React, { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

type Options = {
  id: number;
  name: string;
};

const DropDown = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const options: Options[] = [
    { name: "religious", id: 1 },
    { name: "fiction", id: 2 },
    { name: "sports", id: 3 },
  ];

  const handleDisplay = () => {
    setShowDropdown(true);
  };

  const handleClose = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <section
        className="relative flex flex-col z-20"
        onMouseEnter={handleDisplay}
        onMouseLeave={handleClose}
      >
        <div className="flex items-center">
          <span className="text-white cursor-pointer uppercase mt-1 font-semibold">
            Categories:
          </span>
          {showDropdown ? (
            <MdOutlineArrowDropUp
              size={30}
              className="cursor-pointer text-white ml-2"
              onClick={handleClose}
            />
          ) : (
            <MdOutlineArrowDropDown
              size={30}
              className="cursor-pointer text-white ml-2"
              onClick={handleDisplay}
            />
          )}
        </div>

        {showDropdown ? (
          <div className="bg-white rounded-lg shadow-lg absolute top-full m-auto p-4 w-[200px]">
            {options.map((option) => {
              return (
                <div
                  key={option.id}
                  className="flex items-center justify-between py-2 hover:bg-gray-100 rounded-lg"
                >
                  <span
                    onClick={() => console.log(option.id)}
                    className="text-black cursor-pointer"
                  >
                    {option.name}
                  </span>
                  <MdOutlineArrowDropDown size={20} className="text-gray-400" />
                </div>
              );
            })}
          </div>
        ) : null}
      </section>
    </>
  );
};

export default DropDown;
