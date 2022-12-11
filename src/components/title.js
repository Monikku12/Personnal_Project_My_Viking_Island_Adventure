import * as React from "react";
import {
    Button,
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
} from "react-native";

const logo = require("../images/logo/title_logo.png");
const backgroundImage = require("../images/background/title_background.png");

function Title({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}
            >
                <Image style={styles.logo} source={logo} />
                <Text style={styles.text}>My Dragons Island Adventure</Text>
                <Button
                    style={styles.button}
                    title="English"
                    onPress={() => navigation.navigate("BedroomEn")}
                />
                <Button
                    style={styles.button}
                    title="Français"
                    onPress={() => navigation.navigate("BedroomFr")}
                />
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
    logo: {
        flex: 1,
        width: "25%",
        height: "50%",
        resizeMode: "center",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
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

export default Title;