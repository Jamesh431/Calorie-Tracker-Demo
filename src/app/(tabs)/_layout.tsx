import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name={"home"}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name={"logger"}
        options={{
          title: "Log Calories",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-circle-outline" size={20} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />

      <Tabs.Screen
        name={"statistics"}
        options={{
          title: "My Stats",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="bar-chart" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name={"account"}
        options={{
          title: "My Account",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={20} color={"black"} />
          ),
        }}
      />
    </Tabs>
  );
}
