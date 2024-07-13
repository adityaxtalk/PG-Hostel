import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Avatar } from '@mui/material';
import testimonial from '../../../assets/testimonial.jpg';
import { Person2Outlined } from '@mui/icons-material';

const PeopleSaySection = styled.section`
  background-image: url(${testimonial});
  background-size: cover;
  background-position: center;
  margin-top: 10%;
  padding: 50px 0;
  color: white;
`;

const TextWrapper = styled.div`
  background: rgba(63, 156, 193, 0.9);
  padding: 50px;
  width: 40%;
  max-width: 600px;
  color: white;
  margin: auto;

  @media (max-width: 768px) {
    width: 80%;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Heading = styled.div`
  margin-bottom: 20px;
  text-align: center;
  

  h5 {
    font-size: 1.2rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    margin: 20px 0;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
`;

const ParagraphWrapper = styled.div`
  text-align: center;

  p {
    margin-bottom: 20px;
    line-height: 1.5;
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const TestimonialBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const TestimonialName = styled.div`
  h5 {
    margin: 0;
    font-size: 13px;
    font-weight: 300;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

function PeopleSay() {
  return (
    <PeopleSaySection>
      <Container>
        <TextWrapper>
          <Heading>
            <Typography variant="h5" component="h5" sx={{ letterSpacing: 2, fontWeight: 400 }}>
              AT THE HEART OF COMMUNICATION
            </Typography>
            <Typography variant="h2" component="h2" sx={{ fontWeight: 400, margin: '20px 0' }}>
              People Say
            </Typography>
          </Heading>
          <ParagraphWrapper>
            <Typography variant="body1" component="p">
            "I had an amazing experience staying at PB Hostel. The facilities were top-notch, the rooms were clean and comfortable, and the staff was incredibly friendly and helpful. The hostel's location was convenient, with easy access to transportation and local attractions. I would highly recommend PB Hostel to anyone looking for a comfortable and enjoyable stay!"
            </Typography>
            <TestimonialBox>
              <StyledAvatar src={Person2Outlined} alt="Sonu Kumar" />
              <TestimonialName>
                <Typography variant="h5" component="h5">Sonu Kumar Shah</Typography>
              </TestimonialName>
            </TestimonialBox>
          </ParagraphWrapper>
        </TextWrapper>
      </Container>
    </PeopleSaySection>
  );
}

export default PeopleSay;
