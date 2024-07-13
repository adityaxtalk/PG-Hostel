import { createTheme } from '@mui/material'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './modules/Header'
import Bio from './modules/Bio'
import About from './modules/About'
import Amenities from './modules/Amenities'
import Restaurant from './modules/Restaurant'
import Rooms from './modules/Rooms'
import PeopleSay from './modules/PeopleSay'
import Gallery from './modules/Gallery'
import Footer from './modules/Footer'
const theme = createTheme({
    palette: {
        primary:{ main:  '#1976d2'},
        secondary : {main: '#c1b086'}
    }
})

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
        <Header/>
        <Bio/>
        <About/>
        <Amenities/>
        <Rooms/>
        <Restaurant/>
        <PeopleSay/>
        <Gallery/>
        <Footer/>
    </ThemeProvider>
  )
}

export default Home