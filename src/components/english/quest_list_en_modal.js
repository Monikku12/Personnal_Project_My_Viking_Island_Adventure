import * as React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Modal, Portal, Text, IconButton, List } from "react-native-paper";

const backgroundImage = require("../../images/background/bag_background.jpg");
const

function QuestListEnModal({ isOpen, onClose }) {
    // React.useEffect(() => {
    //     console.log("[QuestListEnModal] isOpen:", isOpen);
    // }, [isOpen]);

    // const [possession, setPossession] = React.useState(false);
    // const received = () => setReceived(true);
    // const notReceived = () => setReceived(false);

    return (
        <Portal>
            <Modal
                visible={isOpen}
                onDismiss={onClose}
                contentContainerStyle={styles.containerStyle}
            >
                <ImageBackground
                    source={backgroundImage}
                    style={styles.imageBackground}
                >
                    <List.Subheader style={styles.text}>
                        My Items
                    </List.Subheader>
                    <IconButton
                        style={styles.button}
                        // contentStyle={styles.contentStyle}
                        // labelStyle={styles.labelStyle}
                        containerColor="#AE6F4C"
                        iconColor="black"
                        animated="true"
                        icon="close"
                        onPress={onClose}
                    />
                    <View style={styles.listView}>
                        <List.Image
                            style={styles.itemImage}
                            variant="image"
                            source={require("../../images/items/egg.png")}
                        />
                        <List.Image
                            style={styles.itemImage}
                            variant="image"
                            source={require("../../images/items/cinnamon.png")}
                        />
                        <List.Image
                            style={styles.itemImage}
                            variant="image"
                            source={require("../../images/items/potion.png")}
                        />
                        <List.Image
                            style={styles.itemImage}
                            variant="image"
                            source={require("../../images/items/shell.png")}
                        />
                        <List.Image
                            style={styles.itemImage}
                            variant="image"
                            source={require("../../images/items/mint.png")}
                        />
                        <List.Image
                            style={styles.itemImage}
                            variant="image"
                            source={require("../../images/items/powder.png")}
                        />
                    </View>
                </ImageBackground>
            </Modal>
        </Portal>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "green",
        padding: 0,
        // height: "60%",
        // wide: "60%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        // position: "absolute"
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    listView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    itemImage: {
        flex: 1,
        resizeMode: "center",
        // justifyContent: "center",
        // alignItems: "center",
        width: "100%",
        height: "100%",
        tintColor: "black",
        borderRadius: 20,
        backgroundColor: "transparent",
        borderColor: "black",
        borderWidth: 2,
        margin: "2%",
        paddingBottom: 30,
        paddingTop: 15,
    },
    // textView: {
    //     flex: 0,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     position: "absolute",
    //     top: "5%",
    //     padding: 15,
    // },

    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        mode: "text",
        right: "2%",
        top: "5%",
    },
    text: {
        flex: 1,
        justifyContent: "center",
        color: "black",
        fontSize: 12,
        lineHeight: 15,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#AE6F4C",
        marginLeft: "40%",
        marginRight: "40%",
        position: "absolute",
        top: "5%",
        borderWidth: 1,
        borderColor: "black",
    },
});

export default QuestListEnModal;