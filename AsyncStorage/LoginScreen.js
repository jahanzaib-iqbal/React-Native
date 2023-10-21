import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('white');

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',
      ()=>{
        // Fetch mode from AsyncStorage when the component mounts
    const fetchData = async () => {
        try {
          const storedMode = await AsyncStorage.getItem('mode');
          if (storedMode) {
              console.log(storedMode);
              setMode(storedMode);
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

//   useEffect(() => {
    
//     // Fetch mode from AsyncStorage when the component mounts
//     const fetchData = async () => {
//       try {
//         const storedMode = await AsyncStorage.getItem('mode');
//         if (storedMode) {
//             console.log(storedMode);
//             setMode(storedMode);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();

//   }, [navigation]); // Empty dependency array ensures useEffect runs once after initial render

  const handleLogin = async () => {
    // Fetch existing users from AsyncStorage
    let users = await AsyncStorage.getItem('users');
    users = users ? JSON.parse(users) : {};

    // Check if the username already exists
    if (users[username]) {
      // If user exists, check the password
      if (users[username].password === password) {
        // Store mode and navigate to Home screen
        await AsyncStorage.setItem('mode', mode);
        navigation.navigate('Home');
      } else {
        alert('Incorrect password. Please try again.');
      }
    } else {
      // If user doesn't exist, create a new user entry
      users[username] = { password, mode: 'white' };
      await AsyncStorage.setItem('users', JSON.stringify(users));
      await AsyncStorage.setItem('mode', 'white');
        users = await AsyncStorage.getItem('users');
        users = users ? JSON.parse(users) : {};
        console.log(users);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: mode}]}>
      <TextInput
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    color:'red',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default LoginScreen;
