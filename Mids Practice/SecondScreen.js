import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native"

const SecondScreen = () => {

  const route = useRoute();
    const navigation = useNavigation({navigation, route});
   const {dummyData} = route.params;
  return (
    <View>
      <Text>This is my SecondScreen</Text>
      <Text>Data from Previous Screen : {dummyData}</Text>
      <Button title="Goto Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SecondScreen;
