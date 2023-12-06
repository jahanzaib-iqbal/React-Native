import React, { useEffect, useState } from "react";

import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
  const navigation = useNavigation();
  const [count, setCount] = React.useState(1);
  const [bg, setbg] = useState(global.setting.bg);
  const [fc, setfc] = useState(global.setting.fc);
  

  useEffect(() => {
    console.log("Count Mounted");
    console.log(" AT startup bg : ", bg, "fc : ", fc);

  }, [count]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("FirstScreen Focused");
      // console.log(`in 1st COlor bg : ${global.setting.bg} fc : ${global.setting.fc}df`);
      setbg(global.setting.bg);
      setfc(global.setting.fc);

      console.log("bg : ", bg, "fc : ", fc);
    });
    return unsubscribe;
  }, []);

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bg,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
