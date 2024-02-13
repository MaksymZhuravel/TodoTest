import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider as ThemeProviderStyled} from 'styled-components';
import themes, {ThemeType} from './themes.ts';

interface IProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<IProps> = ({children}) => {
  const defaultTheme = useColorScheme() as ThemeType;

  return (
    <ThemeProviderStyled theme={themes[defaultTheme]}>
      {children}
    </ThemeProviderStyled>
  );
};

export default ThemeProvider;
