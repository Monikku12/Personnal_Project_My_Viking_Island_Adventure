import * as React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import ItemsMenuFAB from "./items_menu_en_fab.js";

const backgroundImage = require("../../images/background/village_background.jpg");

function VillageEnScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <View style={styles.content}>
                    <View style={styles.buttonView}>
                        <Button
                            style={styles.button}
                            contentStyle={styles.contentStyle}
                            labelStyle={styles.labelStyle}
                            children="BlacksmithEnScreen"
                            width="25%"
                            height="30%"
                            left="-36%"
                            bottom="15%"
                            onPress={() =>
                                navigation.navigate("BlacksmithEnScreen")
                            }
                        />
                        <Button
                            style={styles.button}
                            contentStyle={styles.contentStyle}
                            labelStyle={styles.labelStyle}
                            children="FarmEnScreen"
                            width="13%"
                            height="25%"
                            left="-11%"
                            bottom="18%"
                            onPress={() => navigation.navigate("FarmEnScreen")}
                        />
                        <Button
                            style={styles.button}
                            contentStyle={styles.contentStyle}
                            labelStyle={styles.labelStyle}
                            children="GreatHallEnScreen"
                            width="25%"
                            height="50%"
                            left="2%"
                            bottom="17%"
                            onPress={() =>
                                navigation.navigate("GreatHallEnScreen")
                            }
                        />
                        <Button
                            style={styles.button}
                            contentStyle={styles.contentStyle}
                            labelStyle={styles.labelStyle}
                            children="LonghouseEnScreen"
                            width="13%"
                            height="33%"
                            left="-50%"
                            bottom="15%"
                            onPress={() =>
                                navigation.navigate("LonghouseEnScreen")
                            }
                        />
                        <Button
                            style={styles.button}
                            contentStyle={styles.contentStyle}
                            labelStyle={styles.labelStyle}
                            children="Gohdi"
                            width="25%"
                            height="63%"
                            left="25%"
                            bottom="15%"
                            // TODO: Make Gohdi appears when his house is clicked.
                            onPress={() => console.log("Gohdi Appears!!")}
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Village Screen</Text>
                    </View>
                </View>
                <ItemsMenuFAB />
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
    content: {
        flex: 1,
        JustifyContent: "center",
        alignItems: "center",
    },
    textView: {
        flex: 0,
        padding: 15,
        justifyContent: "center",
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        flex: 1,
        position: "absolute",
        mode: "contained",
        justifyContent: "center",
    },
    contentStyle: {
        // TODO: Change color of buttonView to make it visible/invisible (color=transparent) to set true background.
        buttonColor: "transparent",
        height: "100%",
    },
    labelStyle: {
        color: "red",
        fontSize: 12,
        opacity: 0,
    },
});

export default VillageEnScreen;
