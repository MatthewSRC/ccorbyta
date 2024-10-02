import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

import useAppTheme from '~/hooks/useAppTheme';

export default function TabNavigation() {
  const theme = useAppTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="hourglass"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="hourglass-o"
              size={24}
              color={focused ? theme.colors.black : theme.colors.lightGray}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="beers"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="beer"
              size={24}
              color={focused ? theme.colors.black : theme.colors.lightGray}
            />
          ),
        }}
      />
    </Tabs>
  );
}
