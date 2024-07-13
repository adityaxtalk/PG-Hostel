import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from "../../../assets/image1.jpeg";
import image2 from "../../../assets/image2.jpeg";
import image3 from "../../../assets/image3.jpeg";
import image4 from "../../../assets/image4.jpeg";

const HomeSection = styled.section`
    position: relative;
    height: 100vh;
    color: white;
`;

const HeadContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100%;
   padding: 0 10%;
   @media (max-width: 768px) {
       flex-direction: column;
       padding: 0 5%;
   }
`;

const Box = styled.div`
  max-width: 50%;
  @media (max-width: 768px) {
      max-width: 100%;
  }
`;

const Text = styled.div`
   margin: 20% 0 0 10%;
   @media (max-width: 768px) {
       margin: 10% 0 0 0;
       text-align: center;
   }
`;

const Title = styled.h1`
   font-size: 80px;
   font-weight: 400;
   @media (max-width: 768px) {
       font-size: 40px;
   }
   @media (max-width: 480px) {
       font-size: 30px;
   }
`;

const Paragraph = styled.p`
  font-weight: 400;
  line-height: 25px;
  font-family: sans-serif;
  font-size: 17px;
  margin: 50px 0 0 0;
  @media (max-width: 768px) {
      margin: 20px 0 0 0;
      font-size: 15px;
  }
  @media (max-width: 480px) {
      font-size: 14px;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageItem = styled.div`
   position: absolute;
   top: 20%;
   right: 20%;
   display: flex;
   flex-direction: column;
   cursor: pointer;

   & img {
     width: 140px;
     height: 94px;
     margin: 10px;
     transition: 0.5s;
   }

   & img.active {
     border: 2px solid white;
   }

   @media (max-width: 768px) {
       flex-direction: row;
       top: auto;
       right: auto;
       bottom: 10%;
       left: 10%;
       & img {
           width: 100px;
           height: 67px;
           margin: 5px;
       }
   }

   @media (max-width: 480px) {
       flex-direction: row;
       top: auto;
       right: auto;
       bottom: 5%;
       left: 5%;
       & img {
           width: 60px;
           height: 54px;
           margin: 3px;
       }
   }
`;

const OverlayText = styled.div`
  position: relative;
  &::after {
    content: 'PB Hostel';
    position: absolute;
    font-size: 300px;
    top: -120%;
    left: 0;
    font-weight: bold;
    opacity: 0.1; 
    @media (max-width: 768px) {
        font-size: 150px;
        top: -60%;
    }
    @media (max-width: 480px) {
        font-size: 100px;
        top: -40%;
    }
  }
`;

const Bio = () => {
    const [currentImage, setCurrentImage] = useState(image1);

    const handleImageChange = (image) => {
        setCurrentImage(image);
    }

    return (
        <HomeSection id="home">
            <HeadContainer>
                <Box>
                    <OverlayText>
                        <Text>
                            <Title>PB Hostel</Title>
                            <Paragraph>
                                Your ideal choice for comfortable and affordable accommodation. We offer a variety of room options equipped with modern amenities to suit your needs. Located centrally with easy access to key locations and services, PB Hostel provides a welcoming environment with free Wi-Fi, communal kitchens, and 24/7 security. Join our vibrant community and enjoy regular events and activities. Book your stay today for an unparalleled hostel experience.
                            </Paragraph>
                        </Text>
                    </OverlayText>
                </Box>
                <Image>
                    <img src={currentImage} alt="current slide" />
                </Image>
                <ImageItem>
                    <img src={image1} alt=" 1" className={currentImage === image1 ? 'active' : ""} onClick={() => handleImageChange(image1)} />
                    <img src={image2} alt="2" className={currentImage === image2 ? 'active' : ""} onClick={() => handleImageChange(image2)} />
                    <img src={image3} alt="3" className={currentImage === image3 ? 'active' : ""} onClick={() => handleImageChange(image3)} />
                    <img src={image4} alt="4" className={currentImage === image4 ? 'active' : ""} onClick={() => handleImageChange(image4)} />
                </ImageItem>
            </HeadContainer>
        </HomeSection>
    );
}

export default Bio;
