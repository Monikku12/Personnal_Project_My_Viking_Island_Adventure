import * as React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";

const logo = require("../../images/logo/title_logo.webp");

function Title({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Image
                style={styles.logo}
                source={logo}
            />
            <Text>My Dragons Island Adventure</Text>
            <Button
                title="English"
                onPress={() => navigation.navigate("BedroomEn")}
            />
            <Button
                title="Français"
                onPress={() => navigation.navigate("BedroomFr")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

export default Title;