import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';

export default function SignUpScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    router.replace('/(tabs)/' as any);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      className="flex-1 bg-background"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            padding: 24,
          }}
          contentContainerClassName="flex-grow justify-center p-6"
          keyboardShouldPersistTaps="handled"
        >
          {/* Top Bar Navigation */}
          <View style={{ marginBottom: 24 }} className="mb-6">
            <Link href="/(auth)/sign-in" asChild>
              <Pressable
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: colors.surface,
                  borderColor: colors.surfaceBorder,
                  borderWidth: 1,
                  borderRadius: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="w-10 h-10 bg-surface border border-surface-border rounded-xl items-center justify-center"
              >
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={colors.text.muted}
                />
              </Pressable>
            </Link>
          </View>

          {/* Main Auth Card */}
          <View
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.surfaceBorder,
              borderWidth: 1,
              padding: 24,
              borderRadius: 24,
            }}
            className="bg-surface border border-surface-border p-6 rounded-3xl shadow-2xl"
          >
            {/* Header */}
            <View
              style={{ alignItems: 'center', marginBottom: 24 }}
              className="items-center mb-6"
            >
              <View
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  borderColor: 'rgba(99, 102, 241, 0.3)',
                  borderWidth: 1,
                  borderRadius: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
                className="w-14 h-14 bg-indigo-600/15 border border-indigo-500/30 rounded-2xl items-center justify-center mb-4"
              >
                <Ionicons
                  name="person-add"
                  size={26}
                  color={colors.brand.accent}
                />
              </View>
              <Text
                style={{
                  color: colors.text.primary,
                  fontSize: 24,
                  fontWeight: '700',
                  marginBottom: 4,
                }}
                className="text-2xl font-bold text-white mb-1"
              >
                Create Account
              </Text>
              <Text
                style={{
                  color: colors.text.muted,
                  fontSize: 14,
                  textAlign: 'center',
                }}
                className="text-text-muted text-sm text-center"
              >
                Join RN Scaffold to start building mobile apps
              </Text>
            </View>

            {/* Inputs */}
            <View style={{ gap: 16, marginBottom: 24 }} className="gap-4 mb-6">
              <View>
                <Text
                  style={{
                    color: colors.text.secondary,
                    fontSize: 12,
                    fontWeight: '600',
                    marginBottom: 8,
                  }}
                  className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2"
                >
                  Full Name
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: colors.background,
                    borderColor: colors.surfaceBorder,
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                  }}
                  className="flex-row items-center bg-background border border-surface-border rounded-xl px-4 py-3"
                >
                  <Ionicons
                    name="person-outline"
                    size={20}
                    color={colors.text.muted}
                  />
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Jane Doe"
                    placeholderTextColor={colors.text.muted}
                    style={{
                      flex: 1,
                      marginLeft: 12,
                      color: colors.text.primary,
                      fontSize: 16,
                    }}
                    className="flex-1 ml-3 text-white text-base py-0"
                  />
                </View>
              </View>

              <View>
                <Text
                  style={{
                    color: colors.text.secondary,
                    fontSize: 12,
                    fontWeight: '600',
                    marginBottom: 8,
                  }}
                  className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2"
                >
                  Email Address
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: colors.background,
                    borderColor: colors.surfaceBorder,
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                  }}
                  className="flex-row items-center bg-background border border-surface-border rounded-xl px-4 py-3"
                >
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={colors.text.muted}
                  />
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="name@example.com"
                    placeholderTextColor={colors.text.muted}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={{
                      flex: 1,
                      marginLeft: 12,
                      color: colors.text.primary,
                      fontSize: 16,
                    }}
                    className="flex-1 ml-3 text-white text-base py-0"
                  />
                </View>
              </View>

              <View>
                <Text
                  style={{
                    color: colors.text.secondary,
                    fontSize: 12,
                    fontWeight: '600',
                    marginBottom: 8,
                  }}
                  className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2"
                >
                  Password
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: colors.background,
                    borderColor: colors.surfaceBorder,
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                  }}
                  className="flex-row items-center bg-background border border-surface-border rounded-xl px-4 py-3"
                >
                  <Ionicons
                    name="key-outline"
                    size={20}
                    color={colors.text.muted}
                  />
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••••"
                    placeholderTextColor={colors.text.muted}
                    secureTextEntry={!showPassword}
                    style={{
                      flex: 1,
                      marginLeft: 12,
                      color: colors.text.primary,
                      fontSize: 16,
                    }}
                    className="flex-1 ml-3 text-white text-base py-0"
                  />
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color={colors.text.muted}
                    />
                  </Pressable>
                </View>
              </View>
            </View>

            {/* Sign Up CTA */}
            <Pressable
              onPress={handleSignUp}
              style={{
                backgroundColor: colors.brand.primary,
                paddingVertical: 16,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}
              className="bg-brand active:bg-brand-hover py-4 rounded-xl items-center justify-center shadow-lg shadow-indigo-600/30 mb-6"
            >
              <Text
                style={{
                  color: colors.text.primary,
                  fontWeight: '700',
                  fontSize: 16,
                }}
                className="text-white font-bold text-base"
              >
                Create Account
              </Text>
            </Pressable>

            {/* Bottom Redirect */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="flex-row justify-center items-center"
            >
              <Text
                style={{ color: colors.text.muted, fontSize: 14 }}
                className="text-text-muted text-sm"
              >
                Already have an account?{' '}
              </Text>
              <Link href="/(auth)/sign-in" asChild>
                <Pressable>
                  <Text
                    style={{
                      color: colors.brand.accent,
                      fontWeight: '600',
                      fontSize: 14,
                    }}
                    className="text-brand-accent font-semibold text-sm"
                  >
                    Sign In
                  </Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
