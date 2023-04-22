import * as React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
} from "react-native";
import { Button } from "react-native-paper";

import ItemsMenuFAB from "./items_menu_en_fab.js";
import ExitButtonEn from "./exit_button_en.js";

const backgroundImage = require("../../images/background/longhouse_inside_background.jpg");

function LonghouseEnScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <Text style={styles.text}>LonghouseEn Screen</Text>
                <Pressable
                    style={styles.pressable}
                    // mode="contained"
                    // mode="outlined"
                    onPress={() => navigation.navigate("BedroomEnScreen")}>
                    {/* <Text> "BedroomEn" </Text> */}
                </Pressable>
                <Button
                    title="Exit"
                    // onPress={() => navigation.navigate("VillageEnScreen")}
                    // onPress={() => navigation.navigate("BedroomEnScreen")}
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
    pressable: {
        width: "33%",
        height: "45%",
        left: "1%",
        bottom: "-15%",
        // backgroundColor: "pink",
    },
});

export default LonghouseEnScreen;
