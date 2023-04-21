import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

function ExitButtonEnBedroom( ) {
    const navigation = useNavigation();

    return (
        <FAB
            style={styles.fab}
            icon="door-open"
            onPress={() => navigation.navigate("LonghouseEnScreen")}
        />
    );
}

const styles = StyleSheet.create({
    fab: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        position: "absolute",
        size: "small",
        small: "true",
        margin: 15,
        right: 16,
        bottom: 16,
    },
});

export default ExitButtonEnBedroom;
