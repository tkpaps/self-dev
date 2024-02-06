import React from 'react';
import { HTMLChakraProps, chakra } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export const Logo = (props: HTMLChakraProps<'svg'>) => (
  <RouterLink to="/">
  <chakra.svg
    color="accent"
    height="9"
    width="auto"
    viewBox="0 0 499 89"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text fill="currentColor" x="80" y="65" fontFamily="monospace" fontSize="90" fontWeight="bold">
        <tspan x="80" dy="0">{"{"}</tspan>
        <tspan x="120" dy="0">s</tspan>
        <tspan x="160" dy="0">e</tspan>
        <tspan x="200" dy="0">l</tspan>
        <tspan x="240" dy="0">f</tspan>
        <tspan x="280" dy="0">:</tspan>
        <tspan x="320" dy="0" >d</tspan>
        <tspan x="370" dy="0" >e</tspan>
        <tspan x="420" dy="0" >v</tspan>
        <tspan x="460" dy="0">{"}"}</tspan>
    </text>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="44"
        y1="-1.78854"
        x2="44"
        y2="91.3879"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset="1" stopColor="currentColor" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="417.5"
        y1="13.282"
        x2="417.5"
        y2="76.282"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset="1" stopColor="currentColor" />
      </linearGradient>
    </defs>
  </chakra.svg>
  </RouterLink>
)