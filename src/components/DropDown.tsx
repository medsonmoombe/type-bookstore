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
        <div className="flex">
          <span className="text-white cursor-pointer uppercase mt-1 font-semibold">
            Categories:
          </span>
          {showDropdown ? (
            <MdOutlineArrowDropUp
              size={30}
              className="cursor-pointer text-white z-10"
              onClick={handleClose}
            />
          ) : (
            <MdOutlineArrowDropDown
              size={30}
              className="cursor-pointer text-white z-10"
              onClick={handleDisplay}
            />
          )}
        </div>

        {showDropdown ? (
          <div className="bg-[#eee] shadow-lg absolute top-full m-auto p-4  w-[200px] justify-center items-center">
            {options.map((option) => {
              return (
                <div
                  key={option.id}
                  className="flex flex-col gap-2 justify-center items-center"
                >
                  <span
                    onClick={() => console.log(option.id)}
                    className="text-black border-y-2 w-[100px] border-t-0 cursor-pointer border-slate-400"
                  >
                    {option.name}
                  </span>
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

