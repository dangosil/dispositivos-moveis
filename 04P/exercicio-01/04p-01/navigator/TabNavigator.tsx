import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ItemView } from "../view/ItemView";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeTab"
                component={ItemView}
                options={{ tabBarLabel: "Lista" }} // Aqui depois você pode colocar ícones!
            />

        </Tab.Navigator>
    );
}
