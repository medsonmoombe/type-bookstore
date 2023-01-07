import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchbook } from "../redux/book/BookList";
import { data } from "./fakeData";


const BookList = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState<any>([]);

  const log = (id: number) => {
    const filtered = data.filter((item) => item.id === id);
    // console.log(filtered);
  };

  const url ="http://localhost:3000/books";


  useEffect(() => {
    const api = async () => {
      const data = await fetch(url, {
        method: "GET"
      });
      const jsonData = await data.json();
      if(jsonData) 
        setBooks(jsonData);
     dispatch(fetchbook(jsonData))
    };

    api();
  }, [dispatch]);



console.log(books);


console.log(books.data);

  return (
    <>
    <h1 className="text-start text-gray-400 font-semibold text-2xl ml-4 mt-10">Books</h1>
      <section className="grid grid-cols-4 w-full sm:grid-cols-2 pt-20 gap-2 pr-4 pl-4">
        {books?.map((book: any) => {
          return (
            <>
              <a href={`book/${book.id}`}>
              <div
                onClick={() => log(book.id)}
                key={book.id}
                className="flex flex-col w-[80%]] justify-center items-center shadow sm:w-[100%] m-auto h-[100%] sm:h-[100%] lg:p-4 sm:p-2"
              >
                <div>
                  <img
                    src={book.image}
                    alt="book"
                    className=" w-[250px] h-[300px] sm:w-[180px] sm:h-[220px] "
                  />
                </div>
                <div>
                  <h1 className="font-semibold pt-2 text-xl w-full text-gray-500 font-poppins capitalize">{book.title}</h1>
                </div>
              </div>
              </a>
            </>
          );
        })}
      </section>
    </>
  );
};

export default BookList;
