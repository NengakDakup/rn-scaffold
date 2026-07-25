import { useState } from 'react';
import { SafeAreaView, ScrollView, Switch, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/theme';

export default function SettingsScreen() {
  const { colors } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerClassName="p-5 gap-4">
        <View className="bg-surface border border-surface-border rounded-2xl p-4 gap-4">
          <Text className="text-white font-bold text-base mb-1">
            Preferences
          </Text>

          <View className="flex-row items-center justify-between py-2 border-b border-surface-border">
            <View className="flex-row items-center">
              <Ionicons
                name="notifications-outline"
                size={20}
                color={colors.brand.accent}
              />
              <Text className="text-slate-200 font-medium text-sm ml-3">
                Push Notifications
              </Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{
                false: colors.surfaceBorder,
                true: colors.brand.primary,
              }}
              thumbColor={colors.text.primary}
            />
          </View>

          <View className="flex-row items-center justify-between py-2">
            <View className="flex-row items-center">
              <Ionicons
                name="moon-outline"
                size={20}
                color={colors.brand.accent}
              />
              <Text className="text-slate-200 font-medium text-sm ml-3">
                Dark Mode
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{
                false: colors.surfaceBorder,
                true: colors.brand.primary,
              }}
              thumbColor={colors.text.primary}
            />
          </View>
        </View>

        <View className="bg-surface border border-surface-border rounded-2xl p-4 gap-2">
          <Text className="text-white font-bold text-base mb-1">
            System Info
          </Text>
          <Text className="text-text-muted text-xs">
            Framework: Expo SDK 54
          </Text>
          <Text className="text-text-muted text-xs">
            Styling: NativeWind v4 (Tailwind CSS)
          </Text>
          <Text className="text-text-muted text-xs">
            State: Redux Toolkit + RTK Query
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
