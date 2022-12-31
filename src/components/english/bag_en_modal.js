import * as React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Modal, Portal, IconButton, List } from "react-native-paper";

const backgroundImage = require("../../images/background/bag_background.jpg");

// const deviceHeight = Dimensions.get("window").height;

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
                        containerColor="#AE6F4C"
                        iconColor="black"
                        animated="true"
                        icon="close"
                        onPress={onClose}
                    />
                    {/* <View style={styles.modalView}> */}
                    <List.Section style={styles.listSection}>
                        <List.Subheader style={styles.subheader}>
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
                    {/* </View> */}
                </ImageBackground>
            </Modal>
        </Portal>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "green",
        padding: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,

        // height: "60%",
        // wide: "60%",
        // position: "absolute"
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    // modalView: {
    //     flex: 1,
    //     // justifyContent: "center",
    //     // alignItems: "center",
    //     backgroundColor: "yellow",
    // },
    listSection: {
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",

        // flexDirection: "row",
        // alignItems: "space-around",
        // backgroundColor: "blue",
    },
    subheader: {
        alignSelf: "center",
        color: "black",
        fontSize: 22,
        lineHeight: 25,
        fontFamily: "almendra_bold",
        textAlign: "center",
        textAlignVertical: "center",
        includeFontPadding: false,
        backgroundColor: "#AE6F4C",
        marginTop: "2%",
        borderWidth: 1,
        borderColor: "black",

        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        // fontWeight: "bold",
        // marginLeft: "40%",
        // marginRight: "40%",
        // marginBottom: "2%",
        // position: "relative",
        // top: "5%",
    },
    listView: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",

        // justifyContent: "space-around",
        //     flex: 12,
        //     flexDirection: "row",
        //     flexWrap: "wrap",
        //     justifyContent: "space-around",
        //     alignItems: "center",
        //     // alignContent: "stretch",
        // flexBasis: 50,
        // height: "100%",
        // backgroundColor: "grey",
    },
    itemImage: {
        resizeMode: "center",
        flexBasis: 165,
        tintColor: "black",
        opacity: 0.6,
        margin: "2%",
        // borderRadius: 20,
        // borderColor: "black",
        // borderWidth: 3,

        // flex: 1,
        // flexDirection: "row",
        // flexWrap: "wrap",
        // shadowColor: "black",
        // justifyContent: "space-around",
        // alignItems: "center",
        // alignContent: "stretch",
        // width: 50,
        // width: "100%",
        // height: 30,
        // height: deviceHeight /2,
        // backgroundColor: "red",
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

export default BagEnModal;
