import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Modal, Portal } from "react-native-paper";

function QuestListEn({ navigation }) {
    const [visible, setVisible] = React.useState(false);
    
    // const showModal = () => setVisible(true);
    // const hideModal = () => setVisible(false);
    // const containerStyle = { backgroundColor: "white", padding: 20 };
    
    return (
        <Portal>
            <Modal
                contentContainerStyle={styles.containerStyle}
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Quests list goes here!!</Text>
                        <Button
                            style={styles.button}
                            onPress={() => setVisible(!visible)}
                        >
                            <Text style={styles.textStyle}> ✕ </Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </Portal>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        // flex: 1,
        // justifyContent: "flex-end",
        // alignItems: "flex-end",
        // position: "absolute",
        // size: "small",
        // small: "true",
        // margin: 15,
        // right: 16,
        // bottom: 16,
        backgroundColor: "white",
        padding: 20,
    },
    buttonView: {
        // flex: 1,
        textColor: "white",
        buttonColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default QuestListEn;