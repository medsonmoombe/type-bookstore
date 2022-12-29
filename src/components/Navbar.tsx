import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

type Options = {
  id: number;
  name: string;
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const options: Options[] = [
    { name: "religious", id: 1 },
    { name: "fiction", id: 2 },
    { name: "sports", id: 3 },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <nav className="bg-sky-700 h-16 w-full flex justify-between items-center font-poppins sm:w-full">
      {open ? "" : <h1 className="text-orange-400 font-semibold text-3xl lg:hidden">
        <a className="uppercase " href="/">
          Bookstore
        </a>
      </h1> }
      {open ? (
        <span className="absolute left-0 z-10 md:hidden border-2 border-orange-700 rounded">
          <IoMdClose size={25} color={"#fff"} onClick={handleClose} />
        </span>
      ) : (
        <span className="absolute right-0 md:hidden">
          <BiMenu size={35} color={"#fff"} onClick={handleOpen} />
        </span>
      )}
      <div
        className={
          open
            ? "absolute top-0 sm:left-[0px] sm:flex sm:flex-col sm:flex sm:bg-gray-700 h-screen gap-4 justify-start pt-20 gap-10 items-center w-60"
            : " w-full flex justify-around items-center sm:flex-col sm:hidden"
        }
      >
        <h1 className="text-orange-400 font-semibold text-3xl">
          <a className="uppercase " href="/">
            Bookstore
          </a>
        </h1>
        <ul className="list-none flex justify-around items-center gap-4">
          <li>
            <a
              className="uppercase sm:border-orange-700 sm:border-b-2 sm:w-full font-semibold text-white font-poppins text-white hover:text-orange-400 transition delay-100 duration-300 ease-in-out"
              href="/sign_in"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              className="text-white sm:border-orange-700 sm:border-b-2 sm:w-full uppercase font-semibold sm:hidden sm:text-2xl"
              href="/sign_out"
            >
              Sign Out
            </a>
          </li>
        </ul>
        <div
          className={
            open
              ? "flex flex-col justify-around  items-center sm:gap-8"
              : "flex justify-around items-center gap-1 w-80"
          }
        >
          <span className="text-white sm:border-orange-700 sm:border-b-2 sm:w-full uppercase font-semibold">
            Categories:
          </span>
          <select
            id="small"
            className="w-auto p-2 text-sm text-white border-0 outline-0 rounded bg-transparent"
            name="categories"
          >
            {options.map((option) => (
              <option className="bg-gray-400">{option.name}</option>
            ))}
          </select>
          <span className="text-white sm:border-orange-700 sm:border-b-2 sm:w-full uppercase font-semibold">Add Book</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
