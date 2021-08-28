import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import Logo from "../Img/logorealfinal.jpeg";
import ImageUploader from "react-images-upload";
import Footer from "../components/Footer";

const Container1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 4px 8px gray;
  width: 50%;
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 15px;
`;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 300px;
  width: 400px;
`;

const ProdImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  width: 20rem;
  height: 20rem;
  border-radius: 5px;
`;

const ProdName = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0.5rem;
  text-align: center;
  padding: 3rem;
  padding-bottom: 0;
  width: 20rem;
`;

const ProdDetail = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0.5rem;
  text-align: center;
  padding-top: 0.5rem;
  letter-spacing: 1.5px;
`;

const TextContainer1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 5rem;
  width: 45%;
`;

const TextInput = styled.input`
  padding: 1rem;
  margin: 5px;
  width: 35rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  width: 35rem;
  height: 20rem;
  margin: 5px;
`;

const Select = styled.select`
  padding: 0.5rem;
`;

const ScoreMemo = styled.p`
  display: inline-block;
  margin-left: 1rem;
  letter-spacing: 0.5px;
`;

const ScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const ImageBox= styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:3rem;
  width: 80%;
`

const DetailPage = ({ match }) => {
  const [Product, setProduct] = useState([]);
  const [ReviewTitle, setReviewTitle] = useState("");
  const [ReviewDetail, setReviewDetail] = useState("");
  const [ReviewScore, setReviewScore] = useState("");
  const [pictures, setPictures] = useState();

  const onDrop = (picture) => {
    setPictures(picture[0])
  };

  console.log(pictures)

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "reviewTitle") {
      setReviewTitle(value);
    }
    if (name === "reviewDetail") {
      setReviewDetail(value);
    }
    if (name === "reviewScore") {
      setReviewScore(value);
    }
  };

  useEffect(() => {
    Axios.get(`http://3.34.59.69/Product/detail/${match.params.id}`).then(
      (res) => {
        console.log(res.data, "detail");
        setProduct(res.data);
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header>
        <LogoImg src={Logo} alt="로고" />
      </Header>
      <Container1>
        <ItemContainer>
          <ProdImg
            src={`${
              Product[1] ? `http://3.34.59.69${Product[1][0].productImg}` : ""
            }`}
            alt="prodImg"
          />
          <TextContainer1>
            <ProdName>{Product[1] ? Product[1][0].productName : ""}</ProdName>
            <ProdDetail>
              소비자가격 {Product[1] ? Product[1][0].productPrice : ""}원
            </ProdDetail>
            <ProdDetail>
              {Product[1] ? Product[1][0].productDetail : ""}
            </ProdDetail>
          </TextContainer1>
        </ItemContainer>
        <ReviewContainer>
          <ProdName>리뷰를 남겨보세요 🥰</ProdName>
          <ImageBox>
            사진리뷰는 사랑입니다.
          <ImageUploader
            withIcon={true}
            onChange={onDrop}
            imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
            maxFileSize={5242880}
            withPreview={true}
          />
          </ImageBox>
          <TextInput
            type="text"
            onChange={onChange}
            value={ReviewTitle}
            placeholder="리뷰 제목을 작성해주세요!"
            name="reviewTitle"
          />
          <ScoreBox>
            <Select name="reviewScore" onChange={onChange} value={ReviewScore}>
              <option value="1">1점 ⭐️</option>
              <option value="2">2점 ⭐️</option>
              <option value="3">3점 ⭐️</option>
              <option value="4">4점 ⭐️</option>
              <option value="5">5점 ⭐️</option>
            </Select>
            <ScoreMemo>
              {ReviewScore === "1" ? "1점이요? 많이 안좋았나봐요 😱" : ""}
              {ReviewScore === "2" ? "2점이라니 다음엔 꼭 좋은 향수를 🤔" : ""}
              {ReviewScore === "3" ? "3점! 평범한 향수였군요 😏" : ""}
              {ReviewScore === "4"
                ? "4점!! 높은 점수에요! 사람들에게 자랑해주세요 😘"
                : ""}
              {ReviewScore === "5" ? "5점! 혹시 인생향수?!🤩" : ""}
            </ScoreMemo>
          </ScoreBox>
          <TextArea
            type="textarea"
            value={ReviewDetail}
            onChange={onChange}
            placeholder="리뷰 내용을 작성해주세요!"
            name="reviewDetail"
          />
        </ReviewContainer>
      </Container1>
      <Container2></Container2>
      <Footer></Footer>
    </>
  );
};

export default DetailPage;
