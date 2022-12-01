import * as React from "react";
import { Button, View, Text } from "react-native";

function FarmEn({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Farm Screen</Text>
            <Button
                title="Exit"
                onPress={() => navigation.navigate("VillageEn")}
            />
        </View>
    );
}

export default FarmEn;