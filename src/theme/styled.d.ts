import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      bgDark: string;
      action: string;
      actionDisabled: string;
      border: string;
      secondary: string;
      white: string;
    };

    fonts: {
      family: string;
      sizes: {
        small: string;
        medium: string;
        large: string;
      };

      weight: {
        light: number;
        normal: number;
        bold: number;
      };

      color: {
        primary: string;
        secondary: string;
        light: string;
        white: string;
        warning: string;
      };
    };
  }
}
