import { useState } from 'react';
import { SafeAreaView, ScrollView, Switch, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <ScrollView contentContainerClassName="p-5 gap-4">
        <View className="bg-slate-900 border border-slate-800 rounded-2xl p-4 gap-4">
          <Text className="text-white font-bold text-base mb-1">
            Preferences
          </Text>

          <View className="flex-row items-center justify-between py-2 border-b border-slate-800">
            <View className="flex-row items-center">
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#818cf8"
              />
              <Text className="text-slate-200 font-medium text-sm ml-3">
                Push Notifications
              </Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#334155', true: '#6366f1' }}
              thumbColor="#ffffff"
            />
          </View>

          <View className="flex-row items-center justify-between py-2">
            <View className="flex-row items-center">
              <Ionicons name="moon-outline" size={20} color="#818cf8" />
              <Text className="text-slate-200 font-medium text-sm ml-3">
                Dark Mode
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#334155', true: '#6366f1' }}
              thumbColor="#ffffff"
            />
          </View>
        </View>

        <View className="bg-slate-900 border border-slate-800 rounded-2xl p-4 gap-2">
          <Text className="text-white font-bold text-base mb-1">
            System Info
          </Text>
          <Text className="text-slate-400 text-xs">Framework: Expo SDK 54</Text>
          <Text className="text-slate-400 text-xs">
            Styling: NativeWind v4 (Tailwind CSS)
          </Text>
          <Text className="text-slate-400 text-xs">
            State: Redux Toolkit + RTK Query
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
