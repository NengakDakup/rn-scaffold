import { SafeAreaView, ScrollView, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useTheme } from '@/theme';

export default function TabHomeScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerClassName="p-5 pb-12 gap-5">
        {/* Welcome Card */}
        <View className="bg-brand p-6 rounded-3xl shadow-xl shadow-indigo-600/20">
          <View className="flex-row items-center justify-between mb-3">
            <View>
              <Text className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">
                System Status
              </Text>
              <Text className="text-white text-2xl font-bold mt-1">
                All Systems Operational
              </Text>
            </View>
            <View className="w-10 h-10 bg-indigo-500/30 rounded-full items-center justify-center">
              <Ionicons
                name="checkmark-circle"
                size={24}
                color={colors.text.primary}
              />
            </View>
          </View>
          <Text className="text-indigo-100/90 text-sm leading-5">
            Scaffold services, Redux store, and API gateways are fully
            connected.
          </Text>
        </View>

        {/* Metrics Grid */}
        <View className="flex-row gap-3">
          <View className="flex-1 bg-surface border border-surface-border p-4 rounded-2xl">
            <Ionicons
              name="people-outline"
              size={20}
              color={colors.brand.accent}
            />
            <Text className="text-2xl font-bold text-white mt-2 mb-0.5">
              1,248
            </Text>
            <Text className="text-text-muted text-xs font-medium">
              Active Users
            </Text>
          </View>

          <View className="flex-1 bg-surface border border-surface-border p-4 rounded-2xl">
            <Ionicons
              name="swap-horizontal-outline"
              size={20}
              color={colors.status.info}
            />
            <Text className="text-2xl font-bold text-white mt-2 mb-0.5">
              99.9%
            </Text>
            <Text className="text-text-muted text-xs font-medium">
              API Uptime
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="bg-surface border border-surface-border p-5 rounded-2xl gap-4">
          <Text className="text-white font-bold text-base">Quick Actions</Text>

          <View className="gap-3">
            <Link href="/" asChild>
              <Pressable className="flex-row items-center justify-between bg-background p-4 rounded-xl border border-surface-border">
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-indigo-500/10 rounded-lg items-center justify-center mr-3">
                    <Ionicons
                      name="home-outline"
                      size={18}
                      color={colors.brand.accent}
                    />
                  </View>
                  <Text className="text-slate-200 font-medium text-sm">
                    Return to Hero Landing
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={colors.text.muted}
                />
              </Pressable>
            </Link>

            <Link href="/(auth)/sign-in" asChild>
              <Pressable className="flex-row items-center justify-between bg-background p-4 rounded-xl border border-surface-border">
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-rose-500/10 rounded-lg items-center justify-center mr-3">
                    <Ionicons
                      name="log-out-outline"
                      size={18}
                      color={colors.status.error}
                    />
                  </View>
                  <Text className="text-slate-200 font-medium text-sm">
                    Sign Out Demo
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={colors.text.muted}
                />
              </Pressable>
            </Link>
          </View>
        </View>

        {/* Recent Activity List */}
        <View className="bg-surface border border-surface-border p-5 rounded-2xl gap-3">
          <Text className="text-white font-bold text-base mb-1">
            Recent Activity
          </Text>

          <View className="flex-row items-center justify-between py-2 border-b border-surface-border/80">
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-emerald-400 mr-3" />
              <Text className="text-slate-300 text-sm font-medium">
                RTK Query Mutation /auth/login
              </Text>
            </View>
            <Text className="text-slate-500 text-xs">2m ago</Text>
          </View>

          <View className="flex-row items-center justify-between py-2 border-b border-surface-border/80">
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-indigo-400 mr-3" />
              <Text className="text-slate-300 text-sm font-medium">
                Zod Schema Validated ENV
              </Text>
            </View>
            <Text className="text-slate-500 text-xs">5m ago</Text>
          </View>

          <View className="flex-row items-center justify-between py-2">
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-cyan-400 mr-3" />
              <Text className="text-slate-300 text-sm font-medium">
                Expo Router Stack Loaded
              </Text>
            </View>
            <Text className="text-slate-500 text-xs">Just now</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
