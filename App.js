import React from "react";
// import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Title from "./src/components/title";

import BagEn from "./src/components/english/bag_en";
import BedroomEn from "./src/components/english/bedroom_en";
import BlacksmithEn from "./src/components/english/blacksmith_en";
import FarmEn from "./src/components/english/farm_en";
import GreatHallEn from "./src/components/english/great_hall_en";
import NecklaceTableEn from "./src/components/english/necklace_table_en";
import NotebookEn from "./src/components/english/notebook_en";
import OptionsEn from "./src/components/english/options_en";
import QuestListEn from "./src/components/english/quest_list_en";
import VillageEn from "./src/components/english/village_en";

// import BagFr from "./src/components/french/bag_fr";
// import BedroomFr from "./src/components/french/bedroom_fr";
// import BlacksmithFr from "./src/components/french/blacksmith_fr";
// import FarmFr from "./src/components/french/farm_fr";
// import GreatHallFr from "./src/components/french/great_hall_fr";
// import NecklaceTableFr from "./src/components/french/necklace_table_fr";
// import NotebookFr from "./src/components/french/notebook_fr";
// import OptionsFr from "./src/components/french/options_fr";
// import QuestListFr from "./src/components/french/quest_list_fr";
// import VillageFr from "./src/components/french/village_fr";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Title" component={Title} />
                <Stack.Screen name="BagEn" component={BagEn} />
                <Stack.Screen name="BedroomEn" component={BedroomEn} />
                <Stack.Screen name="BlacksmithEn" component={BlacksmithEn} />
                <Stack.Screen name="FarmEn" component={FarmEn} />
                <Stack.Screen name="GreatHallEn" component={GreatHallEn} />
                <Stack.Screen
                    name="NecklaceTableEn"
                    component={NecklaceTableEn}
                />
                <Stack.Screen name="OptionsEn" component={OptionsEn} />
                <Stack.Screen name="QuestListEn" component={QuestListEn} />
                <Stack.Screen
                    name="NotebookEn"
                    component={NotebookEn}
                />
                <Stack.Screen name="VillageEn" component={VillageEn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;