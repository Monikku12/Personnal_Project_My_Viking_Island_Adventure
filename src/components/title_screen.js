import * as React from "react";
import { View, Image, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const backgroundImage = require("../images/background/title_background.png");
const logo = require("../images/logo/title_logo.png");

function TitleScreen({ navigation }) {
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
                            children="English"
                            // TODO: Change color of buttonView to make it visible/invisible (color=transparent) to set true background.
                            buttonColor="#C3A964"
                            right="20%"
                            bottom="-5%"
                            onPress={() =>
                                navigation.navigate("BedroomEnScreen")
                            }
                        />
                    </View>
                    <View style={styles.imageView}>
                        <Image style={styles.logo} source={logo} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            style={styles.button}
                            contentStyle={styles.contentStyle}
                            labelStyle={styles.labelStyle}
                            children="Français"
                            // TODO: Change color of buttonView to make it visible/invisible (color=transparent) to set true background.
                            buttonColor="#C3A964"
                            left="20%"
                            bottom="-5%"
                            onPress={() =>
                                navigation.navigate("BedroomFrScreen")
                            }
                        />
                    </View>
                </View>
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
        flexDirection: "row",
        JustifyContent: "center",
        alignItems: "center",
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
    labelStyle: {
        color: "black",
        fontFamily: "viking_medium",
        fontSize: 15,
    },
    imageView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "center",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TitleScreen;