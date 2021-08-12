import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../Img/banner1.png";

const Container = styled.div`
  height: 60vh;
  margin-top: 5em;
`;

const BannerImg = styled.img`
  height: 38rem;
  width: 100%;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <BannerImg src={Banner1} alt="banner1" />
        </div>
        <div>
          <BannerContainer>뭘봐 시발</BannerContainer>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Slider>
    </Container>
  );
}

export default Banner;
