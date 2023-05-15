import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import {
    Modal,
    Portal,
    IconButton,
    List,
    Text
} from "react-native-paper";

const backgroundImage = require("../../images/background/quest_list_background.png");

const item1 = require("../../images/icons/egg.png");
const item2 = require("../../images/icons/mint.png");
const item3 = require("../../images/icons/potion.png");
const item4 = require("../../images/icons/powder.png");
const item5 = require("../../images/icons/shell.png");
const item6 = require("../../images/icons/cinnamon.png");

function QuestListEnModal({ isOpen, onClose }) {
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
                    <Text style={styles.text}>My Quests</Text>
                    <List.Section style={styles.listSection}>
                        <List.Item
                            style={styles.questItem}
                            title="3 eggs"
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
                            title="2 mint leaves"
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
                            title="2 flasks of viper's venom"
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
                            title="6 spoons of rock powder"
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
                            title="5 shells"
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
                            title="1 cinnamon stick"
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
        // borderRadius: 10,
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
        backgroundColor: "#FFFD55",
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
        flexBasis: "40%",
        justifyContent: "center",
        paddingLeft: "0%",
        paddingRight: "0%",
        height: "30%",
        overflow: "hidden",
        margin: "0.5%",
    },
    title: {
        // backgroundColor: "#377D22",
        color: "#000000",
        fontSize: 15,
        // lineHeight: 20,
        // fontFamily: "almendra_bold",
        textAlign: "left",
        // textAlignVertical: "center",
        // includeFontPadding: false,
        // numberOfLines: "2",
    },
    itemImage: {
        // backgroundColor: "#0023F5",
        resizeMode: "contain",
    },
    // ************* ok ***********
    
    
    titleDone: {
        textDecorationLine: "line-through",
        opacity: 0.5,
    },
    itemImageDone: {
        opacity: 0.5,
    },

    // ******** OK **********
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        // mode: "text",
        mode: "contained",
        backgroundColor: "#77814A",
        right: "-0.5%",
        top: "-1.5%",
        overflow: "hidden",
    },
});

export default QuestListEnModal;