import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
    ActivityIndicator,
} from "react-native";

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const [item, setItens] = useState<String[]>([]);

    const [text, setText] = useState("");

    const addItem = () => {
        if (text.trim() === "") return;

        setItens([...item, text]);
        setText("");
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                
                {loading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator
                            size={"large"}
                            color={"rgb(23, 23, 146)"}
                        />

                        <Text>Carregando...</Text>
                    </View>
                ) : (
                    <>
                        <View style={styles.header}>
                            <Text style={styles.title}>
                                Adicione um item na lista
                            </Text>

                            <TextInput
                                style={styles.input}
                                placeholder="Digite aqui para adicionar"
                                value={text}
                                onChangeText={setText}
                            />
                            <Button title="Adicionar" onPress={addItem} />
                        </View>

                        <ScrollView
                            style={styles.scroll}
                            contentContainerStyle={styles.scrollContent}
                            keyboardDismissMode="on-drag"
                        >
                            {item.map((item, i) => (
                                <Text style={styles.item} key={i}>
                                    {item}
                                </Text>
                            ))}
                        </ScrollView>
                    </>
                )}
                <StatusBar style="auto" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },

    header: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },

    input: {
        padding: 5,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
    },

    item: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },

    scroll: {
        flex: 1,
    },

    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
});
