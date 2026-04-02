import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigator/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { useItemViewModel } from "../viewmodels/ItemViewModel";

export const EditItemView = () => {
    const navigation = useNavigation();

    const { viewModel } = useItemViewModel();

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

            <View style={styles.buttonRow}>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="Cancelar"
                        color="#ef4444"
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button
                        title="Salvar"
                        onPress={() => {
                            const saved = viewModel.updateItem(id, name);
                            if (saved) {
                                navigation.goBack();
                            }
                        }}
                    />
                </View>
            </View>
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
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    buttonWrapper: {
        flex: 1,
        marginHorizontal: 5,
    },
});
