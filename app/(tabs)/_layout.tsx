import { Tabs } from "expo-router";
import Icon from "../../assets/icons"; // adjust path if needed

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#22d3ee",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      {/* 🏠 Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="home"
              color={color}
              size={26}
              strokeWidth={focused ? 2.2 : 1.8}
            />
          ),
        }}
      />

      {/* 🚚 Delivery Tab */}
      <Tabs.Screen
        name="delivery"
        options={{
          tabBarLabel: "Delivery",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="location"
              color={color}
              size={25}
              strokeWidth={focused ? 2.2 : 1.8}
            />
          ),
        }}
      />

      {/* 👤 Profile Tab */}
      <Tabs.Screen
        name="profile-screen"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="user"
              color={color}
              size={25}
              strokeWidth={focused ? 2.2 : 1.8}
            />
          ),
        }}
      />
    </Tabs>
  );
}
