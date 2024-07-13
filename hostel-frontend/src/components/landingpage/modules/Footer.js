import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import styled from 'styled-components';



const mapEmbedStyle = {
  width: '100%',
  minHeight: '200px',
  border: 'none',
};

const FooterSection = styled.footer`
  padding: 40px 0;
`;

const MapContainer = styled.div`
  width: 100%;
`;

const ContactContent = styled.div`
  margin-top: 20px;
  border-left: 2px solid #C1B086;
  border-bottom: 2px solid #C1B086;
  padding:1rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MapContainer>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.89684549276!2d85.28286927523469!3d25.872872277282134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed6b1c90088795%3A0xa58ae65ccf5f2113!2sP.B%20Boy&#39;s%26%20Girls%20Hostel!5e0!3m2!1sen!2sin!4v1720865603583!5m2!1sen!2sin" width="400" height="300"  style={mapEmbedStyle} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </MapContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactContent>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              
              <Typography variant="body1" gutterBottom>
                Phone: 9708400495, 993944914
              </Typography>
              <Typography variant="body1" gutterBottom>
                Address: 002, Road, near CV Raman University, Bafapur Banthu, Bhagwanpur, Bihar 844114
              </Typography>
            </ContactContent>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
          <Grid item>
            <Typography variant="body2" color="textSecondary" align="center">
              &copy; {new Date().getFullYear()} PB Boys & Girls Hostel. All rights reserved.
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Developed by Sonu Kumar Shah and Aditya Kumar
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterSection>
  );
};

export default Footer;
