import '../global.css';
import * as Sentry from '@sentry/react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '@/store';
import { env } from '@/config/env';
import { colors, CustomDarkTheme } from '@/theme';

if (env.EXPO_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: env.EXPO_PUBLIC_SENTRY_DSN,
    debug: false,
  });
}

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: colors.background }}>
      <Provider store={store}>
        <ThemeProvider value={CustomDarkTheme}>
          <StatusBar style="light" backgroundColor={colors.background} />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.background },
            }}
          />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
