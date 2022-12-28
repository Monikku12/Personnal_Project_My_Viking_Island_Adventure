import * as React from "react";
import { StyleSheet } from "react-native";
import { Modal, Portal, Text, Button } from "react-native-paper";

function QuestListEnModal({ isOpen, onClose }) {
    React.useEffect(() => {
        console.log("[QuestListEnModal] isOpen:", isOpen);
    }, [isOpen]);

    return (
        <Portal>
            <Modal
                visible={isOpen}
                onDismiss={onClose}
                contentContainerStyle={styles.containerStyle}
            >
                <Text>Example Modal. Click outside this area to dismiss.</Text>
                <Button
                    style={styles.button}
                    contentStyle={styles.contentStyle}
                    labelStyle={styles.labelStyle}
                    children="✕"
                    buttonColor="blue"
                    right="10%"
                    top="5%"
                    onPress={onClose}
                ></Button>
            </Modal>
        </Portal>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "white",
        padding: 20,
        // height: "60%",
        // wide: "60%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
        marginBottom: 80,
        marginLeft: 20,
        marginRight: 20,
        // position: "absolute"
    },
    contentStyle: {
        flex: 1,
        flexDirection: "row",
        JustifyContent: "center",
        alignItems: "center",
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        mode: "contained",
    },
    labelStyle: {
        color: "black",
        fontFamily: "viking_medium",
        fontSize: 30,
    },
});

export default QuestListEnModal;