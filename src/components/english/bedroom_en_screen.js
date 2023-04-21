import * as React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import ItemsMenuFAB from "./items_menu_en_fab.js";
import ExitButtonEnBedroom from "./exit_button_en_bedroom.js";

const backgroundImage = require("../../images/background/bedroom_background.jpg");

function BedroomEnScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <Text style={styles.text}>This is the Bedroom</Text>
                <ItemsMenuFAB />
                <ExitButtonEnBedroom />
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

export default BedroomEnScreen;
