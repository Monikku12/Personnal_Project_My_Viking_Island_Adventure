import * as React from "react";
import { Button, View, Text } from "react-native";

function BedroomEn({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>This is the Bedroom</Text>
            <Button
                title="Exit"
                onPress={() => navigation.navigate("VillageEn")}
            />
        </View>
    );
}

export default BedroomEn;