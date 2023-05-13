import * as React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import {
    Modal,
    Portal,
    IconButton,
    List,
    // Switch,
    SegmentedButtons,
} from "react-native-paper";

const backgroundImage = require("../../images/background/quest_list_background.png");

function OptionEnModal ({ isOpen, onClose }) {
    
    const [value, setValue] = React.useState("");

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
                        <List.Subheader style={styles.subheader}>
                            Options
                        </List.Subheader>
                        <View style={styles.listView}>
                            <List.Item
                                style={styles.questItem}
                                title="Music"
                                titleStyle={styles.questItemTitle}
                                left={() => (
                                    <List.Icon
                                        style={styles.questItemIcon}
                                        icon="music"
                                        // TODO: Add icon change when switch is ON or OFF
                                        // icon="music-off"
                                    />
                                )}
                            />
                            <List.Item
                                style={styles.questItem}
                                title="Sounds"
                                titleStyle={styles.questItemTitle}
                                left={() => (
                                    <List.Icon
                                        style={styles.questItemIcon}
                                        icon="volume-high"
                                        // TODO: Add icon change when switch is ON or OFF
                                        // icon="volume-off"
                                    />
                                )}
                            />
                            <List.Item
                                style={styles.questItem}
                                title="language"
                                titleStyle={styles.questItemTitle}
                                right={() => (
                                    <SegmentedButtons
                                        value={value}
                                        onValueChange={setValue}
                                        style={styles.languageButton}
                                        buttons={[
                                            {
                                                value: "English",
                                                icon: "walk",
                                                label: "English",
                                                showSelectedCheck: true,
                                                onPress: () =>
                                                    console.log("English"),
                                            },
                                            {
                                                value: "English",
                                                icon: "walk",
                                                label: "Français",
                                                showSelectedCheck: true,
                                                onPress: () =>
                                                    console.log("Français"),
                                            },
                                        ]}
                                    />
                                )}
                            />
                            <List.Item
                                style={styles.questItem}
                                title="Credits"
                                titleStyle={styles.questItemTitle}
                                description={
                                    'Programmer: Monique "Monichan" Payment-Boulanger\nArtist: Joshua "Emmanuel" Minor'
                                }
                                descriptionStyle={styles.questItemDescription}
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
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // alignContent: "center",
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: "grey",
    },
    imageBackground: {
        flex: 1,
        resizeMode: "center",
        justifyContent: "center",
        // width: "100%",
        height: "100%",
        // borderRadius: 10,
    },
    listSection: {
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "80%",
        // backgroundColor: "cyan"
    },
    // subheader: {
    //     alignSelf: "center",
    //     color: "black",
    //     fontSize: 22,
    //     lineHeight: 15,
    //     fontFamily: "almendra_bold",
    //     textAlign: "center",
    //     textAlignVertical: "bottom",
    //     includeFontPadding: false,
    //     textDecorationLine: "underline",
    //     marginTop: 15,
    // },
    // listView: {
    //     flex: 1,
    //     flexWrap: "wrap",
    //     width: "90%",
    //     justifyContent: "flex-start",
    //     alignContent: "stretch",
    //     marginTop: -20,
    // },
    // questItem: {
    //     justifyContent: "center",
    //     alignContent: "flex-start",
    //     marginBottom: "-1%",
    // },
    // questItemTitle: {
    //     alignSelf: "flex-start",
    //     color: "black",
    //     fontSize: 15,
    //     lineHeight: 20,
    //     fontFamily: "almendra_bold",
    //     textAlign: "left",
    //     textAlignVertical: "center",
    //     includeFontPadding: false,
    //     numberOfLines: "2",
    //     marginLeft: -2,
    //     marginRight: -25,
    // },
    // languageButton: {
    //     backgroundColor: "violet",
    // },
    // questItemIcon: {
    //     resizeMode: " center",
    //     backgroundColor: "transparent",
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
});

export default OptionEnModal;