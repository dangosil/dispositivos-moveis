import { useState } from "react";
// import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    Button,
    ScrollView,
} from "react-native";

export default function App() {
    const handlePress = () => {
        alert("Botão de salvar texto clicado!");
    };

    const [nome, setNome] = useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text>Exercício 01</Text>
                <StatusBar style="auto" />
            </View>
            <TextInput
                value={nome}
                onChangeText={setNome}
                style={{
                    padding: 2,
                    height: 30,
                    borderColor: "gray",
                    borderRadius: 10,
                    borderWidth: 1,
                }}
                placeholder="Digite o seu nome"
            />
            <Button title="Salvar Texto" onPress={handlePress} />
            <View>
                <Text>O que você digitou: {nome}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    button: {
        borderRadius: 10,
    }
});
