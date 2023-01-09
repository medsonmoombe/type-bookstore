import React, { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

type Options = {
  id: number;
  name: string;
};

const DropDown = () => {
  const [first, setfirst] = useState<boolean>(false);

  const options: Options[] = [
    { name: "religious", id: 1 },
    { name: "fiction", id: 2 },
    { name: "sports", id: 3 },
  ];
  const handleDisplay = () => {
    setfirst(true);
  };

  const handleClose = () => {
    setfirst(!first);
  };
  return (
    <>
      <section onClick={handleClose} className="flex flex-col">
        <div className="flex">
        <span onClick={handleDisplay} className="text-white cursor-pointer uppercase mt-1 font-semibold">Categories:</span>{first ? (
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

        {first ? (
          <>
            <div className="bg-[#eee] shadow-lg absolute top-20 m-auto p-4  w-[200px] justify-center items-center">
              {options.map((option) => {
                return (
                  <div key={option.id} onClick={handleClose} className="flex flex-col gap-2 justify-center items-center">
                    <span onClick={()=> console.log(option.id)} className="text-black border-y-2 w-[100px] border-t-0 cursor-pointer border-slate-400">{option.name}</span>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default DropDown;
