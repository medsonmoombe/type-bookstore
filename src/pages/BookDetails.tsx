import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { data } from "../components/fakeData";
import "./book.css";
import { fetchbook } from "../redux/book/AddBook";
import axios from "axios";

type Color = {
  orange: string;
  gray: string;
};
const colors: Color = {
  orange: "#ffba5a",
  gray: "#a9a9a9",
};

interface CommentFormProps {
  onSubmit: (comment: string) => void;
}

const BookDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [books, setBooks] = useState([]);
  const [hover, setHover] = useState(0);

  const [value, setValue] = useState<number | undefined>(undefined);
  const [rateSuccess, setRateSucess] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [notClicked, setNotClicked] = useState<boolean>(false);
  const [input, setInput] = useState<boolean>(false);
  const [comment, setComment] = useState<string>();

  const star = Array(5).fill(0);

  const handleClick = async (val: number) => {
    setValue(val);
    setClicked(true);
    if (!clicked) {
      try {
        const response = await axios.post(
          `http://localhost:3000/users/${1}/books/${id}/rating`,
          { value: val, user_id: 1, book_id: 1 }
        );
        if (response.status === 200) {
          setRateSucess(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setNotClicked(true);
    }
  };

  const handleComment = () => {
    setInput((prev) => !prev);
    console.log(comment);
    setComment("");
  };

  const url = `http://localhost:3000/users/${1}/books`;

  useEffect(() => {
    const api = async () => {
      const data = await fetch(url, {
        method: "GET",
      });
      const jsonData = await data.json();
      if (jsonData) setBooks(jsonData);
      dispatch(fetchbook(jsonData));
    };

    api();
  }, [dispatch]);

  const getRatings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/${1}/books/${id}`
      );
      const ratings: any[] = response.data.ratings;

      const sumOfRatings = ratings.length;
      const numberOfRatings = 4;

      const averageRating = (sumOfRatings / numberOfRatings) * 0.1;
      const cappedRating = Math.min(averageRating, 5);

      setRating(cappedRating);
      console.log(cappedRating);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRatings();
  });

  useEffect(() => {
    let timer: any;
    if (rateSuccess || notClicked) {
      timer = setTimeout(() => {
        setRateSucess(false);
        setNotClicked(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [rateSuccess, notClicked]);

  // Book to be displayed using the id from the params
  const book = books.filter((book: any) => Number(book.id) === Number(id));
  return (
    <div>
      {book.map((book: any) => {
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
                          (hover || rating) > index
                            ? colors.orange
                            : colors.gray
                        }
                        onClick={() => handleClick(index + 1)}
                        className="flex"
                      />
                    );
                  })}
                </div>
              </div>
              {rateSuccess && (
                <p className="flex justify-start w-full font-poppins text-green-500 mt-2 ml-4">
                  Book ratings added successfully
                </p>
              )}
              {notClicked && (
                <p className="flex justify-start w-full font-poppins text-red-500 mt-2 ml-4">
                  You have already rated this book
                </p>
              )}
              <p className=" text-start p-4 text-gray-700 w-[100%]">
                {book.description}
              </p>
              <div className="flex justify-start items-start pl-4 pt-4 flex-col gap-4">
                <a
                  href={`${book.id}/read`}
                  className=" hover:underline text-blue-700  py-2 px-4 rounded hover:text-amber-600 transition duration-150 ease-out hover:ease-in sm:py-1 sm:px-4 sm:text-xs"
                >
                  {" "}
                  Read Book
                </a>
                <button
                  type="submit"
                  onClick={() => handleComment()}
                  className="bg-orange-400 px-2 text-center py-1 text-white capitalize rounded border-0"
                >
                  {input ? "Comment" : "Add Comment"}
                </button>
                {input && (
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="bg-gray-100 outline-none text-xs p-2"
                  ></textarea>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookDetails;
