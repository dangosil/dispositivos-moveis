import React from "react";
import { RootStackParams } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import { EditItemView } from "../view/EditItemView";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={TabNavigator} />

            <Stack.Screen
                name="EditItem"
                component={EditItemView}
                options={{ title: "Editar Produto" }}
            />
        </Stack.Navigator>
    );
}