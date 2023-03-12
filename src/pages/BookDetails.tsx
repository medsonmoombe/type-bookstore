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
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full h-full pt-16 m-auto pl-8 pr-8">
    {book.map((book: any) => {
      return (
        <div
          key={book.id}
          className="flex flex-col md:flex-row justify-between items-center gap-4 w-full md:h-[400px] md:w-[800px] bg-white rounded-lg shadow-lg p-8 md:p-0"
        >
          <div className="w-full md:w-[40%] h-[300px]">
            <img
              src={book.image}
              alt="book_image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-[60%] h-full md:pl-8">
            <h1 className="text-start text-gray-800 font-semibold text-3xl md:text-4xl font-poppins capitalize mb-4">
              {book.title}
            </h1>
            <h2 className="text-start text-gray-500 font-semibold text-xl md:text-2xl font-poppins capitalize mb-4">
              by {book.author}
            </h2>
            <div className="flex items-center mb-4">
              <span className="text-start text-gray-500 font-semibold text-lg md:text-xl font-poppins">
                Average Rating:
              </span>
              <div className="flex ml-2">
                {star.map((s, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={24}
                      color={
                        (hover || book.rating) > index
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
              <p className="flex justify-start w-full font-poppins text-green-500 mb-4">
                Book ratings added successfully
              </p>
            )}
            {notClicked && (
              <p className="flex justify-start w-full font-poppins text-red-500 mb-4">
                You have already rated this book
              </p>
            )}
            <p className="text-start text-gray-700 font-medium text-base md:text-lg font-poppins mb-4">
              {book.description}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`${book.id}/read`}
                className="bg-amber-600 hover:bg-amber-500 text-white py-2 px-4 rounded-lg font-medium text-sm md:text-lg"
              >
                Read Book
              </a>
              <div className="flex justify-between items-center gap-4">
                <button
                  type="submit"
                  onClick={() => handleComment()}
                  className="bg-transparent  text-sky-600 px-2 py-1 border-2 hover:bg-sky-600  hover:text-white border-sky-600 font-poppins w-auto rounded capitalize"
                >
                  {input ? "Post Comment" : "Add Comment"}
                </button>
                {input && (
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="bg-gray-100 outline-none text-sm md:text-base p-2 rounded-lg shadow-md w-full"
                    placeholder="Write your comment here"
                  ></textarea>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  
  );
};

export default BookDetails;
