import * as React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import ItemsMenu from "../items_menu_en";

const backgroundImage = require("../../images/background/village_background.jpg");

function VillageEn({ navigation }) {
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
                            children="BlacksmithEn"
                            width="25%"
                            height="30%"
                            left="-36%"
                            bottom="25%"
                            onPress={() => navigation.navigate("BlacksmithEn")}
                        />
                        <Button
                            style={styles.button}
                            contentStyle={styles.contentStyle}
                            labelStyle={styles.labelStyle}
                            children="FarmEn"
                            width="13%"
                            height="25%"
                            left="-11%"
                            bottom="28%"
                            onPress={() => navigation.navigate("FarmEn")}
                        />
                        <Button
                            style={styles.button}
                            contentStyle={styles.contentStyle}
                            labelStyle={styles.labelStyle}
                            children="GreatHallEn"
                            width="25%"
                            height="50%"
                            left="2%"
                            bottom="27%"
                            onPress={() => navigation.navigate("GreatHallEn")}
                        />
                        <Button
                            style={styles.button}
                            contentStyle={styles.contentStyle}
                            labelStyle={styles.labelStyle}
                            children="LonghouseEn"
                            width="13%"
                            height="33%"
                            left="-50%"
                            bottom="25%"
                            onPress={() => navigation.navigate("LonghouseEn")}
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Village Screen</Text>
                    </View>
                </View>
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
    
export default VillageEn;