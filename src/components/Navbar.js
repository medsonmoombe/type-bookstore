import React from "react";

const Navbar = () => {
  return <nav className="bg-sky-700 h-16 w-full flex justify-around  items-center">
    <h1 className="text-orange-400 font-semibold text-3xl">Bookstore</h1>
    <ul className="list-none flex justify-around items-center gap-4">
        <li><a className="text-white" href="/">Home</a></li>
        <li><a className="text-white" href="/sign_in">Sign In</a></li>
        <li><a className="text-white" href="/sign_out">Sign Out</a></li>
    </ul>
    <div className="flex justify-around items-center gap-4">
        <span className="text-white">Categories:</span>
        <span className="text-white">Add Book</span>
    </div>
  </nav>;
};

export default Navbar;
