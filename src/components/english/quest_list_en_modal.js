import * as React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import {
    Modal,
    Portal,
    IconButton,
    List,
    Avatar,
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
                                style={styles.questItem}
                                title="3 eggs"
                                titleStyle={styles.questItemTitle}
                                left={() => (
                                    <Avatar.Image
                                        style={styles.questItemIcon}
                                        source={item1}
                                    />
                                )}
                            />
                            <List.Item
                                style={styles.questItem}
                                title="2 mint leaves"
                                titleStyle={styles.questItemTitle}
                                left={() => (
                                    <Avatar.Image
                                        style={styles.questItemIcon}
                                        source={item2}
                                    />
                                )}
                            />
                            <List.Item
                                style={styles.questItem}
                                title="2 flasks of viper's venom"
                                titleStyle={styles.questItemTitle}
                                left={() => (
                                    <Avatar.Image
                                        style={styles.questItemIcon}
                                        source={item3}
                                    />
                                )}
                            />
                            <List.Item
                                style={styles.questItem}
                                title="6 spoons of rhomb-porphyry rock powder"
                                titleStyle={styles.questItemTitle}
                                left={() => (
                                    <Avatar.Image
                                        style={styles.questItemIcon}
                                        source={item4}
                                    />
                                )}
                            />
                            <List.Item
                                style={styles.questItem}
                                title="5 shells"
                                titleStyle={
                                    (styles.questItemTitle)
                                }
                                left={() => (
                                    <Avatar.Image
                                        style={styles.questItemIcon}
                                        source={item5}
                                    />
                                )}
                            />
                            <List.Item
                                style={styles.questItem}
                                title="1 cinnamon stick"
                                titleStyle={styles.questItemTitle}
                                left={() => (
                                    <Avatar.Image
                                        style={styles.questItemIcon}
                                        source={item6}
                                    />
                                )}
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
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    listSection: {
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignContent: "center",
        width: "100%",
    },
    subheader: {
        alignSelf: "center",
        color: "black",
        fontSize: 22,
        lineHeight: 15,
        fontFamily: "almendra_bold",
        textAlign: "center",
        textAlignVertical: "bottom",
        includeFontPadding: false,
        textDecorationLine: "underline",
        marginTop: 15,
    },
    listView: {
        flex: 1,
        flexWrap: "wrap",
        width: "90%",
        justifyContent: "flex-start",
        alignContent: "stretch",
        marginTop: -20,
    },
    questItem: {
        justifyContent: "center",
        alignContent: "flex-start",
        marginBottom: "-1%",
    },
    questItemTitle: {
        alignSelf: "flex-start",
        color: "black",
        fontSize: 15,
        lineHeight: 20,
        fontFamily: "almendra_bold",
        textAlign: "left",
        textAlignVertical: "center",
        includeFontPadding: false,
        numberOfLines: "2",
        marginLeft: -2,
        marginRight: -25,
    },
    questItemIcon: {
        resizeMode: " center",
        backgroundColor: "transparent",
    },
    questItemTitleDone: {
        textDecorationLine: "line-through",
        opacity: 0.5,
    },
    questItemIconDone: {
        opacity: 0.5,
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