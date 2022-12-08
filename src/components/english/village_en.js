import * as React from "react";
import { Button, View, Text } from "react-native";

import ItemsMenu from "./items_menu_en";

function VillageEn({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Village Screen</Text>
            <Button
                title="BlacksmithEn"
                onPress={() => navigation.navigate("BlacksmithEn")}
            />
            <Button
                title="FarmEn"
                onPress={() => navigation.navigate("FarmEn")}
            />
            <Button
                title="GreatHallEn"
                onPress={() => navigation.navigate("GreatHallEn")}
            />
            <Button
                title="NecklaceTableEn"
                onPress={() => navigation.navigate("NecklaceTableEn")}
            />
            <Button
                title="BedroomEn"
                onPress={() => navigation.navigate("BedroomEn")}
            />
            <ItemsMenu />
        </View>
    );
}

export default VillageEn;