import React from "react";
import { RootTabParams } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ItemView } from "../view/ItemView";
import { View, Text } from "react-native";
import { AboutView } from "../view/AboutView";

const Tab = createBottomTabNavigator<RootTabParams>();

export function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={ItemView}
                options={{ tabBarLabel: "Home" }}
            />

            <Tab.Screen
                name="About"
                component={AboutView}
                options={{ tabBarLabel: "About" }}
            />
        </Tab.Navigator>
    );
}
