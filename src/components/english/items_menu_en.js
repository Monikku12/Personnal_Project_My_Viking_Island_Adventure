import * as React from "react";
import { FAB, Portal, Provider } from "react-native-paper";

const ItemsMenu = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    visible
                    icon={open ? "window-close" : "bag-personal"}
                    style={[
                        {
                        backgroundColor: "green",
                        }
                    ]}
                    actions={[
                        {
                            icon: "bag-personal",
                            onPress: () => console.log("Pressed add"),
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
                            icon: "cog-outline",
                            label: "Options",
                            onPress: () => console.log("Pressed notifications"),
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
        </Provider>
    );
};

export default ItemsMenu;