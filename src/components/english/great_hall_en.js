import * as React from "react";
import { Button, View, Text } from "react-native";

import ItemsMenu from "./items_menu_en";

function GreatHallEn({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
            <Text>Great_Hall Screen</Text>
            <Button
                title="Exit"
                onPress={() => navigation.navigate("VillageEn")}
            />
            <ItemsMenu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    },
});

export default GreatHallEn;