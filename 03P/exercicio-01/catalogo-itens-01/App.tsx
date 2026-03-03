import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
interface Item {
    id: string;
    nome: string;
    description: string;
    imageUrl?: string;
}

const DATA: Item[] = [
    {
        id: "1",
        nome: "Caderno",
        description: "Caderno do Vasco",
        imageUrl:
            "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mh1xhw0b87pg9a",
    },
    {
        id: "2",
        nome: "Lápis",
        description: "Lápis do Vasco",
        imageUrl:
            "https://cdn1.toplojas.com.br/loja/WAssets/677/Produtos/1295641/Fotos/G_2883465890ebc3b4282e6425cc88de.jpg",
    },
    {
        id: "3",
        nome: "Notebook",
        description: "Notebook Lenovo",
        imageUrl:
            "https://p1-ofp.static.pub//medias/24157957128_CG_202112301038011695752214193.png",
    },
];

export default function App() {
    const renderCard = ({ item }: { item: Item }) => (
        <View style={styles.card}>
            {item.imageUrl ? (
                <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.cardImage}
                />
            ) : (
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.placeholderText}>Sem foto</Text>
                </View>
            )}
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.nome}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
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
                    style={styles.listContainer}
                />
            </SafeAreaView>
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#e4e4e7",
    },

    item: {
        backgroundColor: "gray",
        padding: 20,
        marginVertical: 5,
        // marginHorizontal: ,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
    },

    container: {
        flex: 1,
        backgroundColor: "#f4f4f5",
        // alignItems: "center",
        // justifyContent: "center",
    },

    listContainer: {
        padding: 10,
    },

    card: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        marginBottom: 15,
        flexDirection: "row",
        overflow: "hidden",
    },

    cardImage: {
        width: 100,
        height: 100,
        backgroundColor: "#e4e4e7",
    },

    imagePlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: "#e4e4e7",
        alignItems: "center",
        justifyContent: "center",
    },

    placeholderText: {
        color: "#a1a1aa",
        fontSize: 12,
    },

    cardContent: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
    },

    cardDescription: {
        fontSize: 14,
        color: "#52525b",
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#27272a",
        marginBottom: 4,
    },
});