import * as React from "react";
import { Button, View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import ItemsMenu from "../items_menu_en";
import ExitButton from "../exit_button";

const backgroundImage = require("../../images/background/great_hall_background.jpg");

function GreatHallEn({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <Text style={styles.text}>Great Hall Screen</Text>
                <Button
                    title="Exit"
                    onPress={() => navigation.navigate("VillageEn")}
                />
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
});

export default GreatHallEn;
