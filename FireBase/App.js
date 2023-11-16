import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen"; // Update the path to your LoginScreen file
import HomeScreen from "./HomeScreen"; // Update the path to your HomeScreen file
import AuthLoadingScreen from "./AuthLoadingScreen"; // Update the path to your AuthLoadingScreen file
import app from "./firebase";
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,Image
} from "react-native";
const Stack = createStackNavigator();

const App = () => {
  const [universities, setUniversities] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = getDatabase(app);
  //     const universitiesRef = ref(db, 'fastfood');

  //     onValue(universitiesRef, (snapshot) => {
  //       const data = snapshot.val();
  //       if (data) {
  //         const universityArray = Object.values(data);
  //         setUniversities(universityArray);
  //       }
  //     });
  //   };

  //   fetchData();
  // }, []);
  const initialize = () => {
    const db = getDatabase(app);

    const dbRef = ref(db, "mobeen");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      console.log("data is ==", data);
      setUniversities(data);
      // AsyncStorage.setItem("deals", JSON.stringify(data));
    });

    const dbRefSet = ref(db, "mobeen");
    set(dbRefSet, [
      {
        description: "Hello",
        img: "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%201.jpeg?alt=media&token=8d457d84-4ff1-4264-927e-1a620223a584",
        key: 0,
        price: 1400,
        title: "Deal 1",
      },
      {
        description: "Hello 2",
        img: "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%202.jpeg?alt=media&token=75f39345-4eda-4045-97d4-fa5bc7e80cde",
        key: 1,
        price: 1500,
        title: "Deal 2",
      },
      {
        description: "Hello 456",
        img: "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%203.png?alt=media&token=63187eb1-b1c7-439a-8cdc-a3753ec7cdc4",
        key: 2,
        price: 1800,
        title: "Deal 3",
      },
      {
        description: "Hello World",
        img: "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%204.jpeg?alt=media&token=feebbc83-8970-467b-8315-055a59179a04",
        key: 3,
        price: 1200,
        title: "Deal 4",
      },
      {
        description: "Hello 5",
        img: "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%205.jpeg?alt=media&token=bbe572eb-e05e-4c1c-97f7-46e20f63ad2b",
        key: 4,
        price: 800,
        title: "Deal 5",
      },
    ]);

    // var index = 3;
    // var refData = "mobeen/" + index;
    // const dbRefForUpdate = ref(db, refData);
    // update(dbRefForUpdate, { price: 2200, title: "Check 1", key: 43 });
  };

  const showPrice = () => {
    console.log("sadasd");
    if (!universities) return;

    const updatedData = {};

    // Iterate through items and update prices
    Object.entries(universities).forEach(([key, item]) => {
      if (item.price <= 1400) {
        updatedData[key + "/price"] = 1800; // Update price to 90% of the original price
      }
    });

    // Get a reference to the 'fastFood' node and update prices
    const database = getDatabase(app);
    const usersRef = ref(database, "mobeen");

    // Update the prices in the database
    update(usersRef, updatedData);
  };

  return (
    <View style={styles.container}>
  

      <FlatList
        data={universities}
        //  keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.idText}>{`ID: ${item.title}`}</Text>
            <Image source={{ uri: item.img }} style={{ width: 200, height: 200 }} />
            <Text style={styles.nameText}>{`Price: ${item.price}`}</Text>
            <Text style={styles.nameText}>{`Price: ${item.title}`}</Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={initialize}>
        <button style={{ fontSize: 30, color: "red" }}>
          GetData
        </button>
      </TouchableOpacity>
      <TouchableOpacity onPress={showPrice}>
        <button style={{ fontSize: 30, color: "red" }}>Change Price</button>
      </TouchableOpacity>
    </View>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="AuthLoading">
    //     <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} options={{ headerShown: false }} />
    //     <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
    //     <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  idText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  nameText: {
    fontSize: 16,
    color: "#555",
  },
});

export default App;
