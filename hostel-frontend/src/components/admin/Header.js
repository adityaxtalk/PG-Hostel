import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authLogout } from '../../redux/userRelated/userSlice';

const StyledAppBar = styled(AppBar)`
  background-color: transparent !important;
  color: black;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;

    
  }
`;

const TypographyStyled = styled(Typography)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  margin-left: 2rem;
  cursor: pointer; 
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  margin-left: 2rem;
  cursor: pointer; 
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;



const Header = () => {
   const {currentUser} = useSelector(store=> store.user);
   const dispatch = useDispatch();

   const navigate = useNavigate()

   const handleLogout = () => {
    dispatch(authLogout());
    navigate("/login")
   }
    return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Logo to="/Admin/dashboard">
           PB Hostel Admin Page
        </Logo>
        <TypographyStyled>{currentUser.email}</TypographyStyled>
        <NavLinkStyled to="/Admin/bill">Generate Invoice</NavLinkStyled>
        <Button variant='text' color="secondary" onClick={handleLogout} >Logout</Button>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
