import {lightTheme} from './lightTheme.ts';
import {darkTheme} from './darkTheme.ts';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  [ThemeType.light]: lightTheme,
  [ThemeType.dark]: darkTheme,
};

export default themes;
