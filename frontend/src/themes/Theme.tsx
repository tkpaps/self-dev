import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const proTheme = extendTheme(theme)
const extension  = {
  colors: { ...proTheme.colors, brand: proTheme.colors.teal },
  initialColorMode: 'dark',
  useSystemColorMode: true,
}
const myTheme = extendTheme(extension, proTheme)

export default myTheme;