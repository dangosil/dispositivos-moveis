import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigator/types";
import { SafeAreaView } from "react-native-safe-area-context";

export const EditItemView = () => {
    const navigation = useNavigation();

    const route = useRoute<RouteProp<RootStackParams, "EditItem">>();
    const { id, currentName } = route.params;

    const [name, setName] = useState(currentName);

    return (
        <SafeAreaView edges={["bottom"]} style={styles.container}>
            <Text style={styles.title}>Editando Item</Text>
            <Text style={styles.subtitle}>ID: {id}</Text>

            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <Button
                title="Salvar Alterações"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
    subtitle: { fontSize: 12, color: "gray", marginBottom: 20 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
});
