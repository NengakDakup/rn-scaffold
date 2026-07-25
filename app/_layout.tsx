import '../global.css';
import * as Sentry from '@sentry/react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '@/store';
import { env } from '@/config/env';

if (env.EXPO_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: env.EXPO_PUBLIC_SENTRY_DSN,
    debug: false,
  });
}

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#020617',
    card: '#0f172a',
    border: '#1e293b',
  },
};

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#020617' }}>
      <Provider store={store}>
        <ThemeProvider value={CustomDarkTheme}>
          <StatusBar style="light" backgroundColor="#020617" />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: '#020617' },
            }}
          />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
