import React from "react";
import { View, Text, Button } from "react-native";
import SecondScreen from "./SecondScreen";
// import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This is my FirstScreen</Text>
      <Button
        title="Goto Next"
        onPress={() => navigation.navigate("SecondScreen")}
      />
    </View>
  );
};

export default FirstScreen;
