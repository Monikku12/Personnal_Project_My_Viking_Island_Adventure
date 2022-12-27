import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";

import TitleScreen from "./src/components/title_screen";

import BagEn from "./src/components/english/bag_en";
import BedroomEnScreen from "./src/components/english/bedroom_en_screen";
import BlacksmithEnScreen from "./src/components/english/blacksmith_en_screen";
import FarmEnScreen from "./src/components/english/farm_en_screen";
import GreatHallEnScreen from "./src/components/english/great_hall_en_screen";
import LonghouseEnScreen from "./src/components/english/longhouse_en_screen";
import NotebookEn from "./src/components/english/notebook_en";
import OptionsEn from "./src/components/english/options_en";
import QuestListEnModal from "./src/components/english/quest_list_en_modal";
import VillageEnScreen from "./src/components/english/village_en_screen";

// import BagFr from "./src/components/french/bag_fr";
// import BedroomFrScreen from "./src/components/french/bedroom_fr_screen";
// import BlacksmithFrScreen from "./src/components/french/blacksmith_fr_screen";
// import FarmFrScreen from "./src/components/french/farm_fr_screen";
// import GreatHallFrScreen from "./src/components/french/great_hall_fr_screen";
// import LonghouseFrScreen from "./src/components/french/longhouse_fr_screen";
// import NotebookFr from "./src/components/french/notebook_fr";
// import OptionsFr from "./src/components/french/options_fr";
// import QuestListFr from "./src/components/french/quest_list_fr";
// import VillageFrScreen from "./src/components/french/village_fr_screen";

const Stack = createNativeStackNavigator();

function App() {
    const [loaded] = useFonts({
        viking_medium: require("./assets/fonts/viking_medium.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <PaperProvider>
            <StatusBar hidden={true} />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="TitleScreen" component={TitleScreen} />
                    <Stack.Screen name="BagEn" component={BagEn} />
                    <Stack.Screen
                        name="BedroomEnScreen"
                        component={BedroomEnScreen}
                    />
                    <Stack.Screen
                        name="BlacksmithEnScreen"
                        component={BlacksmithEnScreen}
                    />
                    <Stack.Screen
                        name="FarmEnScreen"
                        component={FarmEnScreen}
                    />
                    <Stack.Screen
                        name="GreatHallEnScreen"
                        component={GreatHallEnScreen}
                    />
                    <Stack.Screen
                        name="LonghouseEnScreen"
                        component={LonghouseEnScreen}
                    />
                    <Stack.Screen name="OptionsEn" component={OptionsEn} />
                    <Stack.Screen
                        name="QuestListEnModal"
                        component={QuestListEnModal}
                    />
                    <Stack.Screen name="NotebookEn" component={NotebookEn} />
                    <Stack.Screen
                        name="VillageEnScreen"
                        component={VillageEnScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;
