# RN Scaffold 🚀

A battle-tested, production-ready React Native scaffold powered by **Expo SDK 54**, **Expo Router v6**, **Redux Toolkit + RTK Query**, **NativeWind v4**, **TypeScript**, and **Zod**.

---

## 🌟 Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Expo SDK 54](https://docs.expo.dev/) | React Native `0.81.5` with New Architecture enabled |
| **Routing** | [Expo Router v6](https://docs.expo.dev/router/introduction/) | File-based, typed routing with nested stacks and tabs |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) | Global store with RTK Query API caching layer |
| **Styling** | [NativeWind v4](https://www.nativewind.dev/) | Utility-first Tailwind CSS `3.4` styling |
| **Networking** | [Axios](https://axios-http.com/) | Agnostic HTTP client with interceptor support |
| **Validation** | [Zod](https://zod.dev/) | Strict environment variable & schema validation |
| **Monitoring** | [Sentry](https://docs.sentry.io/platforms/react-native/) | Crash reporting via `@sentry/react-native` |
| **i18n** | [i18next](https://www.i18next.com/) | Localization support via `expo-localization` |
| **Testing** | [Jest](https://jestjs.io/) | `jest-expo` & `@testing-library/react-native` |
| **Code Quality** | ESLint + Prettier | Enforced with Husky git hooks & Commitlint |

---

## 📁 Directory Structure

```text
rn-scaffold/
├── app/                      # Expo Router File-Based Navigation
│   ├── _layout.tsx           # Root Layout (Redux, Sentry, ThemeProvider)
│   ├── index.tsx             # Hero Landing Screen
│   ├── (auth)/               # Authentication Route Group
│   │   ├── sign-in.tsx       # Sign In Screen
│   │   └── sign-up.tsx       # Sign Up Screen
│   └── (tabs)/               # Main App Tab Bar Layout
│       ├── _layout.tsx       # Bottom Tabs Navigator
│       ├── index.tsx         # Dashboard Tab
│       └── settings.tsx      # Settings Tab
├── src/                      # Source Code Architecture
│   ├── api/                  # Agnostic API Client & Auth Provider
│   │   ├── client.ts         # Axios instance abstraction
│   │   └── auth-provider.ts  # Auth Provider interface contracts
│   ├── config/               # Environment & Runtime Configuration
│   │   └── env.ts            # Zod env schema validation
│   ├── features/             # Feature Modules (Auth, Users, etc.)
│   │   └── auth/             # Auth slice & RTK Query endpoints
│   ├── store/                # Redux Store & Root Reducer Setup
│   │   ├── index.ts          # Store configuration & TypeScript exports
│   │   └── root-reducer.ts   # Combined reducers
│   ├── components/           # Shared Reusable UI Components
│   ├── hooks/                # Custom React Hooks
│   ├── theme/                # Theme Tokens & Providers
│   ├── i18n/                 # Localization setup
│   └── utils/                # Utility Functions
├── app.config.ts             # Dynamic Expo Configuration
├── metro.config.js           # NativeWind Metro Transformer
├── tailwind.config.js        # Tailwind CSS presets & content paths
├── tsconfig.json             # TypeScript config with @/ path aliases
└── eas.json                  # EAS Build & Submit configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `20.x` or higher
- npm `10.x` or higher
- Expo Go app or iOS/Android emulator

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NengakDakup/rn-scaffold.git
   cd rn-scaffold
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure Environment Variables**:
   Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   ```env
   EXPO_PUBLIC_API_URL=https://api.example.com
   EXPO_PUBLIC_SENTRY_DSN=
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm start` | `expo start` | Starts Metro bundler |
| `npm run android` | `expo start --android` | Launches Android emulator |
| `npm run ios` | `expo start --ios` | Launches iOS simulator |
| `npm run typecheck` | `tsc --noEmit` | Validates TypeScript types across the project |
| `npm run lint` | `eslint .` | Runs ESLint analysis |
| `npm run test` | `jest` | Executes test suite with `jest-expo` |
| `npm run build:preview` | `eas build --profile preview` | Builds preview binary via EAS |
| `npm run build:production` | `eas build --profile production` | Builds production binary via EAS |

---

## 🔒 Environment Validation

All environment variables are validated at runtime boot using **Zod** in `src/config/env.ts`. If an environment variable is missing or malformed, the app fails early with a descriptive error message instead of failing unexpectedly deep in a screen flow.

---

## 📦 Building with EAS

This project is configured out-of-the-box for **Expo Application Services (EAS)**:

1. **Install EAS CLI**:
   ```bash
   npm install --global eas-cli
   ```

2. **Build Preview**:
   ```bash
   npm run build:preview
   ```

3. **Build Production**:
   ```bash
   npm run build:production
   ```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
