import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";

export default function App() {
  const Stack = createStackNavigator();
  global.setting = {
    bg: "black",
    fc: "white",
  };
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
