import { Link } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function IndexScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#020617' }}
      className="flex-1 bg-slate-950"
    >
      <ScrollView
        contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
        contentContainerClassName="p-6 pb-12"
      >
        {/* Header Badge */}
        <View
          style={{ alignItems: 'center', marginTop: 16, marginBottom: 24 }}
          className="items-center mt-4 mb-6"
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(30, 27, 75, 0.8)',
              borderColor: 'rgba(99, 102, 241, 0.3)',
              borderWidth: 1,
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 9999,
            }}
            className="flex-row items-center bg-indigo-950/80 border border-indigo-500/30 px-3.5 py-1.5 rounded-full"
          >
            <Ionicons name="sparkles" size={14} color="#818cf8" />
            <Text
              style={{
                color: '#a5b4fc',
                fontSize: 12,
                fontWeight: '600',
                marginLeft: 8,
              }}
              className="text-indigo-300 text-xs font-semibold ml-2"
            >
              RN Scaffold • Production Ready
            </Text>
          </View>
        </View>

        {/* Hero Section */}
        <View
          style={{ alignItems: 'center', marginBottom: 32 }}
          className="items-center mb-8"
        >
          <Text
            style={{
              color: '#ffffff',
              fontSize: 36,
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: 12,
            }}
            className="text-4xl font-extrabold text-white text-center tracking-tight mb-3"
          >
            Build Mobile Apps{' '}
            <Text style={{ color: '#818cf8' }} className="text-indigo-400">
              Faster
            </Text>
          </Text>
          <Text
            style={{
              color: '#94a3b8',
              textAlign: 'center',
              fontSize: 16,
              lineHeight: 24,
            }}
            className="text-slate-400 text-center text-base leading-6 px-2"
          >
            Pre-configured with Expo SDK 54, Redux Toolkit, NativeWind v4, RTK
            Query, and Zod validation.
          </Text>
        </View>

        {/* Feature Cards Grid */}
        <View style={{ gap: 16, marginBottom: 32 }} className="gap-4 mb-8">
          <View
            style={{
              backgroundColor: '#0f172a',
              borderColor: '#1e293b',
              borderWidth: 1,
              padding: 20,
              borderRadius: 16,
            }}
            className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl"
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12,
              }}
              className="w-10 h-10 bg-indigo-500/10 rounded-xl items-center justify-center mb-3"
            >
              <Ionicons name="flash-outline" size={22} color="#818cf8" />
            </View>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 18,
                fontWeight: '700',
                marginBottom: 4,
              }}
              className="text-lg font-bold text-white mb-1"
            >
              State & Data Architecture
            </Text>
            <Text
              style={{ color: '#94a3b8', fontSize: 14, lineHeight: 20 }}
              className="text-slate-400 text-sm leading-5"
            >
              Redux Toolkit + RTK Query for normalized caching and instant
              optimistic updates.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#0f172a',
              borderColor: '#1e293b',
              borderWidth: 1,
              padding: 20,
              borderRadius: 16,
            }}
            className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl"
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12,
              }}
              className="w-10 h-10 bg-cyan-500/10 rounded-xl items-center justify-center mb-3"
            >
              <Ionicons
                name="color-palette-outline"
                size={22}
                color="#22d3ee"
              />
            </View>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 18,
                fontWeight: '700',
                marginBottom: 4,
              }}
              className="text-lg font-bold text-white mb-1"
            >
              NativeWind Styling
            </Text>
            <Text
              style={{ color: '#94a3b8', fontSize: 14, lineHeight: 20 }}
              className="text-slate-400 text-sm leading-5"
            >
              Tailwind CSS utility classes running natively with smooth
              responsive layouts.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#0f172a',
              borderColor: '#1e293b',
              borderWidth: 1,
              padding: 20,
              borderRadius: 16,
            }}
            className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl"
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12,
              }}
              className="w-10 h-10 bg-emerald-500/10 rounded-xl items-center justify-center mb-3"
            >
              <Ionicons
                name="shield-checkmark-outline"
                size={22}
                color="#34d399"
              />
            </View>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 18,
                fontWeight: '700',
                marginBottom: 4,
              }}
              className="text-lg font-bold text-white mb-1"
            >
              Validation & Monitoring
            </Text>
            <Text
              style={{ color: '#94a3b8', fontSize: 14, lineHeight: 20 }}
              className="text-slate-400 text-sm leading-5"
            >
              Type-safe environment variables with Zod + Sentry error tracking
              configured out of the box.
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={{ gap: 12 }} className="gap-3">
          <Link href="/(auth)/sign-in" asChild>
            <Pressable
              style={{
                backgroundColor: '#4f46e5',
                paddingVertical: 16,
                paddingHorizontal: 24,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="bg-indigo-600 active:bg-indigo-700 py-4 px-6 rounded-xl flex-row items-center justify-center shadow-lg shadow-indigo-600/30"
            >
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: 16,
                  marginRight: 8,
                }}
                className="text-white font-bold text-base mr-2"
              >
                Sign In Demo
              </Text>
              <Ionicons name="arrow-forward" size={18} color="#ffffff" />
            </Pressable>
          </Link>

          <Link href={'/(tabs)/' as any} asChild>
            <Pressable
              style={{
                backgroundColor: '#0f172a',
                borderColor: '#1e293b',
                borderWidth: 1,
                paddingVertical: 16,
                paddingHorizontal: 24,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="bg-slate-900 active:bg-slate-800 border border-slate-800 py-4 px-6 rounded-xl flex-row items-center justify-center"
            >
              <Ionicons name="grid-outline" size={18} color="#94a3b8" />
              <Text
                style={{
                  color: '#cbd5e1',
                  fontWeight: '600',
                  fontSize: 16,
                  marginLeft: 8,
                }}
                className="text-slate-300 font-semibold text-base ml-2"
              >
                Explore Dashboard
              </Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
