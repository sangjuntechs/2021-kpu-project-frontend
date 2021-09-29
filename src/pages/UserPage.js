import React, { useEffect, useState } from "react";
import Axios from 'axios';

const UserPage = ({ match }) => {

    const [review, setReview] = useState([]);

    const onClickReview = ({reviewsId}) => {
        Axios.post(`http://3.34.59.69/Member/${reviewsId}`)
    }

    useEffect(() => {
        Axios.get(`http://3.34.59.69/Member/${match.params.id}`).then(
          (res) => {
            console.log(res.data, "member");
            setReview(res.data)
          }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  return <>
    {review.map((reviews) => {
        return(
            <p>
            {reviews.ReviewTitle}
            <button onClick={onClickReview(reviews.id)}>리뷰 삭제</button>
            </p>
        )
    })}
  </>;
};

export default UserPage;
