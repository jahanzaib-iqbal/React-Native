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
import FIreStoreHome from "./FIreStoreHome";
const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
  

      <FIreStoreHome />
    </View>


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
