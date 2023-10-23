import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { useNavigation, useRoute } from "@react-navigation/native";

const SecondScreen = () => {

  const route = useRoute();
  const navigation = useNavigation({ navigation, route });
  const [bg, setbg] = useState(global.setting.bg);
  const [fc, setfc] = useState(global.setting.fc);
  const { dummyData } = route.params;

  useEffect(() => {
    console.log("SecondScreen Mounted");
    console.log('Seconfd screen initial colors are : ', bg, fc)

    return () => {
    console.log('Returing and colors are : ', bg, fc)
    };
  }, []);


  const changeTheme = () => {
    setbg(bg == "white" ? "black" : "white");
    setfc(fc == "white" ? "black" : "white");

    console.log(`After Change bg : ${bg} fc : ${fc}`)
  };

  return (
    <View
      style={{
        backgroundColor: bg,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{color: fc}}>This is my SecondScreen</Text>
      <Text style={{color: fc}}>Data from Previous Screen : {dummyData}</Text>
      <Button title="Goto Back" onPress={() => navigation.goBack()} />
      <Button title="Change Theme" onPress={changeTheme} />
    </View>
  );
};

export default SecondScreen;
