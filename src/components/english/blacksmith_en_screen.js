import * as React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import ItemsMenuFAB from "./items_menu_en_fab.js";
import ExitButtonEn from "./exit_button_en";

const backgroundImage = require("../../images/background/blacksmith_background.jpg");

function BlacksmithEnScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <Text style={styles.text}>Blacksmith Screen</Text>
                <Button
                    title="Exit"
                    onPress={() => navigation.navigate("VillageEnScreen")}
                />
                <ItemsMenuFAB />
                <ExitButtonEn />
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
});

export default BlacksmithEnScreen;
