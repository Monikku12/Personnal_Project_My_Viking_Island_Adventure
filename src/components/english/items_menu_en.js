import * as React from "react";
// import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
// import { useIsFocused } from "@react-navigation/native";
import { FAB, Portal } from "react-native-paper";

const ItemsMenu = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <Portal>
            <FAB.Group
                open={open}
                placement="left"
                icon={open ? "window-close" : "bag-personal"}
                style={styles.fab}
                actions={[
                    {
                        icon: "cog-outline",
                        label: "Options",
                        onPress: () => console.log("Pressed notifications"),
                    },
                    {
                        icon: "script-text-outline",
                        label: "Quest",
                        onPress: () => console.log("Pressed star"),
                    },
                    {
                        icon: "book-open-page-variant-outline",
                        label: "Notebook",
                        onPress: () => console.log("Pressed email"),
                    },
                    {
                        icon: "bag-personal",
                        label: "Items",
                        onPress: () => console.log("Pressed add"),
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        // do something if the speed dial is open
                    }
                }}
            />
        </Portal>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        margin: 0,
        left: 15,
        bottom: 15,
    },
});

export default ItemsMenu;