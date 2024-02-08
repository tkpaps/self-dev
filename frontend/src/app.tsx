import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import { extendTheme } from '@chakra-ui/react'
import LandingPage from './pages/landingPage';
import Pricing from './pages/Pricing';
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage';
import myTheme from './themes/Theme';

const App = () => {
  return (
    <ChakraProvider theme={myTheme}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;