import { DarkTheme } from '@react-navigation/native';
import { colors } from './colors';

export * from './colors';
export * from './useTheme';

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.surface,
    border: colors.surfaceBorder,
  },
};
