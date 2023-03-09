import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import {
  View,
  Text,
} from "react-native";

const HomeScreen = props => {
  const {navigation} = props;

  const loadProfile = async () => {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      navigation.navigate("Login");
    }

    console.log(token);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;

