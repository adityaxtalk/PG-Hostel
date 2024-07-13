import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  color: ${(props) => props.theme.palette.text.primary};
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing(1)} ${(props) => props.theme.spacing(2)};

  @media (max-width: 600px) {
    padding: ${(props) => props.theme.spacing(1)};
  }
`;

const Logo = styled(Typography)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  color: ${(props) => props.theme.palette.text.primary};
  font-size: 1.5rem;

  & > img {
    width: 50px;
    height: auto;
    margin-right: ${(props) => props.theme.spacing(1)};
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;

    & > img {
      width: 40px;
    }
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: ${(props) => props.theme.palette.text.primary};
  text-decoration: none;
  font-size: 1rem;
  margin-left: ${(props) => props.theme.spacing(2)};
  cursor: pointer; 
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;



const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Logo variant="h6">
          <img src="logo.png" alt="PB Hostel" /> PB Hostel
        </Logo>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
        
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
