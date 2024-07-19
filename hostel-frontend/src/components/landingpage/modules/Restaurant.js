import React from 'react';
import styled from 'styled-components';
import {  Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Mess from '../../../assets/mess.jpg'
const RestaurantSection = styled.section`
  margin-top: 10%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  padding: 50px 50px 50px 100px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const Text = styled.div`
  margin-bottom: 25px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 4px;
    background: #C1B086;

`;

const AccordionWrapper = styled.div`
  margin-top: 30px;
`;

const menu = {
    Monday: {
      breakfast: ['Sattu paratha', 'Alu chana sabzi'],
      lunch: ['Chaval dal', 'Bhunjiya Aachar'],
      dinner: ['Roti sabji']
    },
    Tuesday: {
      breakfast: ['Roti sabji', 'Aachar'],
      lunch: ['Chaval dal', 'Sabji'],
      dinner: ['Aalo Paratha']
    },
    Wednesday: {
      breakfast: ['Roti sabji', 'Aachar'],
      lunch: ['Kadi chaval', 'Bhujiya Aachar'],
      dinner: ['Anda/Paneer', 'Roti']
    },
    Thursday: {
      breakfast: ['Puri chola'],
      lunch: ['Chaval sabji'],
      dinner: ['Tarka Roti']
    },
    Friday: {
      breakfast: ['Roti sabji', 'Aachar'],
      lunch: ['Chaval dal', 'Sabji'],
      dinner: ['Khir', 'Puri sabji']
    },
    Saturday: {
      breakfast: ['Roti sabji', 'Aachar'],
      lunch: ['Khichdi Chokha', 'Papad'],
      dinner: ['Roti sabji', 'Aloo']
    },
    Sunday: {
      breakfast: ['Moori chana'],
      lunch: ['Chaval', 'Chicken/Paneer'],
      dinner: ['Roti sabji', 'Aachar']
    }
  };
  
function Restaurant() {
  

  return (
    <RestaurantSection id="restaurant">
      <Container>
        <Left>
          <img src={Mess} alt="Restaurant" />
        </Left>
        <Right>
          <Text>
            <Typography
              variant="h2"
              component="h3"
              sx={{ fontWeight: 400, marginBottom: "20px" }}
            >
              OUR MENU
            </Typography>
            <Typography paragraph sx={{ lineHeight: "25px" }}>
              Delicious and nutritious meals served daily
            </Typography>
          </Text>
          <AccordionWrapper>
            {Object.keys(menu).map((day) => (
              <Accordion key={day}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{day}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6">Breakfast: ( 08:45 A.M. - 09:45 A.M. )</Typography>
                  <ul>
                    {menu[day].breakfast.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <Typography variant="h6">Lunch  ( 03:00 P.M. - 05:00 P.M. )</Typography>
                  <ul>
                    {menu[day].lunch.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <Typography variant="h6">Dinner ( 08:45 P.M. - 09:30 P.M. )</Typography>
                  <ul>
                    {menu[day].dinner.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionWrapper>
        </Right>
      </Container>
    </RestaurantSection>
  );
}

export default Restaurant;
