import { useState, useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import logo from "../assets/images/log.png";
import { Book } from "./fakeData";
import DropDown from "./DropDown";

const Navbar = () => {
  const books: Book[] = useSelector((state: any | []) => state.book);
  const [open, setOpen] = useState<boolean>(false);
  const [prevOverflow, setPrevOverflow] = useState<string>("");

  const navRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      setPrevOverflow(document.body.style.overflow);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevOverflow;
    }

    const handleClickOutside = (event: any) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, prevOverflow]);

  return (
    <nav className="bg-sky-600 h-16 w-full flex justify-between items-center font-poppins sm:w-full">
      {open ? (
        ""
      ) : (
        <h1 className="text-orange-400 font-semibold text-3xl lg:hidden">
          <a className=" " href="/">
            Bookstore
          </a>
        </h1>
      )}
      {open ? (
        <span className="absolute left-0 z-30 md:hidden lg:hidden border-2 border-orange-700 rounded">
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
            ? "fixed top-0 left-0 sm:left-[0px] z-20 sm:flex-col sm:flex sm:bg-gray-700 h-screen gap-4 justify-start pt-20 gap-10 items-center w-60 backdrop-filter backdrop-blur-sm transition-all duration-300 ease-in-out"
            : " w-full flex justify-around items-center sm:flex-col sm:hidden"
        }
        ref={navRef}
      >
        <a className=" w-[200px] " href="/">
          <img className="w-[150px] h-auto" src={logo} alt="logo" />
        </a>
        <ul className="list-none flex sm:flex-col justify-around items-center gap-4">
          <li>
            <a
              className=" sm:border-orange-700 sm:border-b-2 sm:w-full font-semibold text-white font-poppins text-white hover:text-orange-400 transition delay-100 duration-300 ease-in-out"
              href="/sign_in"
            >
              Sign In
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
          <DropDown />
          <span className="text-white sm:border-orange-700 sm:border-b-2 sm:w-full font-semibold transition delay-100 duration-300 ease-in-out">
            <a href="/new">Add Book</a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;