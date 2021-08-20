import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../Img/banner1.png";
import Banner2 from "../Img/banner2.png";
import Banner3 from "../Img/banner3.png";

const Container = styled.div`
  height: 60vh;
`;

const BannerImg = styled.img`
  height: 38rem;
  width: 100%;
  cursor: pointer;
`;


function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <BannerImg src={Banner1} alt="banner1" />
        </div>
        <div>
          <BannerImg src={Banner2} alt="banner1" />
        </div>
        <div>
          <BannerImg src={Banner3} alt="banner1" />
        </div>
      </Slider>
    </Container>
  );
}

export default Banner;
