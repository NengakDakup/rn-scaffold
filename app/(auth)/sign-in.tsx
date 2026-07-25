import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
  ActivityIndicator,
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
import { useLoginMutation } from '@/features/auth/api';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();

  const handleSignIn = async () => {
    try {
      await login({ email, password }).unwrap();
      router.replace('/(tabs)/' as any);
    } catch {
      // Demo fallback to navigate on error for demo purposes
      router.replace('/(tabs)/' as any);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#020617' }}
      className="flex-1 bg-slate-950"
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
          <View className="mb-6" style={{ marginBottom: 24 }}>
            <Link href="/" asChild>
              <Pressable
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#0f172a',
                  borderColor: '#1e293b',
                  borderWidth: 1,
                  borderRadius: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl items-center justify-center"
              >
                <Ionicons name="chevron-back" size={20} color="#94a3b8" />
              </Pressable>
            </Link>
          </View>

          {/* Main Auth Card */}
          <View
            style={{
              backgroundColor: '#0f172a',
              borderColor: '#1e293b',
              borderWidth: 1,
              padding: 24,
              borderRadius: 24,
            }}
            className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl"
          >
            {/* Brand Logo & Header */}
            <View
              className="items-center mb-6"
              style={{ alignItems: 'center', marginBottom: 24 }}
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
                <Ionicons name="lock-closed" size={26} color="#818cf8" />
              </View>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 24,
                  fontWeight: '700',
                  marginBottom: 4,
                }}
                className="text-2xl font-bold text-white mb-1"
              >
                Welcome Back
              </Text>
              <Text
                style={{ color: '#94a3b8', fontSize: 14, textAlign: 'center' }}
                className="text-slate-400 text-sm text-center"
              >
                Enter your credentials to access your account
              </Text>
            </View>

            {/* Inputs */}
            <View style={{ gap: 16, marginBottom: 24 }} className="gap-4 mb-6">
              <View>
                <Text
                  style={{
                    color: '#cbd5e1',
                    fontSize: 12,
                    fontWeight: '600',
                    marginBottom: 8,
                  }}
                  className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2"
                >
                  Email
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#020617',
                    borderColor: '#1e293b',
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                  }}
                  className="flex-row items-center bg-slate-950 border border-slate-800 rounded-xl px-4 py-3"
                >
                  <Ionicons name="mail-outline" size={20} color="#64748b" />
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="name@example.com"
                    placeholderTextColor="#64748b"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={{
                      flex: 1,
                      marginLeft: 12,
                      color: '#ffffff',
                      fontSize: 16,
                    }}
                    className="flex-1 ml-3 text-white text-base py-0"
                  />
                </View>
              </View>

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 8,
                  }}
                  className="flex-row justify-between items-center mb-2"
                >
                  <Text
                    style={{
                      color: '#cbd5e1',
                      fontSize: 12,
                      fontWeight: '600',
                    }}
                    className="text-slate-300 text-xs font-semibold uppercase tracking-wider"
                  >
                    Password
                  </Text>
                  <Pressable>
                    <Text
                      style={{
                        color: '#818cf8',
                        fontSize: 12,
                        fontWeight: '500',
                      }}
                      className="text-indigo-400 text-xs font-medium"
                    >
                      Forgot?
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#020617',
                    borderColor: '#1e293b',
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                  }}
                  className="flex-row items-center bg-slate-950 border border-slate-800 rounded-xl px-4 py-3"
                >
                  <Ionicons name="key-outline" size={20} color="#64748b" />
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••••"
                    placeholderTextColor="#64748b"
                    secureTextEntry={!showPassword}
                    style={{
                      flex: 1,
                      marginLeft: 12,
                      color: '#ffffff',
                      fontSize: 16,
                    }}
                    className="flex-1 ml-3 text-white text-base py-0"
                  />
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color="#64748b"
                    />
                  </Pressable>
                </View>
              </View>
            </View>

            {/* Sign In CTA */}
            <Pressable
              onPress={handleSignIn}
              disabled={isLoading}
              style={{
                backgroundColor: '#4f46e5',
                paddingVertical: 16,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}
              className="bg-indigo-600 active:bg-indigo-700 py-4 rounded-xl items-center justify-center shadow-lg shadow-indigo-600/30 mb-6"
            >
              {isLoading ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text
                  style={{ color: '#ffffff', fontWeight: '700', fontSize: 16 }}
                  className="text-white font-bold text-base"
                >
                  Sign In
                </Text>
              )}
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
                style={{ color: '#94a3b8', fontSize: 14 }}
                className="text-slate-400 text-sm"
              >
                Don't have an account?{' '}
              </Text>
              <Link href="/(auth)/sign-up" asChild>
                <Pressable>
                  <Text
                    style={{
                      color: '#818cf8',
                      fontWeight: '600',
                      fontSize: 14,
                    }}
                    className="text-indigo-400 font-semibold text-sm"
                  >
                    Sign Up
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
