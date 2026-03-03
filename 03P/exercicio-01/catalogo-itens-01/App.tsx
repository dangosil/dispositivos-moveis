import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, FlatList } from "react-native";

const DATA = [
    { id: "1", nome: "Caderno", description: "Caderno do Vasco", imageUrl: "" },
    { id: "2", nome: "Lápis", description: "Lápis do Vasco" },
    { id: "3", nome: "Notebook", description: "Notebook Lenovo" },
];

interface Item {
    id: string;
    nome: string;
    description: string;
    imageUrl?: string;
}

export default function App() {
const renderCard = ({ item }: { item: Item }) => (
    <View style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.description}</Text>
    </View>
);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Catálogo de Produtos</Text>
                </View>

                <FlatList
                    data={DATA}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        alignItems: "center",
    },

    item: {
        backgroundColor: "gray",
        padding: 20,
        marginVertical: 5,
        // marginHorizontal: ,
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
    },

    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
