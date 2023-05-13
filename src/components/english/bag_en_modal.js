import * as React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Modal, Portal, IconButton, List } from "react-native-paper";

const backgroundImage = require("../../images/background/bag_background.jpg");


const item1 = require("../../images/items/egg.png");
const item2 = require("../../images/items/mint.png");
const item3 = require("../../images/items/potion.png");
const item4 = require("../../images/items/powder.png");
const item5 = require("../../images/items/shell.png");
const item6 = require("../../images/items/cinnamon.png");

function BagEnModal({ isOpen, onClose }) {
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
                        containerColor="transparent"
                        iconColor="black"
                        animated="true"
                        icon="close"
                        onPress={onClose}
                    />
                    <List.Section style={styles.listSection}>
                        <List.Subheader style={styles.header}>
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
                    </List.Section>
                </ImageBackground>
            </Modal>
        </Portal>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "blue",
        padding: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        overflow: "hidden",
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        // width: "100%",
        // height: "100%",
        borderColor: "#77814A",
        borderWidth: 10,
        borderRadius: 25,
        overflow: "hidden",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 10,
    },
    listSection: {
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        // borderColor: "#501600",
        // borderWidth: 10,
        borderRadius: 15,
        overflow: "hidden",
    },
    header: {
        alignSelf: "center",
        color: "black",
        fontSize: 25,
        lineHeight: 25,
        fontFamily: "almendra_bold",
        textAlign: "center",
        textAlignVertical: "center",
        includeFontPadding: false,
        // backgroundColor: "#AE6F4C",
        marginTop: "2%",
        // borderWidth: 1,
        // borderColor: "black",
    },
    listView: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
    },
    itemImage: {
        resizeMode: "center",
        flexBasis: 165,
        tintColor: "black",
        opacity: 0.6,
        margin: "2%",
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        mode: "contained",
        backgroundColor: "#77814A",
        right: "-4%",
        top: "-10%",
        overflow: "visible",
    },
});

export default BagEnModal;
