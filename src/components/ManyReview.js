import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rotate from "react-reveal/Rotate";
import Axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 120vh;
  margin-top: 5rem;
`;


const SliderConatiner = styled.div`
  width: 60vw;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 100%;
  transform: translateY(-9rem);
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25vw;
  height: 60vh;
  box-shadow: 1px 2px 3px gray;
  border-radius: 15px;
  margin: 1rem;
  padding:2rem;
  box-sizing:border-box;
  filter: drop-shadow(5px);
  cursor: pointer;
  transition: 0.3s linear;
  :hover {
    background-color: rgb(240, 240, 240);
    transform: translateY(-1rem);
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HotFont = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: red;
  margin-bottom: 0.5rem;
`;

const BigFont = styled.div`
  font-size: 2rem;
  font-weight: 300;
`;

const MidFont = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  text-align:center;
`;

const SmallFont = styled.div`
  margin-top:2rem;
  font-size: 0.8rem;
  text-align:center;
`

const ProductImg = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 10px;
  margin: 2rem;
`;

const ManyReview = ({ match }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "80px",
    speed: 1000,
  };

  const [rank1, setRank1] = useState([]);
  const [rank2, setRank2] = useState([]);
  const [rank3, setRank3] = useState([]);

  useEffect(() => {
    Axios.get("http://3.34.59.69/Rank").then((res) => {
      setRank1(res.data.slice(0, 2));
      setRank2(res.data.slice(2, 4));
      setRank3(res.data.slice(4, 6));
      console.log(res.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SliderConatiner>
        <Slider {...settings}>
          <div>
            <CardContainer>
              {rank1.map((rank1s) => {
                return (
                  <Card key={rank1s.ProductNum}>
                    <Link to={`/Product/detail/${rank1s.ProductNum}`}>
                      <MidFont>{rank1s.ProductName}</MidFont>
                      <ProductImg
                        src={`http://3.34.59.69${rank1s.ProductImg}`}
                      />
                      <SmallFont>소비자가 {rank1s.ProductPrice}원</SmallFont>
                    </Link>
                  </Card>
                );
              })}
            </CardContainer>
          </div>
          <div>
            <CardContainer>
              {rank2.map((rank2s) => {
                return (
                  <Card key={rank2s.ProductNum}>
                    <Link className='Link'to={`/Product/detail/${rank2s.ProductNum}`}>
                      <MidFont>{rank2s.ProductName}</MidFont>
                      <ProductImg
                        src={`http://3.34.59.69${rank2s.ProductImg}`}
                      />
                      <SmallFont>소비자가 {rank2s.ProductPrice}원</SmallFont>
                    </Link>
                  </Card>
                );
              })}
            </CardContainer>
          </div>
          <div>
            <CardContainer>
              {rank3.map((rank3s) => {
                return (
                  <Card key={rank3s.ProductNum}>
                    <Link to={`/Product/detail/${rank3s.ProductNum}`}>
                      <MidFont>{rank3s.ProductName}</MidFont>
                      <ProductImg
                        src={`http://3.34.59.69${rank3s.ProductImg}`}
                      />
                      <SmallFont>소비자가 {rank3s.ProductPrice}원</SmallFont>
                    </Link>
                  </Card>
                );
              })}
            </CardContainer>
          </div>
        </Slider>
      </SliderConatiner>
      <Rotate top right delay={300}>
        <TextContainer>
          <HotFont>HOT!</HotFont>
          <BigFont>다향러들이 가장 많이 사용해본 향수에요!</BigFont>
          <MidFont>많은 리뷰에는 이유가 있는 법이겠죠? 🤔</MidFont>
        </TextContainer>
      </Rotate>
    </Container>
  );
};

export default ManyReview;
