import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { FAB, Portal } from "react-native-paper";

function ExitButton({ VillageEn }) {
    const navigation = useNavigation();

    return (
        <Portal>
            <FAB
                style={styles.fab}
                icon="door-open"
                onPress={() => navigation.navigate("VillageEn")}
            />
        </Portal>
    );
};

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

export default ExitButton;