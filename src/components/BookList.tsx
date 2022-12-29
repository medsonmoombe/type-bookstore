import React from "react";
import { data } from "./fakeData";

const BookList = () => {

const log =(id: number)=> {
 const filtered = data.filter((item) => item.id === id);
 console.log(filtered);
 
}
  return (
    <>
      <section className="grid grid-cols-4 sm:grid-cols-2 pt-20 gap-2 pr-4 pl-4">
        {data.map((book) => {
          return (
            <>
              <div onClick={()=> log(book.id)} key={book.id} className="flex flex-col justify-center items-center shadow sm:w-[100%] w-[80%] m-auto h-[100%] lg:p-4 sm:p-2">
                <div>
                  <img src={book.img} alt="book" className=" w-60 h-80 sm:w-[180px] sm:h-[220px] " />
                </div>
                <div>
                  <h1>{book.title}</h1>
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
