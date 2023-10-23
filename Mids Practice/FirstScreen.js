import React from "react";
import { View, Text, Button, StyleSheet, useState } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
  const navigation = useNavigation();

  const [count, setCount] = React.useState(1);

  const addCount = () => {
    setCount((prevCount) => prevCount + 1)
  };


  return (
    <View style={styles.container}>
      <Text>This is my FirstScreen</Text>
      <Text style={{ fontSize: 40 }}> Count : {count}</Text>
      <Button title="Add +1" onPress={addCount} />
      <Button
        title="Goto Next"
        onPress={() =>
          navigation.navigate("SecondScreen", { dummyData: "Hello World" })
        }
      />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
