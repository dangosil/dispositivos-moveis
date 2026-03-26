import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const AboutView = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
            <Text style={styles.title}>Sobre</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Sobre a Aplicação</Text>
                <Text style={styles.text}>Versão: 1.0.0</Text>
                <Text style={styles.text}>Arquitetura: Padrão MVVM</Text>
                <Text style={styles.text}>Desenvolvido com React Native</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 8,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#18181b",
    },
    text: {
        fontSize: 16,
        color: "#52525b",
        marginBottom: 5,
    },
});
