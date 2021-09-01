import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import Logo from "../Img/logorealfinal.jpeg";
import ImageUploader from "react-images-upload";
import Footer from "../components/Footer";
import { Link,} from "react-router-dom";

const Container1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:rgb(240,240,240);
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width:55%;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 4px 8px gray;
  padding: 3rem;
  box-sizing: border-box;
  width:80%;
  border-radius: 15px;
  margin-bottom: 3rem;
  margin-top: 3rem;
  background-color:white;
`;

const ItemContainer2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 4px 8px gray;
  padding: 1rem;
  box-sizing: border-box;
  width:80%;
  border-radius: 15px;
  height: 32rem;
  background-color: white;
  overflow: scroll;
  margin-bottom: 3rem;
  cursor: all-scroll;
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
  padding-bottom: 0;
  width: 20rem;
  margin-top:0;
`;

const BigFont = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin: 0.5rem;
  text-align: center;
  padding-bottom: 0;
  width: 20rem;
  margin-top:0;
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
  border-radius: 10px;
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
  margin-top:3rem;
`

const Button = styled.button`
  background-color: yellowgreen; /* Green */
  border: none;
  color: black;
  padding: 12px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 10px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const ReviewBox = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin:2rem;
  width:80%;
  padding:2rem;
  box-shadow: 2px 4px 8px gray;
  border-radius: 5px;
`

const ReviewImg = styled.img`
  width:10rem;
  height: 10rem;
  margin-right:1rem;
`

const RTitle = styled.p`
  font-size:1.2rem;
  font-weight: 300;
  margin-bottom:0.5rem;
`

const RTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:50%;
`

const DetailPage = ({ match }) => {
  const [Product, setProduct] = useState([]);
  const [ReviewTitle, setReviewTitle] = useState("");
  const [ReviewDetail, setReviewDetail] = useState("");
  const [ReviewScore, setReviewScore] = useState("");
  const [email, setEmail] = useState("");
  const [pictures, setPictures] = useState();

  const onDrop = (picture) => {
    setPictures(picture[0])
  };

  console.log(Product[0],'pro')


  const formData = new FormData();
  formData.append("title", ReviewTitle);
  formData.append("detail", ReviewDetail);
  formData.append("score", ReviewScore);
  formData.append("image", pictures);
  formData.append('email', email);
  formData.append('product', Product[1] ? Product[1][0].ProductNum : '')

  const onClick = () => {
    Axios.post("http://3.34.59.69/Review", formData).then(
      console.log("success userinfo save db..")
    );
    alert('리뷰 작성이 완료되었습니다! 멋진 리뷰 감사합니다🥰')
  }

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
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: (res) => {
        setEmail(res.kakao_account.email);
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header>
        <Link to='/'>
        <LogoImg src={Logo} alt="로고" />
        </Link>
      </Header>
      <Container1>
        <Container2>
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
        <ProdName>이 제품의 리뷰들이에요 🥳</ProdName>
        <ItemContainer2>
          {Product[0] ? Product[0].map((pro) => {
            return (
            <ReviewBox>
              <ReviewImg src={`http://3.34.59.69${pro.ReviewImg}`}/>
              <RTitleBox>
              <RTitle>{pro.ReviewTitle}</RTitle>
              {pro.Nickname.slice(0,2)}* 님의 리뷰
              <ProdDetail>5/ {pro.ReviewScore}점⭐️</ProdDetail>
              <ProdDetail>{pro.ReviewDetail}</ProdDetail>
              </RTitleBox>
            </ReviewBox>
            )  
          }) : ''}
        </ItemContainer2>
        </Container2>
        <ReviewContainer>
          <BigFont>리뷰를 남겨보세요 🥰</BigFont>
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
          <Button onClick={onClick}>리뷰 작성</Button>
        </ReviewContainer>
      </Container1>
      <Footer></Footer>
    </>
  );
};

export default DetailPage;
