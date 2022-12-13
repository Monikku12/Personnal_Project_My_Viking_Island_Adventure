import * as React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import ItemsMenu from "../items_menu_en";
import ExitButton from "../exit_button";

const backgroundImage = require("../../images/background/bedroom_background.jpg");

function BedroomEn({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <Text style={styles.text}>This is the Bedroom</Text>
                <ItemsMenu />
                <ExitButton />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    text: {
        color: "black",
        fontSize: 12,
        lineHeight: 15,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "white",
    },
    buttonView: {
        textColor: "white",
        buttonColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default BedroomEn;
