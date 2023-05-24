import * as React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
} from "react-native";

import ItemsMenuFAB from "./items_menu_en_fab.js";
import ExitButtonEn from "./exit_button_en.js";

const backgroundImage = require("../../images/background/longhouse_inside_background.jpg");

function LonghouseEnScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <Text style={styles.text}>LonghouseEn Screen</Text>
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigation.navigate("BedroomEnScreen")}
                >
                </Pressable>
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
        height: "50%",
        left: "1%",
        bottom: "-15%",
        backgroundColor: "pink",
        opacity: 0.5,
    },
});

export default LonghouseEnScreen;