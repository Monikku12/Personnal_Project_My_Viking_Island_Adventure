import * as React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Modal, Portal, Text, IconButton, List } from "react-native-paper";

const backgroundImage = require("../../images/background/bag_background.jpg");

const item6 = require("../../images/items/cinnamon.png");
const item1 = require("../../images/items/egg.png");
const item2 = require("../../images/items/mint.png");
const item3 = require("../../images/items/potion.png");
const item4 = require("../../images/items/powder.png");
const item5 = require("../../images/items/shell.png");

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
                    <View style={styles.modalView}>
                        <List.Subheader style={styles.text}>
                            My Items
                        </List.Subheader>
                        <View style={styles.listView}>
                            <List.Image
                                style={styles.itemImage}
                                variant="image"
                                source={item1}
                            />
                            <List.Image
                                style={styles.itemImage}
                                variant="image"
                                source={item2}
                            />
                            <List.Image
                                style={styles.itemImage}
                                variant="image"
                                source={item3}
                            />
                            <List.Image
                                style={styles.itemImage}
                                variant="image"
                                source={item4}
                            />
                            <List.Image
                                style={styles.itemImage}
                                variant="image"
                                source={item5}
                            />
                            <List.Image
                                style={styles.itemImage}
                                variant="image"
                                source={item6}
                            />
                        </View>
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
    modalView: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "red",
    },
    text: {
        flex: 1,
        justifyContent: "center",
        color: "black",
        fontSize: 22,
        lineHeight: 25,
        // fontWeight: "bold",
        fontFamily: "almendra_bold",
        textAlign: "center",
        textAlignVertical: "center",
        includeFontPadding: false,
        backgroundColor: "#AE6F4C",
        marginTop: "2%",
        marginLeft: "40%",
        marginRight: "40%",
        marginBottom: "2%",
        // position: "absolute",
        // top: "5%",
        borderWidth: 1,
        borderColor: "black",
    },
    listView: {
        flex: 12,
        flexDirection: "row",
        flexWrap: "wrap",
        // justifyContent: "space-around",
        // alignItems: "stretch",
        // alignContent: "stretch",
        backgroundColor: "grey",
    },
    itemImage: {
        flex: 1,
        // flexWrap: "wrap",
        resizeMode: "center",
        // justifyContent: "space-around",
        // alignContent: "stretch",
        // width: "100%",
        // height: "100%",
        // tintColor: "black",
        borderRadius: 20,
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 2,
        margin: "2%",
        // paddingBottom: 30,
        // paddingTop: 15,
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        mode: "text",
        right: "2%",
        top: "5%",
    },
});

export default QuestListEnModal;