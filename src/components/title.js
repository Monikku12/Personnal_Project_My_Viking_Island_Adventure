import * as React from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";

const logo = require("../images/logo/title_logo.png");
const backgroundImage = require("../images/background/title_background.png");

function Title({ navigation }) {
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
                            children="English"
                            mode="contained"
                            onPress={() => navigation.navigate("BedroomEn")}
                        />
                    </View>
                    <Image style={styles.logo} source={logo} />
                    <View style={styles.buttonView}>
                        <Button
                            style={styles.button}
                            children="Français"
                            mode="contained"
                            onPress={() => navigation.navigate("BedroomFr")}
                        />
                    </View>
                </View>
                {/* TODO: Remove This view with its content once the logo with the game title will be implemented. */}
                <View style={styles.textView}>
                    <Text style={styles.text}> My Dragons Island Adventure </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: "space-around",
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    content: {
        flex: 10,
        flexDirection: "row",
        JustifyContent: "space-around",
    },
    logo: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: "100%",
        resizeMode: "center",
        justifyContent: "space-between",
    },
    buttonView: {
        flex: 1,
        textColor: "white",
        buttonColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    textView: {
        flex : 2,
        padding: 15,
        justifyContent: "flex-start",
    },
    text: {
        color: "black",
        fontSize: 25,
        lineHeight: 30,
        fontWeight: "bold",
        alignSelf: "center",
        backgroundColor: "white",
    },
});

export default Title;