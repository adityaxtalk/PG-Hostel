import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import Slider from 'react-slick';
import { Container, Typography, Box } from '@mui/material';
import styled from 'styled-components';

import image1 from "../../../assets/image1.jpeg"
import image2 from "../../../assets/image2.jpeg"
import image3 from "../../../assets/image3.jpeg"
import image4 from "../../../assets/image4.jpeg"
import hostel1 from "../../../assets/hostel1.jpg"
import hostel2 from "../../../assets/hostel2.jpg"

const CarouselSection = styled.section`
  margin-top: 10%;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h5 {
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 40%;
        height: 4px;
        background: #C1B086;
 }
  }
  
`;

const ImageWrapper = styled.div`
  text-align: center;
  img {
    width: 270px;
    height: 350px;
    object-fit: cover;
    margin: 0 auto;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function Gallery() {
  return (
    <CarouselSection id="gallary">
      <Container>
        <Heading>
          <Box>
            <Typography variant="h5">WELCOME TO OUR PHOTO GALLERY</Typography>
          </Box>
        </Heading>
        <Slider {...settings}>
          <ImageWrapper>
            <img src={image1} alt="Gallery 1" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={image2} alt="Gallery 2" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={image3} alt="Gallery 3" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={image4} alt="Gallery 4" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={hostel1} alt="Gallery  5" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={hostel2} alt="Gallery 6" />
          </ImageWrapper>
          </Slider>
      </Container>
    </CarouselSection>
  );
}

export default Gallery;