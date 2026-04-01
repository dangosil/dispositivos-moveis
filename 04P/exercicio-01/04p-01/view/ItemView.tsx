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
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useItemViewModel } from "../viewmodels/ItemViewModel";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Item } from "../models/Item";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParams } from "../navigator/types";

export const ItemView: React.FC = () => {
    const { viewModel, items, dialogVisible, inputText } = useItemViewModel();

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const deleteConfirmed = (id: string, nome: string) => {
        Alert.alert("Atenção", `Tem certeza que deseja excluir "${nome}"?`, [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Excluir",
                style: "destructive",
                onPress: () => viewModel.deleteitem(id),
            },
        ]);
    };

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
                        <TouchableOpacity
                            style={styles.textCard}
                            onPress={() =>
                                navigation.navigate("EditItem", {
                                    id: item.id,
                                    currentName: item.name,
                                })
                            }
                        >
                            <Text style={styles.textCard}>{item.name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => deleteConfirmed(item.id, item.name)}
                        >
                            <Text style={styles.deleteButtonText}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Modal
                visible={dialogVisible}
                animationType="slide"
                transparent={true}
            >
                <KeyboardAvoidingView
                    style={styles.modal}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>Novo Item</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Nome do item"
                            value={inputText}
                            onChangeText={(text) =>
                                viewModel.setInputText(text)
                            }
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
                </KeyboardAvoidingView>
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
        flexDirection: "row",
    },

    textCard: {
        flex: 1,
    },

    deleteButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#f87171",
    },
    deleteButtonText: {
        color: "#dc2626",
        fontSize: 12,
        fontWeight: "bold",
    },

    modalContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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

    modal: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});
