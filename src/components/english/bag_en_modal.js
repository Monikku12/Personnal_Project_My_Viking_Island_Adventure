import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Modal, Portal, IconButton, List, Text } from "react-native-paper";

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
                <IconButton
                    style={styles.button}
                    containerColor="transparent"
                    iconColor="black"
                    animated="true"
                    icon="close"
                    onPress={onClose}
                />
                <ImageBackground
                    source={backgroundImage}
                    style={styles.imageBackground}
                >
                    <Text style={styles.text}>My Items</Text>
                    <List.Section style={styles.listSection}>
                        <List.Item
                            style={styles.questItem}
                            title="x 1"
                            titleStyle={styles.title}
                            left={() => (
                                <List.Image
                                    style={styles.itemImage}
                                    variant="image"
                                    source={item1}
                                />
                            )}
                        />
                        <List.Item
                            style={styles.questItem}
                            title="x 1"
                            titleStyle={styles.title}
                            left={() => (
                                <List.Image
                                    style={styles.itemImage}
                                    variant="image"
                                    source={item2}
                                />
                            )}
                        />
                        <List.Item
                            style={styles.questItem}
                            title="x 1"
                            titleStyle={styles.title}
                            left={() => (
                                <List.Image
                                    style={styles.itemImage}
                                    variant="image"
                                    source={item3}
                                />
                            )}
                        />
                        <List.Item
                            style={styles.questItem}
                            title="x 1"
                            titleStyle={styles.title}
                            left={() => (
                                <List.Image
                                    style={styles.itemImage}
                                    variant="image"
                                    source={item4}
                                />
                            )}
                        />
                        <List.Item
                            style={styles.questItem}
                            title="x 1"
                            titleStyle={styles.title}
                            left={() => (
                                <List.Image
                                    style={styles.itemImage}
                                    variant="image"
                                    source={item5}
                                />
                            )}
                        />
                        <List.Item
                            style={styles.questItem}
                            title="x 1"
                            titleStyle={styles.title}
                            left={() => (
                                <List.Image
                                    style={styles.itemImage}
                                    variant="image"
                                    source={item6}
                                />
                            )}
                        />
                    </List.Section>
                </ImageBackground>
            </Modal>
        </Portal>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        shadowColor: "transparent",
        padding: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 25,
        overflow: "hidden",
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        borderColor: "#77814A",
        borderWidth: 10,
        borderRadius: 25,
        overflow: "hidden",
        marginLeft: 15,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        alignSelf: "center",
        color: "#000000",
        fontSize: 25,
        lineHeight: 25,
        fontFamily: "almendra_bold",
        textAlign: "center",
        textAlignVertical: "center",
        includeFontPadding: false,
        // backgroundColor: "#FFFD55",
        marginTop: "2%",
    },
    listSection: {
        // backgroundColor: "#EB3324",
        flexDirection: "row",
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
    },
    questItem: {
        // backgroundColor: "#FF7F27",
        flexBasis: "25%",
        paddingLeft: "2%",
        paddingRight: "2%",
        borderColor: "#77814A",
        borderWidth: 5,
        borderRadius: 25,
        overflow: "hidden",
        margin: "1%",
    },
    title: {
        color: "#000000",
        fontSize: 25,
        // backgroundColor: "#377D22",
        textAlign: "center",
    },
    itemImage: {
        // backgroundColor: "#0023F5",
        resizeMode: "contain",
        tintColor: "#000000",
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        mode: "contained",
        backgroundColor: "#77814A",
        right: "-0.5%",
        top: "-1.5%",
        overflow: "hidden",
    },
});

export default BagEnModal;
