import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';
import amenities from '../../../assets/amenities.jpeg';
import { CameraIndoor, HomeOutlined, Kitchen, LocalDrink, LocalParking, Power, Wifi, RoomPreferences } from '@mui/icons-material';

const Wrapper = styled.section`
  background-image: url(${amenities});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;

  @media (max-width: 768px) {
    background-size: cover;
    min-height: auto;
  }
`;

const TextContainer = styled.div`
  background: rgba(63, 156, 193, 0.9);
  padding: 50px;
  width: 50%; /* Adjust width to your preference */
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const IconBox = styled(Grid)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & svg {
    margin-right: 20px;
  }
`;

function Amenities() {
  return (
    <Wrapper className="wrapper top">
      <TextContainer>
        <Typography variant="h2" component="h2" sx={{ fontWeight: 400 }}>
          Amenities
        </Typography>
        <Typography paragraph sx={{ margin: '20px 0 50px 0', lineHeight: '30px' }}>
          Our hostel features a variety of room options, including private rooms and shared dormitories, all designed to provide a cozy and relaxing atmosphere. Each room is equipped with comfortable beds, clean linens, and secure lockers for your belongings. Our facilities include:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <IconBox container alignItems="center">
              <HomeOutlined fontSize="large" />
              <span>HOMELY ENVIRONMENT</span>
            </IconBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconBox container alignItems="center">
              <RoomPreferences fontSize="large" />
              <span>SPACIOUS ROOMS</span>
            </IconBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconBox container alignItems="center">
              <CameraIndoor fontSize="large" />
              <span>CCTV CAMERA</span>
            </IconBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconBox container alignItems="center">
              <Power fontSize="large" />
              <span>24X7 ELECTRICITY</span>
            </IconBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconBox container alignItems="center">
              <Wifi fontSize="large" />
              <span>WI-FI CAMPUS</span>
            </IconBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconBox container alignItems="center">
              <Kitchen fontSize="large" />
              <span>MESS AVAILABLE (HEALTHY AND HOMELY FOOD)</span>
            </IconBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconBox container alignItems="center">
              <LocalDrink fontSize="large" />
              <span>MINERAL WATER</span>
            </IconBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconBox container alignItems="center">
              <LocalParking fontSize="large" />
              <span>Parking</span>
            </IconBox>
          </Grid>
        </Grid>
      </TextContainer>
    </Wrapper>
  );
}

export default Amenities;
