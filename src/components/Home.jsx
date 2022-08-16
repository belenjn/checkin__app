import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";

export const Home = () => {
  return (
    <View>
      <View
        style={{
          marginTop: Constants.statusBarHeight,
          backgroundColor: "#222222",
          height: 100,
        }}
      ></View>
    <View style={styles.container}>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    width: "100%",
    height: "90%",
  },
});
