import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(" ");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    if (enteredGoalText !== " " && enteredGoalText.length > 0)
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
    setEnteredGoalText("");
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
    console.log(`Deleted`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <TouchableOpacity style={styles.button} onPress={addGoalHandler}>
          <Text style={{ color: "white" }}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalsHeading}>Goals</Text>
        <FlatList
          style={{ width: "100%" }}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View>
                <Pressable
                  android_ripple={{ color: "#dddddd" }}
                  onPress={deleteGoalHandler.bind(this, itemData.item.id)}
                  style={({ pressed }) => pressed && {opacity: .8}}
                >
                  <Text style={styles.goalsText}>
                    {"\u2022"} {itemData.item.text}
                  </Text>
                </Pressable>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 0.2,
    alignItems: "center",
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
  },
  inputContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  input: {
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    borderColor: "purple",
    flex: 0.7,
  },
  goalsHeading: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    color: "purple",
    borderBottomWidth: 1,
    borderColor: "purple",
    marginBottom: 10,
  },
  goalContainer: {
    flex: 0.9,
    width: "90vw",
    margin: "auto",
    borderRadius: 10,
  },
  goalsText: {
    color: "white",
    fontSize: 13,
    margin: 8,
    padding: 5,
    textAlign: "left",

    marginBottom: 2,
    textDecorationStyle: "dotted",
    backgroundColor: "#610C9F",
    borderRadius: 11,
  },
});
