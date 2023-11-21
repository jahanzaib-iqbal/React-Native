import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput, Button } from "react-native";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { myApp } from "./firebase";

const FIreStoreHome = () => {
  const [deals, setDeals] = useState([]);
  const [newDeal, setNewDeal] = useState({ name: "", price: "", desc: "" });

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const dealsCollection = collection(db, "MyTable1");

      onSnapshot(dealsCollection, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          key: doc.id,
        }));
        setDeals(data);
      });
    };

    fetchData();
  }, []);

  const addDeal = async () => {
    try {
      const db = getFirestore();
      const dealsCollection = collection(db, "MyTable1");
      await addDoc(dealsCollection, newDeal);
      setNewDeal({ name: "", price: "", desc: "" }); // Clear input fields after adding
    } catch (error) {
      console.error("Error adding deal: ", error);
    }
  };

  const deleteDeal = async (key) => {
    try {
      const db = getFirestore();
      const dealsCollection = collection(db, "MyTable1");
      await deleteDoc(doc(dealsCollection, key));
    } catch (error) {
      console.error("Error deleting deal: ", error);
    }
  };

  const updateDeal = async (key) => {
    try {
      const db = getFirestore();
      const dealsCollection = collection(db, "MyTable1");
      await updateDoc(doc(dealsCollection, key), newDeal);
    } catch (error) {
      console.error("Error updating deal: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={deals}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{`Name: ${item.name}`}</Text>
            <Text>{`Price: ${item.price}`}</Text>
            <Text>{`Description: ${item.desc}`}</Text>
            <Button color={'#F54B44'} title="Delete" onPress={() => deleteDeal(item.key)} />
            <Button color={'#162C46'} title="Update" onPress={() => updateDeal(item.key)} />
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={newDeal.name}
          onChangeText={(text) => setNewDeal({ ...newDeal, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={newDeal.price}
          onChangeText={(text) => setNewDeal({ ...newDeal, price: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={newDeal.desc}
          onChangeText={(text) => setNewDeal({ ...newDeal, desc: text })}
        />
        <Button color={'#4CB639'} title="Add Deal" onPress={addDeal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#162C46",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
  },
 
});

export default FIreStoreHome;
