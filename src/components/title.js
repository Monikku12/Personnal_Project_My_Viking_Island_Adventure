import * as React from "react";
import { Button, View, Text } from "react-native";

function Title({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>My Dragons Island Adventure</Text>
            <Button
                title="English"
                onPress={() => navigation.navigate("BedroomEn")}
            />
            <Button
                title="Français"
                onPress={() => navigation.navigate("BedroomFr")}
            />
        </View>
    );
}

export default Title;