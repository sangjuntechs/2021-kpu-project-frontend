import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "axios";

const Container = styled.div`
  height: 120vh;
  background-color: rgb(240, 240, 240);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 5rem;
`;

const BigFont = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Card = styled.div`
  width: 65vw;
  height: 55vh;
  box-shadow: 2px 4px 8px gray;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ReviewImage = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 15px;
  margin-left: 2rem;
`;

const CardTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 55%;
`;

const ReviewTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ReviewWriter = styled.p`
  font-size: 1rem;
  color: gray;
  margin-bottom: 1rem;
`;

const ReviewDetail = styled.p`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.9px;
`;

const ReviewScore = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;



function Review() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    Axios.get("http://3.34.59.69/Review").then((res) => {
      console.log(res.data, 'review')
      setReview(res.data.slice(0, 6));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    centerPadding: "12vh",
    speed: 1200,
  };

  return (
    <Container>
      <TitleContainer>
        <Fade left opposite={true} delay={100}>
          <BigFont>다향러들의 생생한 리뷰를 확인하세요 👏🏻</BigFont>
        </Fade>
      </TitleContainer>
      <Slider {...settings}>
        {review.map((reviews) => {
          return (
            <div>
              <CardContainer key={reviews.productNum}>
                <Card>
                  <ReviewImage
                    src={`http://3.34.59.69${reviews.ReviewImg}`}
                    alt="reviewImg"
                  />
                  <CardTextContainer>
                    <ReviewTitle>{reviews.ReviewTitle}</ReviewTitle>
                    <ReviewWriter>
                      {reviews.Age_range.slice(0, 2)}대 *
                      {reviews.Nickname.slice(1)}님의 리뷰
                    </ReviewWriter>
                    <ReviewScore>⭐️ 5점 / {reviews.ReviewScore}점</ReviewScore>
                    <ReviewDetail>{reviews.ReviewDetail}</ReviewDetail>
                  </CardTextContainer>
                </Card>
              </CardContainer>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Review;
