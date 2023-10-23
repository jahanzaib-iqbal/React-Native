import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
const SecondScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>This is my SecondScreen</Text>
      <Button title="Goto Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SecondScreen;
