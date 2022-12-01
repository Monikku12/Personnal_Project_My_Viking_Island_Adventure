import * as React from "react";
import { Button, View, Text } from "react-native";

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
        </View>
    );
}

export default VillageEn;