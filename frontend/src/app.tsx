import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import { extendTheme } from '@chakra-ui/react'
import LandingPage from './pages/landingPage';
import Pricing from './pages/Pricing';
import { Login } from './components/authentication/Login';
import { SignUp } from './components/authentication/SignUp';
import myTheme from './themes/Theme';

const App = () => {
  return (
    <ChakraProvider theme={myTheme}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;