import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function AppDrawer() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Accueil" }} />
      <Tab.Screen name="Details" component={DetailsScreen} options={{ title: "Détails" }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: "Paramètres" }} />
    </Tab.Navigator>
  );
}
