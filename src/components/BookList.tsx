import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdSearch } from "react-icons/md";
import { data } from "./fakeData";

type Book = {
  title: string;
  image: string;
  description: string;
  author: string;
  id: number;
};

const BookList = () => {

  const navigate = useNavigate();
  const books: Book[] = useSelector((state: any|[]) => state.book);
  const [searched, setSearched] = useState(false);
  const log = (id: number) => {
    const filtered = data.filter((item) => item.id === id);
    // console.log(filtered);
  };

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";
  const [searchValue, setsearchValue] = useState(search);
  const book = books.filter((result) => result.title.toLowerCase().includes(searchValue.toLocaleLowerCase()));


  const filterFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate(e.target.value ? `?search=${e.target.value}` : "");
    setSearched(true)
    setsearchValue(e.target.value);
  };
  


  return (
    <>
    <div className="flex flex-col gap-4 ml-4">
      <h1 className="text-start font-poppins text-slate-600 font-semibold text-2xl ml-4 mt-10">
      Books available in Stock
      </h1>
      <div className="relative flex justify-start items-start ml-4">
            <input
              name="search"
              value={searchValue}
              onChange={filterFunction}
              placeholder="Search book..."
              className="w-[200px] outline-0 border-gray-400 border-2  pl-2 pr-4 sm:pr-6"
            />
          </div>
      <a  href="/new" className="bg-transparent ml-4  text-sky-600 px-2 py-1 border-2 hover:bg-sky-600  hover:text-white border-sky-600 font-poppins w-[100px] rounded capitalize">Add Book</a>
    </div>
      <section className="grid grid-cols-5 md:grid-cols-3 w-full sm:grid-cols-2 pt-16 gap-2 pr-4 pl-4">
        {(searched ? book : books).map((book: any) => {
          return (
            <>
              <div
                onClick={() => log(book.id)}
                key={book.id}
                className="flex flex-col w-[80%]] justify-center items-center shadow sm:w-[100%] m-auto h-[100%] sm:h-[100%] lg:p-4 sm:p-2"
              >
                <a href={`book/${book.id}`}>
                  <div>
                    <img
                      src={book.image}
                      alt="book"
                      className=" w-[250px] h-[300px] sm:w-[180px] sm:h-[220px] "
                    />
                  </div>
                </a>
                <div className="w-full justify-center items-center ">
                  <h1 className=" hover:underline cursor-pointer pt-2 text-xl w-full text-slate-700 font-poppins capitalize">
                  <a href={`book/${book.id}`}>{book.title}</a>
                  </h1>
                  {/* <button type="button" className="bg-sky-700 sm:w-[50%] text-white px-2 py-2 font-poppins w-full rounded capitalize">Add to Basket</button> */}
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default BookList;
