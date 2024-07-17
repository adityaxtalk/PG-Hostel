
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, createTheme, CssBaseline, Grid, IconButton, InputAdornment, Paper, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { authRequest, authError, authSuccess, authFailed } from '../redux/userRelated/userSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const defaultTheme= createTheme();

const LightPurpleButton = styled(Button)`
  && {
   background-color: #7f56da;
   color: #fff;
   &:hover {
     background-color: #7a1ccb;
   }
  }
`

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigate=useNavigate();
  
  const dispatch = useDispatch();
  const handleSubmit = (event)=> {
    event.preventDefault();
    if (email.length === 0){ setEmailError(true); return }
    if (password.length === 0){ setPasswordError(true); return}
    fetch(`${process.env.REACT_APP_API_URI}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password})
    }).then(data=> data.json()).then(res=> {
      console.log(res);
      dispatch(authSuccess(res))
       navigate("/Admin/dashboard");
    }).catch(error=> {
      console.error(error);
      toast.error(error.message)
      dispatch(authFailed(error.message));
    })
  }

  const handleInputChange = (event) => {
    const {name} = event.target;
    console.log(name)
    if (name === 'email') {
      if (event.target.value.length)
        setEmailError(false);
      else 
        setEmailError(true);
      setEmail(event.target.value);
    }
    if (name === 'password') {
      console.log(event.target.value)
      if (event.target.value.length)
        setPasswordError(false);
      else 
        setPasswordError(true);
      setPassword(event.target.value);
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh"}}>
          <CssBaseline/>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography variant="h4" sx={{mb: 2, color: "#2c2143"}}>Login</Typography>
              <Typography variant="h7">
                Welcome! Please enter your details
              </Typography>
              <Box component="form" noVaildate  onSubmit={handleSubmit} sx={{mt:2}}>
                <TextField margin='normal'  fullWidth id="email" label="Enter your email" name='email' autoComplete='email' autoFocus error={emailError} helperText={emailError && "Email is required"} onChange={handleInputChange} />
                <TextField margin='normal'  fullWidth id="password" name="password" label="Password" type={toggle? 'text': 'password'} autoComplete="current-password" error={passwordError} helperText={passwordError && "Password is required"} onChange={handleInputChange} InputProps={{
                  endAdorment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={()=> setToggle(prevState=> !prevState)}>
                        {toggle ? <Visibility/>:
                        <VisibilityOff/>
                      }
                      </IconButton>
                    </InputAdornment>
                  )
                }}/>
                <LightPurpleButton type="submit" fullWidth variant="contained" sx={{mt: 3}}>
                  Login
                </LightPurpleButton>
              </Box>
            </Box>
          </Grid>

      </Grid>
    </ThemeProvider>
  )
}

const BoxContainer = styled(Box)`

`
export default Login