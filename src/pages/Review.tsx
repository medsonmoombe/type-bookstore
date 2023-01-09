import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams();
 const [bookRate, setBookRate] = useState<number>()

  const ratings = useSelector((state: any | []) => state.ratings);


  useEffect(() => {
    if (ratings.rating !== "undefined") {
      
      let rate = ratings.rating;
      let total = rate ? rate.forEach((el: any) => {
       if(Number(el.book_id) === Number(id)) {
        setBookRate(el.rating)
       }
      }
      ): 0;
    }
}, [ratings.rating, id])
  




  return <div>{bookRate}</div>;
};

export default Review;
