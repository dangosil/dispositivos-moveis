import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

const img1 = require("./assets/image1.png");
const img2 = require("./assets/image2.png");
const img3 = require("./assets/image3.png");
const img4 = require("./assets/image4.png");
const img5 = require("./assets/image5.png");
const img6 = require("./assets/image6.png");

export default function App() {
    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Imagens Exercício 02 </Text>
                    <Image
                        style={styles.img}
                        source={img1}
                        resizeMode="cover"
                    />
                    <Image
                        style={styles.img}
                        source={img2}
                        resizeMode="cover"
                    />
                    <Image
                        style={styles.img}
                        source={img3}
                        resizeMode="cover"
                    />
                    <Image
                        style={styles.img}
                        source={img4}
                        resizeMode="cover"
                    />
                    <Image
                        style={styles.img}
                        source={img5}
                        resizeMode="cover"
                    />
                    <Image
                        style={styles.img}
                        source={img6}
                        resizeMode="cover"
                    />
                </View>

                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#f0f0f0",
    },

    container: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
    },

    img: {
        width: "90%",
        height: 400,
        borderRadius: 12,
        marginVertical: 8,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 20,
    },
});
