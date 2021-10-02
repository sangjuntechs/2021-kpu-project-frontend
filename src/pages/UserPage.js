import React, { useEffect, useState } from "react";
import Axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from "../Img/logorealfinal.jpeg";


const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
`;

const LogoImg = styled.img`
  height: 300px;
  width: 400px;
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


const ReviewDetail = styled.p`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.9px;
`;

const ReviewScore = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:3rem;
  font-weight: 300;
  padding: 3rem;
`

const BtnContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin-left:1rem;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserPage = ({ match }) => {

    const [review, setReview] = useState([]);


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
  <Header>
        <Link to='/'>
        <LogoImg src={Logo} alt="로고" />
        </Link>
  </Header>
  <Head>내가 작성한 리뷰들이에요!</Head>
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
                    <ReviewScore>⭐️ 5점 / {reviews.ReviewScore}점</ReviewScore>
                    <ReviewDetail>{reviews.ReviewDetail}</ReviewDetail>
                  </CardTextContainer> 
                </Card>
                <BtnContainer>
                <button>삭제</button>
                <button>수정</button>
                </BtnContainer>
              </CardContainer>
              
            </div>
          );
        })}
  </>;
};

export default UserPage;
