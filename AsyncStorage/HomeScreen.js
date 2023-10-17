import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [mode, setMode] = useState('white');

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',
      ()=>{
        // Fetch mode from AsyncStorage when the component mounts
        const fetchData = async () => {
            try {
              const storedMode = await AsyncStorage.getItem('mode');
              if (storedMode) {
                setMode(storedMode);
                console.log(storedMode);
              }
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();
      }
    );
    return unsubscribe;
  },[navigation])
 

  const toggleMode = async () => {
    // Toggle mode between white and black and update in AsyncStorage
    const newMode = mode === 'white' ? 'black' : 'white';
    

    setMode(newMode);
    await AsyncStorage.setItem('mode', newMode);
    console.log(mode);
  };

  const handleLogout = async () => {
    // Clear user data and navigate to Login screen
    try {
      //await AsyncStorage.clear();
      let users = await AsyncStorage.getItem('users');
    users = users ? JSON.parse(users) : {};
    console.log(users);
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: mode }]}>
      <Switch
        value={mode === 'black'}
        onValueChange={toggleMode}
        style={styles.switch}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    marginBottom: 20,
  },
});

export default HomeScreen;
