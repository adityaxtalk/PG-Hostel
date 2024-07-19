import React from 'react';
import styled from 'styled-components';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import tripleSharing from "../../../assets/triple-sharing-room.png";
import doubleSharing from "../../../assets/double-sharing-room.png";
import { RowingOutlined } from '@mui/icons-material';

const RoomSection = styled.section`
  margin-top: 5%;
  padding: 20px 0;
  background: #f8f8f8;
`;

const HeadingTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 4px;
    background: #C1B086;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const RoomBox = styled(Box)`
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px 0 rgb(37 46 89 / 20%);
  }
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px; /* Set height for all images */
  object-fit: cover; /* Ensure the images cover the area without distortion */
`;

const RoomText = styled.div`
  padding: 20px;
  text-align: center;
`;

const PriceText = styled(Typography)`
  font-size: 20px;
  span {
    font-size: 12px;
    color: grey;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: #3f9cc1;
  color: white;
  &:hover {
    background-color: #358cae;
  }
`;

function Rooms() {
  const roomData = [
    { imgSrc: tripleSharing, title: 'Boys Triple Sharing Rooms',oneMonthUnitPrice: -1 ,threeMonthUnitPrice: 5000, sixMonthUnitPrice: 4600, twelveMonthUnitPrice: 4200 },
    { imgSrc: doubleSharing, title: 'Boys Double Sharing Rooms',oneMonthUnitPrice: -1, threeMonthUnitPrice: 5500, sixMonthUnitPrice: 5000, twelveMonthUnitPrice: 4600 },
    { imgSrc: tripleSharing, title: 'Girls Triple Sharing Rooms',oneMonthUnitPrice: 5200, threeMonthUnitPrice: 4800, sixMonthUnitPrice: 4400, twelveMonthUnitPrice: 4000 },
    { imgSrc: doubleSharing, title: 'Girls Double Sharing Rooms',oneMonthUnitPrice: 5600, threeMonthUnitPrice: 5200, sixMonthUnitPrice: 4800, twelveMonthUnitPrice: 4400 },
  ];

  return (
    <RoomSection id="room">
      <Container>
        <HeadingTop>
          <Box>
            <Typography variant="h5" component="h5" sx={{ letterSpacing: 2, color: '#5f5f5f', fontWeight: 400 }}>
              RAISING COMFORT TO THE HIGHEST LEVEL
            </Typography>
            <Typography variant="h2" component="h2" sx={{ fontWeight: 400, margin: '20px 0 40px 0', color: '#222222' }}>
              Rooms
            </Typography>
          </Box>
        </HeadingTop>
        <Grid container spacing={4}>
          {roomData.map((room, index) => (
            <Grid item xs={12} sm={6} xl={3} key={index}>
              <RoomBox>
                <RoomImage src={room.imgSrc} alt={room.title} />
                <RoomText>
                  <Typography variant="h3" component="h3" sx={{ fontWeight: 400, marginBottom: '10px', fontSize: '1.25rem' }}>
                    {room.title}
                  </Typography>
                  
                    {room.oneMonthUnitPrice > 0 && <PriceText><span>Rs. </span> {room.oneMonthUnitPrice} X 1 <span>{room.oneMonthUnitPrice} </span> </PriceText>}
        
                  <PriceText>
                    <span>Rs. </span>{room.threeMonthUnitPrice} X 3 <span> {room.threeMonthUnitPrice * 3}</span>
                  </PriceText>
                  <PriceText>
                    <span>Rs. </span>{room.sixMonthUnitPrice} X 6 <span> {room.sixMonthUnitPrice * 6}</span>
                  </PriceText>
                  <PriceText>
                    <span>Rs. </span>{room.twelveMonthUnitPrice} X 12 <span> {room.twelveMonthUnitPrice * 12}</span>
                  </PriceText>
                </RoomText>
              </RoomBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RoomSection>
  );
}

export default Rooms;
