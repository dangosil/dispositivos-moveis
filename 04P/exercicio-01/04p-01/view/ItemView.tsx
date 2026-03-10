import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    Alert,
    Modal,
    Button,
    StyleSheet,
} from "react-native";
import { useItemViewModel } from "../viewmodels/ItemViewModel";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Item } from "../models/Item";

export const ItemView: React.FC = () => {
    const { viewModel, items, dialogVisible, inputText } = useItemViewModel();

    

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Lista de Produtos</Text>

            <Button
                title="Adicionar Novo Item"
                onPress={() => viewModel.openDialog()}
            />

            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />

            <Modal
                visible={dialogVisible}
                animationType="slide"
                transparent={false}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Novo Item</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome do item"
                        value={inputText}
                        onChangeText={(text) => viewModel.setInputText(text)}
                    />

                    <View style={styles.buttonRow}>
                        <Button
                            title="Cancelar"
                            color="red"
                            onPress={() => viewModel.closeDialog()}
                        />
                        <Button
                            title="Salvar"
                            onPress={() => viewModel.addItem()}
                        />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 2,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonRow: { flexDirection: "row", justifyContent: "space-around" },
});