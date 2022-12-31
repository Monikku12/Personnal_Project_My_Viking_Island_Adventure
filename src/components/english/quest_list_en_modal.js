import * as React from "react";
import { View, StyleSheet, ImageBackground, Icon } from "react-native";
import {
    Modal,
    Portal,
    IconButton,
    List,
    Image,
    Avatar,
} from "react-native-paper";

const backgroundImage = require("../../images/background/quest_list_background.png");

const item1 = require("../../images/items/egg.png");
const item2 = require("../../images/items/mint.png");
const item3 = require("../../images/items/potion.png");
const item4 = require("../../images/items/powder.png");
const item5 = require("../../images/items/shell.png");
const item6 = require("../../images/items/cinnamon.png");

function QuestListEnModal({ isOpen, onClose }) {
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
                        containerColor="#D9A74D"
                        iconColor="black"
                        animated="true"
                        icon="close"
                        onPress={onClose}
                    />
                    <List.Section style={styles.listSection}>
                        <List.Subheader style={styles.subheader}>
                            My Quests
                        </List.Subheader>
                        <View style={styles.listView}>
                            <List.Item
                                title="Eggs X 3"
                                // description="Item description"
                                left={(props) => (
                                    <Avatar.Image
                                        style={styles.itemIcon}
                                        source={item1}
                                    />
                                )}
                            />
                            <List.Item
                                title="First Item"
                                description="Item description"
                                //   left={props => <Image {...props} source="item1" />}
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
        // backgroundColor: "green",
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
        textDecorationLine: "underline",
        marginTop: "2%",
        // textShadowColor: "#8C6C31",
        // textShadowOffset: { width: 1, height: 1 },
        // textShadowRadius: 6,
        // backgroundColor: "#AE6F4C",
        // opacity: 0.7,
        // borderWidth: 1,
        // borderColor: "black",

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
        backgroundColor: "grey",
    },
    itemIcon: {
        size: 20,
        //   width: 20,
        //     resizeMode: "center",
        //     flexBasis: 165,
        //     tintColor: "black",
        //     opacity: 0.6,
        //     margin: "2%",
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
        backgroundColor: "transparent",
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