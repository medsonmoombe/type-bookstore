import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { data } from "../components/fakeData";
import "./book.css";
import { fetchbook } from "../redux/book/AddBook";


type Color = {
  orange: string;
  gray: string;
};
const colors: Color = {
  orange: "#ffba5a",
  gray: "#a9a9a9",
};

const BookDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [books, setBooks] = useState([]);
  const [hover, setHover] = useState(0);


  const star = Array(5).fill(0);
  const handleClick = (val: number) => {
    setRating(5);
  };

  useEffect(() => {
    const books = data.filter((book) => Number(book.id) === Number(id));
    (books.forEach((book)=> setRating(book.rating)
    ));
  }, [rating, id])

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

  // Book to be displayed using the id from the params
  const book = books.filter((book: any) => Number(book.id) === Number(id));
  
  

  return (
    <div>
      {book.map((book:any) => {
        return (
          <div
            key={book.id}
            className="flex sm:flex-col justify-center  items-center gap-4 w-full h-[100%] pt-16 m-auto pl-8 pr-8"
          >
            <div className="w-[30%] sm:w-[100%] m-auto shadow-lg h-[450px] sm:h-[400px] p-4">
              <img
                src={book.image}
                alt="book_image"
                className="m-auto w-[90%] pt-4 h-[100%]"
              />
            </div>
            <div className="w-[60%] sm:w-[100%] m-auto shadow-lg h-[450px] sm:h-[400px] p-4 sm:p-0">
              <h1 className="text-start text-gray-500 p-4 font-semibold text-2xl sm:text-xl font-poppins">
                Title:{" "}
                <span className="text-start font-semibold text-2xl sm:text-xl font-poppins capitalize text-gray-500 ">
                  {book.title}
                </span>
              </h1>
              <h2 className="text-start text-gray-600 pl-4 font-semibold text-xl sm:text-sm font-poppins">
                Author:{" "}
                <span className="text-start p-4 font-semibold text-xl sm:text-sm font-poppins capitalize text-gray-600 ">
                  {book.author}
                </span>
              </h2>
              <div className=" flex flex-col pt-4">
                <span className="text-start text-gray-400 pl-4 font-semibold text-xl sm:text-sm font-poppins">
                  Average Rating
                </span>
                <div className="flex pl-4">
                {star.map((s, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={24}
                      color={
                        (hover || rating) > index ? colors.orange : colors.gray
                      }
                      onClick={() => handleClick(index + 1)}
                      className="flex"
                    />
                  );
                })}
                </div>
              </div>
              <p className=" text-start p-4 text-gray-700 w-[100%]">
                {book.description}
              </p>
            <div className="flex justify-start items-center pl-4 pt-4">
              <a href={`${book.id}/review`} className="bg-orange-400 px-2 text-center  py-1 text-white capitalize rounded border-0">Add Review</a>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookDetails;
