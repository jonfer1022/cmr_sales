import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    bg: '#f5f5f5',
    bgDark: '#262628',
    border: '#d2d6da',
    action: '#277fea',
    actionDisabled: '#d2d6da',
    secondary: '#d4d6d8',
    white: 'white',
  },

  fonts: {
    family: 'Roboto, sans-serif',
    sizes: {
      small: '1.1rem',
      medium: '1.5rem',
      large: '2rem',
    },
    weight: {
      light: 300,
      normal: 400,
      bold: 700,
    },
    color: {
      primary: 'black',
      secondary: 'blue',
      light: 'gray',
      white: 'white',
      warning: 'red',
    },
  },
};

export { theme };
