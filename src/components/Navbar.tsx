import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import DropDown from "./DropDown";


const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

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
        <span className="absolute left-0 z-10 md:hidden lg:hidden border-2 border-orange-700 rounded">
          <IoMdClose size={25} color={"#fff"} onClick={handleClose} />
        </span>
      ) : (
        <span className="absolute right-0 md:hidden lg:hidden">
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
        <ul className="list-none flex sm:flex-col justify-around items-center gap-4">
          <li>
            <a
              className="uppercase sm:border-orange-700 sm:border-b-2 sm:w-full font-semibold text-white font-poppins text-white hover:text-orange-400 transition delay-100 duration-300 ease-in-out"
              href="/sign_in"
            >
              Sign In
            </a>
          </li>
          <div className="relative flex justify-center items-center">
         <input type="search" name="search" placeholder="Search books" className="w-[60%] outline-0 pl-2 pr-4 sm:pr-6"/>
         <MdSearch size={25} className="text-orange-400 cursor-pointer absolute sm:right-12 top-0 right-16 flex justify-center items-center"/>
          </div>
        </ul>
        <div
          className={
            open
              ? "flex flex-col justify-around  items-center sm:gap-8"
              : "flex justify-around items-center gap-1 w-80"
          }
        >
         <DropDown/>
          <span className="text-white sm:border-orange-700 sm:border-b-2 sm:w-full uppercase font-semibold"><a href="/new">Add Book</a></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
