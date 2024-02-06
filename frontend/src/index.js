import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { ColorModeScript } from '@chakra-ui/react'
import myTheme from './themes/Theme';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
        <App/>
    </>
    );