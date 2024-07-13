import React from 'react';
import styled from 'styled-components';
import hostel1 from "../../../assets/hostel1.jpg";
import hostel2 from "../../../assets/hostel2.jpg";

const AboutSection = styled.section`
  margin-top: 10%;
  margin-bottom: 50px;
  padding: 0 5%;

  @media (max-width: 768px) {
    margin-top: 20%;
  }

  @media (max-width: 480px) {
    margin-top: 30%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Image1 = styled.img`
  width: 310px;
  height: 450px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Image2 = styled.img`
  width: 325px;
  height: 220px;
  position: absolute;
  bottom: 5px;
  right: 30%;
  z-index: 2;

  @media (max-width: 768px) {
    width: 70%;
    height: auto;
    position: static;
    margin-top: -40%;
  }
`;

const Heading = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background: #C1B086;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const SubTitle = styled.h5`
  font-weight: 400;
  letter-spacing: 2px;
  padding-top: 20px;
  color: #5f5f5f;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin: 20px 0 40px 0;
  color: #222222;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 25px;
  color: #5f5f5f;

  @media (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;


function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Left>
          <ImgContainer>
            <Image1 src={hostel2} alt="Image 1" />
            <Image2 src={hostel1} alt="Image 2" />
          </ImgContainer>
        </Left>
        <Right>
          <Heading>
            <SubTitle>RAISING COMFORT TO THE HIGHEST LEVEL</SubTitle>
            <Title>Welcome to PB Hostel</Title>
            <Paragraph>PB Hostel was founded with the vision of creating a vibrant and inclusive community where people from all walks of life can come together and share experiences. Since our inception, we have been committed to providing top-notch hospitality, ensuring that every guest feels valued and cared for during their stay.</Paragraph>
            <Paragraph>Situated in a prime location, PB Hostel offers easy access to major attractions, public transportation, restaurants, and shopping centers. Whether you're here to explore the city, attend school, or work, you'll find everything you need just a stone's throw away.</Paragraph>
          </Heading>
        </Right>
      </Container>
    </AboutSection>
  );
}

export default About;
