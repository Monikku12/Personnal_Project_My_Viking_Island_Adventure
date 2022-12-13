import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB, Portal } from "react-native-paper";

const ExitButton = () => {
    return (
        <Portal>
            <FAB
                style={styles.fab}
                icon="door-open"
                onPress={() => navigation.goBack()}
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