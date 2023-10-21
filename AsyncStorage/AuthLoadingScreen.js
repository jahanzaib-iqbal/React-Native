import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Check user authentication status in AsyncStorage
    const checkAuthentication = async () => {
      try {
        const userToken = await AsyncStorage.getItem('users');
        // If user data exists, navigate to Home screen; otherwise, navigate to Login screen
        navigation.navigate(userToken ? 'Home' : 'Login');
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthentication();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthLoadingScreen;
