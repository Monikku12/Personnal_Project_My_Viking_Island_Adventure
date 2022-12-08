import * as React from "react";
import { Button, View, Text } from "react-native";

import ItemsMenu from "./items_menu_en";

function NecklaceTableEn({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Necklace_Table Screen</Text>
            <Button
                title="Exit"
                onPress={() => navigation.navigate("VillageEn")}
            />
            <ItemsMenu />
        </View>
    );
}

export default NecklaceTableEn;