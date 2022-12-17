import * as React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

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
                <View style={styles.content}>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Village Screen</Text>
                    </View>
                    <View style={styles.buttonView}>
                        {/* TODO: Change colors of buttonView to make it invisible once true background is setup. */}
                        <Button
                            style={contentStyle.button}
                            children="BlacksmithEn"
                            mode="outlined"
                            width="25%"
                            height="30%"
                            left="-36%"
                            bottom="25%"
                            onPress={() => navigation.navigate("BlacksmithEn")}
                        />
                        <Button
                            style={contentStyle.button}
                            children="FarmEn"
                            mode="outlined"
                            width="13%"
                            height="25%"
                            left="-11%"
                            bottom="28%"
                            onPress={() => navigation.navigate("FarmEn")}
                        />
                        <Button
                            style={contentStyle.button}
                            children="GreatHallEn"
                            mode="outlined"
                            width="25%"
                            height="50%"
                            left="2%"
                            bottom="27%"
                            onPress={() => navigation.navigate("GreatHallEn")}
                        />
                        <Button
                            style={contentStyle.button}
                            children="LonghouseEn"
                            mode="outlined"
                            width="13%"
                            height="33%"
                            left="-50%"
                            bottom="23%"
                            onPress={() => navigation.navigate("LonghouseEn")}
                        />
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
        // flexDirection: "row",
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
        textColor: "white",
        buttonColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
});

const contentStyle = StyleSheet.create({
    button: {
        // zIndex: 999,
        flex: 1,
        textColor: "white",
        buttonColor: "black",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },
});
    
export default VillageEn;