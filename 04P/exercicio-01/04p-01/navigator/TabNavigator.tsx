import React from "react";
import { RootTabParams } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ItemView } from "../view/ItemView";
import { AboutView } from "../view/AboutView";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RootTabParams>();

export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#0331fc",
                tabBarInactiveTintColor: "#a1a1aa",
            }}
        >
            <Tab.Screen
                name="List"
                component={ItemView}
                options={{
                    tabBarLabel: "Lista",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="About"
                component={AboutView}
                options={{
                    tabBarLabel: "Sobre",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="information-circle-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
