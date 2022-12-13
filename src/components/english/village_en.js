import * as React from "react";
import { Button, View, Text, ImageBackground, StyleSheet } from "react-native";

import ItemsMenu from "../items_menu_en";

const backgroundImage = require("../../images/background/village_background.jpg");

function VillageEn({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <Text style={styles.text}>Village Screen</Text>
                <Button
                    title="BlacksmithEn"
                    onPress={() => navigation.navigate("BlacksmithEn")}
                />
                <Button
                    title="FarmEn"
                    onPress={() => navigation.navigate("FarmEn")}
                />
                <Button
                    title="GreatHallEn"
                    onPress={() => navigation.navigate("GreatHallEn")}
                />
                <Button
                    title="LonghouseEn"
                    onPress={() => navigation.navigate("LonghouseEn")}
                />
                <Button
                    title="BedroomEn"
                    onPress={() => navigation.navigate("BedroomEn")}
                />
                <ItemsMenu />
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

export default VillageEn;