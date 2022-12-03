import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";

const ItemsMenu = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        // <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    visible
                    placement="bottom-left"
                    icon={open ? "window-close" : "bag-personal"}
                    style={styles.fab}
                    // style={[
                    //     {
                    //         backgroundColor: "green",
                    //         position: "absolute",
                    //         bottom: 15,
                    //         right: 15,
                    //     },
                    // ]}
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
        /* </Provider> */
    );
};

const styles = StyleSheet.create({
    fab: {
        // backgroundColor: "green",
        position: "absolute",
        margin: 0,
        right: 15,
        bottom: 15,
    },
});

export default ItemsMenu;