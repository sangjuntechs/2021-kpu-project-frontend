import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 110vh;
  margin-top: 10rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 5rem;
`;

const BigFont = styled.p`
  font-size: 3rem;
  font-weight: 300;
`;

const MidFont = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

const NewFont = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: red;
  margin-bottom: 0.5rem;
  @keyframes move {
    from {
      transform: translateY(0.2rem);
    }
    to {
      transform: translateY(-0.2rem);
    }
  }
  animation: move 0.7s infinite alternate linear;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const Card = styled.div`
  box-shadow: 2px 4px 8px gray;
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 27vw;
  height: 65vh;
  margin: 3rem;
  overflow: scroll;
  cursor: all-scroll;
`;

const ProdImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 15rem;
  height: 15rem;
  border-radius: 5px;
  padding-top: 3rem;
`;

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  padding-top: 1rem;
`;

const CardProdName = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin: 0.5rem;
  text-align: center;
`;

const CardProdPrice = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
`;

const CardDetail = styled.p`
  text-align: start;
  letter-spacing: 0.1rem;
  margin-top: 1rem;
  color: rgb(120, 120, 120);
`;

const CardSLevel = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  text-align: center;
`;

const Button = styled.button`
  background-color: rgb(200,200,200); /* Green */
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 10px;
  margin-left: 1.5rem;
  margin-right: auto;
  font-weight: 600;
  border-radius: 5px;
  transform: translateY(-0.18rem);
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const SLevelLawFont = styled.p`
  font-size: 1rem;
  color: green;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const SLevelMidFont = styled.p`
  font-size: 1rem;
  color: orange;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const SLevelHighFont = styled.p`
  font-size: 1rem;
  color: red;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const SlevelLabel = styled.div`
  position: absolute;
  font-size: 0.8rem;
  bottom: 4rem;
  padding: 0.3rem;
`;

const HashTag = styled.p`
  color: dodgerblue;
  font-size:0.8rem;
  display: inline-flex;
  margin:0.5rem;
`

  const NewProducts = ({match}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHieght: true,
    centerMode: true,
    centerPadding: "80px",
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);

  useEffect(() => {
    Axios.get("http://3.34.59.69/Product").then((res) => {
        setProduct1(res.data.slice(0, 3));
        setProduct2(res.data.slice(3, 6));
        setProduct3(res.data.slice(6, 9));

    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <TitleContainer>
        <NewFont>NEW!</NewFont>
        <BigFont>?????? ????????? ??????????????????!</BigFont>
        <MidFont>?????? ?????? ???????????? ?????? ?????????~ ?????????????</MidFont>
      </TitleContainer>
      <Fade bottom delay={1000}>
        <Slider {...settings}>
          <div>
            <CardContainer>
              {product1.map((product1s) => {
                return (
                  <Card key={product1s.ProductNum}>
                    <ProdImg
                      src={`http://3.34.59.69${product1s.ProductImg}`}
                      alt="prodImg"
                    />
                    <CardTextContainer>
                      <HashTag>#{product1s.ProductF1} #{product1s.ProductF2} #{product1s.ProductF3}</HashTag>
                      <CardProdName>{product1s.ProductName}</CardProdName>
                      <CardProdPrice>
                        ?????? {product1s.ProductPrice}???
                      </CardProdPrice>
                      <CardDetail>
                        {product1s.ProductDetail.length > 71
                          ? `${product1s.ProductDetail.slice(0, 71)}...`
                          : product1s.ProductDetail}
                      </CardDetail>
                      <CardSLevel>
                        <SLevelLawFont>
                          {product1s.ProductSLevel === "low"
                            ? "????????? Green ????"
                            : ""}
                        </SLevelLawFont>
                        <SLevelMidFont>
                          {product1s.ProductSLevel === "mid"
                            ? "????????? Orange ????"
                            : ""}
                        </SLevelMidFont>
                        <SLevelHighFont>
                          {product1s.ProductSLevel === "high"
                            ? "????????? Red ????"
                            : ""}
                        </SLevelHighFont>
                        <Link to={`/Product/detail/${product1s.ProductNum}`}>
                        <Button>????????? ???????????? ?????????!</Button>
                        </Link>
                      </CardSLevel>
                      <SlevelLabel>
                        <p>
                          {product1s.ProductSLevel === "low"
                            ? "???????????? ????????? ?????? ?????? ??????????????? ????"
                            : ""}
                        </p>
                        <p>
                          {product1s.ProductSLevel === "mid"
                            ? "????????? ?????? ???????????? ????????? ???????????? ????????? ????"
                            : ""}
                        </p>
                        <p>
                          {product1s.ProductSLevel === "high"
                            ? "???????????? ?????? ????????? ???????????? ??? ??????????????? ????"
                            : ""}
                        </p>
                      </SlevelLabel>
                    </CardTextContainer>
                  </Card>
                );
              })}
            </CardContainer>
          </div>

          <div>
            <CardContainer>
              {product2.map((product2s) => {
                return (
                  <Card key={product2s.ProductNum}>
                    <ProdImg
                      src={`http://3.34.59.69${product2s.ProductImg}`}
                      alt="prodImg"
                    />
                    <CardTextContainer>
                      <HashTag>#{product2s.ProductF1} #{product2s.ProductF2} #{product2s.ProductF3}</HashTag>
                      <CardProdName>{product2s.ProductName}</CardProdName>
                      <CardProdPrice>
                        ?????? {product2s.ProductPrice}???
                      </CardProdPrice>
                      <CardDetail>{product2s.ProductDetail.length > 71
                          ? `${product2s.ProductDetail.slice(0, 71)}...`
                          : product2s.ProductDetail}</CardDetail>
                      <CardSLevel>
                        <SLevelLawFont>
                          {product2s.ProductSLevel === "low"
                            ? "????????? Green"
                            : ""}
                        </SLevelLawFont>
                        <SLevelMidFont>
                          {product2s.ProductSLevel === "mid"
                            ? "????????? Orange"
                            : ""}
                        </SLevelMidFont>
                        <SLevelHighFont>
                          {product2s.ProductSLevel === "high"
                            ? "????????? Red"
                            : ""}
                        </SLevelHighFont>
                        <Link to={`/Product/detail/${product2s.ProductNum}`}>
                        <Button>????????? ???????????? ?????????!</Button>
                        </Link>
                      </CardSLevel>
                      <SlevelLabel>
                        <p>
                          {product2s.ProductSLevel === "low"
                            ? "???????????? ????????? ?????? ?????? ??????????????? ????"
                            : ""}
                        </p>
                        <p>
                          {product2s.ProductSLevel === "mid"
                            ? "????????? ?????? ???????????? ????????? ???????????? ????????? ????"
                            : ""}
                        </p>
                        <p>
                          {product2s.ProductSLevel === "high"
                            ? "???????????? ?????? ????????? ???????????? ??? ??????????????? ????"
                            : ""}
                        </p>
                      </SlevelLabel>
                    </CardTextContainer>
                  </Card>
                );
              })}
            </CardContainer>
          </div>

          <div>
            <CardContainer>
              {product3.map((product3s) => {
                return (
                  <Card key={product3s.ProductNum}>
                    <ProdImg
                      src={`http://3.34.59.69${product3s.ProductImg}`}
                      alt="prodImg"
                    />
                    <CardTextContainer>
                      <HashTag>#{product3s.ProductF1} #{product3s.ProductF2} #{product3s.ProductF3}</HashTag>
                      <CardProdName>{product3s.ProductName}</CardProdName>
                      <CardProdPrice>
                        ?????? {product3s.ProductPrice}???
                      </CardProdPrice>
                      <CardDetail>{product3s.ProductDetail.length > 71
                          ? `${product3s.ProductDetail.slice(0, 71)}...`
                          : product3s.ProductDetail}</CardDetail>
                      <CardSLevel>
                      <SLevelLawFont>
                          {product3s.ProductSLevel === "low"
                            ? "????????? Green"
                            : ""}
                        </SLevelLawFont>
                        <SLevelMidFont>
                          {product3s.ProductSLevel === "mid"
                            ? "????????? Orange"
                            : ""}
                        </SLevelMidFont>
                        <SLevelHighFont>
                          {product3s.ProductSLevel === "high"
                            ? "????????? Red"
                            : ""}
                        </SLevelHighFont>
                        <Link to={`/Product/detail/${product3s.ProductNum}`}>
                        <Button>????????? ???????????? ?????????!</Button>
                        </Link>
                      </CardSLevel>
                    </CardTextContainer>
                  </Card>
                );
              })}
            </CardContainer>
          </div>
        </Slider>
      </Fade>
    </Container>
  );
}

export default NewProducts;
