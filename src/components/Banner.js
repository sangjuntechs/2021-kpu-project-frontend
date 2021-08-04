import React from "react"
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from '../Img/banner1.jpeg';
import Banner2 from '../Img/banner2.jpeg';

const Container = styled.div`
    height: 500px;
`

const BannerImg = styled.img`
    height:460px;
    width: 100%;
    border-radius: 15px;
`


function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        centerMode:true,
        centerPadding:'10%',
      };
    return (
        <Container>
        <Slider {...settings}>
          <div>
            <BannerImg src={Banner1} alt='banner1'/> 
          </div>
          <div>
            <BannerImg src={Banner2} alt='banner1'/>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </Container>
    )
}

export default Banner;